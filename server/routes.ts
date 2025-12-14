import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { GoogleGenAI, Modality } from "@google/genai";
import fs from "fs";
import path from "path";

const ai = new GoogleGenAI({
  apiKey: process.env.AI_INTEGRATIONS_GEMINI_API_KEY!,
  httpOptions: {
    apiVersion: "",
    baseUrl: process.env.AI_INTEGRATIONS_GEMINI_BASE_URL!,
  },
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

      console.log("Calling Gemini 2.5 Flash Image...");

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-image",
        contents: [{ 
          role: "user", 
          parts: [
            { text: fullPrompt },
            { inlineData: { mimeType: "image/jpeg", data: base64Image } }
          ] 
        }],
        config: {
          responseModalities: [Modality.TEXT, Modality.IMAGE],
        },
      });

      console.log("Gemini response received");

      const candidate = response.candidates?.[0];
      const imagePart = candidate?.content?.parts?.find((part: any) => part.inlineData);
      
      if (!imagePart?.inlineData?.data) {
        console.error("No image data in response");
        return res.status(500).json({ error: "No image data in response" });
      }

      const mimeType = imagePart.inlineData.mimeType || "image/png";
      const imageData = `data:${mimeType};base64,${imagePart.inlineData.data}`;
      
      console.log("Image generated successfully");
      return res.json({ imageUrl: imageData });
      
    } catch (error: any) {
      console.error("Image generation error:", error);
      res.status(500).json({ error: error.message || "Failed to generate image" });
    }
  });

  return httpServer;
}
