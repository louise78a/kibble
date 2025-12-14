import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import fs from "fs";
import path from "path";

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

      const fullPrompt = `Edit this image of a kung fu hamster photo. Keep the original hamster image exactly the same but add: ${prompt}. Do NOT change the hamster's face or body. Only add items/accessories/effects on top of the existing image. Keep it funny meme style. Generate an image.`;

      const baseImagePath = path.join(process.cwd(), "client/src/assets/hamie_pfp_base.jpg");
      console.log("Reading image from:", baseImagePath);
      
      const imageBuffer = fs.readFileSync(baseImagePath);
      const base64Image = imageBuffer.toString("base64");

      console.log("Calling Gemini 2.5 Flash Image API directly...");

      const apiKey = process.env.AI_INTEGRATIONS_GEMINI_API_KEY;
      
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": apiKey!,
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: fullPrompt,
                  },
                  {
                    inline_data: {
                      mime_type: "image/jpeg",
                      data: base64Image,
                    },
                  },
                ],
              },
            ],
            generationConfig: {
              responseModalities: ["IMAGE", "TEXT"],
            },
          }),
        }
      );

      const data = await response.json();
      console.log("Gemini response status:", response.status);
      console.log("Full response:", JSON.stringify(data, null, 2).substring(0, 1000));

      if (!response.ok) {
        console.error("API Error:", data);
        return res.status(500).json({ error: data.error?.message || "API request failed" });
      }

      const parts = data.candidates?.[0]?.content?.parts;
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
      console.log("Response was text only:", textPart?.text?.substring(0, 500));
      return res.status(500).json({ error: "Model did not generate an image. Response: " + (textPart?.text?.substring(0, 100) || "No text") });
      
    } catch (error: any) {
      console.error("Image generation error:", error);
      res.status(500).json({ error: error.message || "Failed to generate image" });
    }
  });

  return httpServer;
}
