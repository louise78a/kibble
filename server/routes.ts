import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import OpenAI from "openai";
import fs from "fs";
import path from "path";

const gemini = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_GEMINI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_GEMINI_BASE_URL,
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

      console.log("Calling Gemini API via OpenAI SDK...");

      const response = await gemini.chat.completions.create({
        model: "gemini-2.5-flash-image",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "image_url",
                image_url: {
                  url: `data:image/jpeg;base64,${base64Image}`,
                },
              },
              {
                type: "text",
                text: fullPrompt,
              },
            ],
          },
        ],
      });

      console.log("Gemini response received");

      const content = response.choices[0]?.message?.content;
      
      if (!content) {
        console.error("No content in response:", response);
        return res.status(500).json({ error: "Failed to generate image" });
      }

      const imageMatch = content.match(/data:image\/[^;]+;base64,[A-Za-z0-9+/=]+/);
      if (imageMatch) {
        console.log("Image generated successfully");
        res.json({ imageUrl: imageMatch[0] });
      } else {
        console.log("Response was text, not image:", content.substring(0, 200));
        return res.status(500).json({ error: "Model did not generate an image" });
      }
    } catch (error: any) {
      console.error("Image generation error:", error);
      res.status(500).json({ error: error.message || "Failed to generate image" });
    }
  });

  return httpServer;
}
