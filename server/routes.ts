import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateMemeImage, buildMemePrompt } from "./cloudflare-image";
import fs from "fs";
import path from "path";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post("/api/generate-meme", async (req: Request, res: Response) => {
    try {
      const { prompt } = req.body;

      if (!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
      }

      const publicDir = process.env.NODE_ENV === "production"
        ? path.join(process.cwd(), "dist", "public")
        : path.join(process.cwd(), "client", "public");
      const imgPath = path.join(publicDir, "meme-ref.jpg");

      const imgBuffer = fs.readFileSync(imgPath);
      const mimeType = "image/jpeg";

      const b64 = await generateMemeImage(buildMemePrompt(prompt), imgBuffer, mimeType);

      res.json({
        b64_json: b64,
        mimeType: "image/png",
      });
    } catch (error: any) {
      console.error("Error generating meme:", error);
      res.status(500).json({ error: error.message || "Failed to generate meme" });
    }
  });

  return httpServer;
}
