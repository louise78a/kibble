import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { GoogleGenAI, Modality } from "@google/genai";
import fs from "fs";
import path from "path";

const ai = new GoogleGenAI({
  apiKey: process.env.AI_INTEGRATIONS_GEMINI_API_KEY,
  httpOptions: {
    apiVersion: "",
    baseUrl: process.env.AI_INTEGRATIONS_GEMINI_BASE_URL,
  },
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post("/api/generate-meme", async (req: Request, res: Response) => {
    try {
      const { prompt, baseImage } = req.body;

      if (!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
      }

      if (!baseImage || (baseImage !== "1" && baseImage !== "2")) {
        return res.status(400).json({ error: "baseImage must be '1' or '2'" });
      }

      const publicDir = process.env.NODE_ENV === "production"
        ? path.join(process.cwd(), "dist", "public")
        : path.join(process.cwd(), "client", "public");
      const imgPath = baseImage === "1"
        ? path.join(publicDir, "meme-base-1.png")
        : path.join(publicDir, "meme-base-2.jpg");

      const imgBuffer = fs.readFileSync(imgPath);
      const imgBase64 = imgBuffer.toString("base64");
      const mimeType = baseImage === "1" ? "image/png" : "image/jpeg";

      const fullPrompt = `You are a meme creator. Based on this image of Chuqi (a rare golden-orange baby dusky langur monkey), create a funny and creative meme image. ${prompt}. Keep Chuqi as the main character. Make it visually engaging and meme-style. Do NOT add any text, captions, or writing on the image.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-image",
        contents: [
          {
            role: "user",
            parts: [
              {
                inlineData: {
                  mimeType,
                  data: imgBase64,
                },
              },
              { text: fullPrompt },
            ],
          },
        ],
        config: {
          responseModalities: [Modality.TEXT, Modality.IMAGE],
        },
      });

      const candidate = response.candidates?.[0];
      const imagePart = candidate?.content?.parts?.find(
        (part: any) => part.inlineData
      );

      if (!imagePart?.inlineData?.data) {
        return res.status(500).json({ error: "Try again." });
      }

      const outMimeType = imagePart.inlineData.mimeType || "image/png";
      res.json({
        b64_json: imagePart.inlineData.data,
        mimeType: outMimeType,
      });
    } catch (error: any) {
      console.error("Error generating meme:", error);
      res.status(500).json({ error: error.message || "Failed to generate meme" });
    }
  });

  return httpServer;
}
