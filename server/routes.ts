import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

const ai = new GoogleGenAI({
  apiKey: process.env.AI_INTEGRATIONS_GEMINI_API_KEY!,
  httpOptions: { baseUrl: process.env.AI_INTEGRATIONS_GEMINI_BASE_URL! },
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

      console.log("Starting image generation with prompt:", prompt);

      const fullPrompt = `Edit this image of a kung fu hamster photo. Keep the original hamster image exactly the same but add: ${prompt}. Do NOT change the hamster's face or body. Only add items/accessories/effects on top of the existing image. Keep it funny meme style.`;

      const baseImagePath = path.join(process.cwd(), "client/src/assets/hamie_pfp_base.jpg");
      console.log("Reading image from:", baseImagePath);
      
      const imageBuffer = fs.readFileSync(baseImagePath);
      const base64Image = imageBuffer.toString("base64");

      console.log("Calling Gemini 2.5 Flash Image API...");

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-05-20",
        contents: [
          {
            role: "user",
            parts: [
              {
                inlineData: {
                  mimeType: "image/jpeg",
                  data: base64Image,
                },
              },
              {
                text: fullPrompt,
              },
            ],
          },
        ],
        config: {
          responseModalities: ["IMAGE", "TEXT"],
        },
      });

      console.log("Gemini response received");

      const parts = response.candidates?.[0]?.content?.parts;
      if (!parts) {
        console.error("No parts in response");
        return res.status(500).json({ error: "Failed to generate image" });
      }

      const imagePart = parts.find((part: any) => part.inlineData);
      
      if (imagePart?.inlineData?.data) {
        console.log("Image generated successfully");
        const imageUrl = `data:${imagePart.inlineData.mimeType || 'image/png'};base64,${imagePart.inlineData.data}`;
        return res.json({ imageUrl });
      }

      const textPart = parts.find((part: any) => part.text);
      console.log("Response was text only:", textPart?.text?.substring(0, 200));
      return res.status(500).json({ error: "Model did not generate an image. Try a different prompt." });
      
    } catch (error: any) {
      console.error("Image generation error:", error);
      res.status(500).json({ error: error.message || "Failed to generate image" });
    }
  });

  return httpServer;
}
