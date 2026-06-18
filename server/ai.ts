import { GoogleGenAI } from "@google/genai";

// Sur Replit, l'accès Gemini est fourni via le proxy "AI Integrations"
// (variables AI_INTEGRATIONS_GEMINI_*). Hors Replit (local, déploiement),
// on utilise directement ta clé Google Gemini (GEMINI_API_KEY).
const replitKey = process.env.AI_INTEGRATIONS_GEMINI_API_KEY;
const replitBaseUrl = process.env.AI_INTEGRATIONS_GEMINI_BASE_URL;

if (!replitKey && !process.env.GEMINI_API_KEY) {
  console.warn(
    "[ai] Aucune clé Gemini trouvée. Définis GEMINI_API_KEY dans .env " +
      "(https://aistudio.google.com/apikey).",
  );
}

export const ai = replitKey
  ? new GoogleGenAI({
      apiKey: replitKey,
      httpOptions: { apiVersion: "", baseUrl: replitBaseUrl },
    })
  : new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
