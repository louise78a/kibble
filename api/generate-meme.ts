import type { VercelRequest, VercelResponse } from "@vercel/node";

// La génération FLUX.2 peut dépasser le timeout par défaut (10 s) de Vercel.
export const config = { maxDuration: 60 };

const MODEL = "@cf/black-forest-labs/flux-2-dev";

function buildMemePrompt(userPrompt: string): string {
  return `Using the reference image (image 0) of Kibble, a tiny grey-and-white kitten with a cute plump belly, create a funny and creative meme image: ${userPrompt}. Keep the exact same kitten as the main subject. Make it visually engaging and meme-style. Do NOT add any text, captions, or writing on the image.`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { prompt } = req.body ?? {};
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
    const apiToken = process.env.CLOUDFLARE_API_TOKEN;
    if (!accountId || !apiToken) {
      return res.status(500).json({
        error: "Configuration Cloudflare manquante (CLOUDFLARE_ACCOUNT_ID / CLOUDFLARE_API_TOKEN).",
      });
    }

    // Image de référence : asset statique servi par le même déploiement.
    const host = req.headers["x-forwarded-host"] || req.headers.host;
    const proto = (req.headers["x-forwarded-proto"] as string) || "https";
    const refRes = await fetch(`${proto}://${host}/meme-ref.jpg`);
    if (!refRes.ok) {
      return res.status(500).json({ error: `Reference image not found (${refRes.status})` });
    }
    const imageBuffer = Buffer.from(await refRes.arrayBuffer());

    // Appel Cloudflare Workers AI (multipart/form-data, image en input_image_0).
    const form = new FormData();
    form.append("prompt", buildMemePrompt(prompt));
    // Résolution + steps réduits pour économiser le quota gratuit Cloudflare (neurons).
    form.append("width", "512");
    form.append("height", "512");
    form.append("steps", "8");
    form.append("input_image_0", new Blob([imageBuffer], { type: "image/jpeg" }), "reference");

    const cfRes = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/${MODEL}`,
      { method: "POST", headers: { Authorization: `Bearer ${apiToken}` }, body: form },
    );

    if (!cfRes.ok) {
      const detail = await cfRes.text().catch(() => "");
      return res.status(502).json({ error: `Cloudflare AI ${cfRes.status}: ${detail.slice(0, 300)}` });
    }

    const data = (await cfRes.json()) as { result?: { image?: string }; image?: string };
    const b64 = data.result?.image ?? data.image;
    if (!b64) {
      return res.status(502).json({ error: "Pas d'image dans la réponse Cloudflare" });
    }

    res.json({ b64_json: b64, mimeType: "image/png" });
  } catch (error: any) {
    console.error("Error generating meme:", error);
    res.status(500).json({ error: error?.message || "Failed to generate meme" });
  }
}
