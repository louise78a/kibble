import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { GoogleGenAI, Modality } from "@google/genai";
import * as fs from "fs";
import * as path from "path";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Initialize Gemini AI client using Replit AI Integrations
  const ai = new GoogleGenAI({
    apiKey: process.env.AI_INTEGRATIONS_GEMINI_API_KEY!,
    httpOptions: {
      apiVersion: "",
      baseUrl: process.env.AI_INTEGRATIONS_GEMINI_BASE_URL!,
    },
  });

  // Load the base awkward smile image
  // In production, the image is in dist/attached_assets, in dev it's in attached_assets
  const isProduction = process.env.NODE_ENV === "production";
  const baseImagePath = isProduction 
    ? path.join(process.cwd(), "dist", "attached_assets", "image_1765181371398.png")
    : path.join(process.cwd(), "attached_assets", "image_1765181371398.png");
  const baseImageBuffer = fs.readFileSync(baseImagePath);
  const baseImageBase64 = baseImageBuffer.toString("base64");
  
  // Image generation endpoint
  app.post("/api/generate-pfp", async (req, res) => {
    try {
      const { prompt } = req.body;
      
      if (!prompt || typeof prompt !== 'string') {
        return res.status(400).json({ error: "Prompt is required" });
      }

      // Create the prompt to edit the image
      const fullPrompt = `Edit this image of an awkward kid school photo. Keep the original image exactly the same but add: ${prompt}. Do NOT change the boy's face or body. Only add items/accessories/effects on top of the existing image. Keep it funny meme style.`;

      // Use Gemini's image generation model with the base image
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-image",
        contents: [{ 
          role: "user", 
          parts: [
            { text: fullPrompt },
            { inlineData: { mimeType: "image/png", data: baseImageBase64 } }
          ] 
        }],
        config: {
          responseModalities: [Modality.TEXT, Modality.IMAGE],
        },
      });

      const candidate = response.candidates?.[0];
      const imagePart = candidate?.content?.parts?.find((part: any) => part.inlineData);
      
      if (!imagePart?.inlineData?.data) {
        return res.status(500).json({ error: "No image data in response" });
      }

      const mimeType = imagePart.inlineData.mimeType || "image/png";
      const imageData = `data:${mimeType};base64,${imagePart.inlineData.data}`;
      
      return res.json({ imageUrl: imageData });
      
    } catch (error: any) {
      console.error("Image generation error:", error);
      return res.status(500).json({ 
        error: "Failed to generate image", 
        details: error.message 
      });
    }
  });

  return httpServer;
}
