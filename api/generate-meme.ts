import type { VercelRequest, VercelResponse } from "@vercel/node";
import fs from "fs";
import path from "path";
import { generateMemeImage, buildMemePrompt } from "../server/cloudflare-image";

// La génération FLUX.2 peut dépasser le timeout par défaut (10 s) de Vercel.
export const config = { maxDuration: 60 };

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { prompt } = req.body ?? {};

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    // Image de référence embarquée avec la fonction (voir vercel.json includeFiles).
    const imgPath = path.join(process.cwd(), "client", "public", "meme-ref.jpg");
    const imgBuffer = fs.readFileSync(imgPath);

    const b64 = await generateMemeImage(buildMemePrompt(prompt), imgBuffer, "image/jpeg");

    res.json({ b64_json: b64, mimeType: "image/png" });
  } catch (error: any) {
    console.error("Error generating meme:", error);
    res.status(500).json({ error: error.message || "Failed to generate meme" });
  }
}
