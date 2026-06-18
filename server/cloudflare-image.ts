// Génération/édition d'image via Cloudflare Workers AI (modèle FLUX.2-dev).
// Gratuit (quota journalier), supporte une image de référence pour garder
// le même personnage. Appelé en REST depuis le serveur Express.
//
// Variables requises :
//   CLOUDFLARE_ACCOUNT_ID  — l'Account ID du dashboard Cloudflare
//   CLOUDFLARE_API_TOKEN   — un token API avec la permission "Workers AI"

const MODEL = "@cf/black-forest-labs/flux-2-dev";

if (!process.env.CLOUDFLARE_ACCOUNT_ID || !process.env.CLOUDFLARE_API_TOKEN) {
  console.warn(
    "[cloudflare-image] CLOUDFLARE_ACCOUNT_ID / CLOUDFLARE_API_TOKEN manquants. " +
      "Le générateur de memes ne fonctionnera pas tant qu'ils ne sont pas définis " +
      "(dashboard Cloudflare, permission Workers AI).",
  );
}

/**
 * Génère une image à partir d'un prompt et d'une image de référence.
 * Renvoie l'image générée en base64 (sans préfixe data URL).
 */
export async function generateMemeImage(
  prompt: string,
  imageBuffer: Buffer,
  mimeType: string,
): Promise<string> {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const apiToken = process.env.CLOUDFLARE_API_TOKEN;

  if (!accountId || !apiToken) {
    throw new Error(
      "Configuration Cloudflare manquante (CLOUDFLARE_ACCOUNT_ID / CLOUDFLARE_API_TOKEN).",
    );
  }

  const form = new FormData();
  form.append("prompt", prompt);
  form.append("width", "1024");
  form.append("height", "1024");
  form.append("steps", "25");
  // Image de référence : doit être nommée input_image_0 (jusqu'à 4 supportées).
  form.append(
    "input_image_0",
    new Blob([imageBuffer], { type: mimeType }),
    "reference",
  );

  const url = `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/${MODEL}`;
  const response = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiToken}` },
    body: form,
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(
      `Cloudflare AI a renvoyé ${response.status}: ${detail.slice(0, 500)}`,
    );
  }

  const data = (await response.json()) as {
    result?: { image?: string };
    image?: string;
    success?: boolean;
    errors?: unknown;
  };

  // L'API Cloudflare enveloppe généralement la sortie dans `result`.
  const base64 = data.result?.image ?? data.image;
  if (!base64) {
    throw new Error(
      `Pas d'image dans la réponse Cloudflare: ${JSON.stringify(data).slice(0, 500)}`,
    );
  }

  return base64;
}
