import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import OpenAI from "openai";
import fs from "fs";
import path from "path";

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/generate-pfp", async (req, res) => {
    try {
      const { prompt } = req.body;
      
      if (!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
      }

      // Build the full prompt following the template
      const fullPrompt = `Edit this image of an hamster kung fu photo. Keep the original image exactly the same but add: ${prompt}. Do NOT change the hamster's face or body. Only add items/accessories/effects on top of the existing image. Keep it funny meme style.`;

      // Read the base image
      const baseImagePath = path.join(process.cwd(), "client/src/assets/hamie_pfp_base.jpg");
      const imageBuffer = fs.readFileSync(baseImagePath);
      const imageFile = new File([imageBuffer], "hamie.jpg", { type: "image/jpeg" });

      // Generate edited image using OpenAI
      const response = await openai.images.edit({
        image: imageFile,
        prompt: fullPrompt,
        n: 1,
        size: "1024x1024",
      });

      const imageUrl = response.data[0]?.url;
      
      if (!imageUrl) {
        return res.status(500).json({ error: "Failed to generate image" });
      }

      res.json({ imageUrl });
    } catch (error: any) {
      console.error("Image generation error:", error);
      res.status(500).json({ error: error.message || "Failed to generate image" });
    }
  });

  return httpServer;
}
