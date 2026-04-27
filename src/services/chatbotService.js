import { GoogleGenerativeAI } from "@google/generative-ai";

// Fetch the API key from environment variables
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Initialize the Gemini AI client
const genAI = new GoogleGenerativeAI(API_KEY);

// Define the model to use (Gemini 1.5 Flash is efficient for chat)
const model = genAI.getGenerativeModel({ 
  model: "gemini-1.5-flash",
  systemInstruction: "You are Saathi, the Pathik platform's AI assistant. Your goal is to help users navigate the platform, explain how to report community needs, and guide volunteers on how to find tasks. Be empathetic, concise, and professional. Pathik bridges the gap between communities, volunteers, and NGOs.",
});

/**
 * Sends a message to the Gemini AI and returns the response.
 * Supports chat history for context-aware conversations.
 * 
 * @param {string} userMessage - The current message from the user
 * @param {Array} history - Previous chat messages in Gemini format
 * @returns {Promise<string>} The response from the AI
 */
export const sendMessage = async (userMessage, history = []) => {
  if (!API_KEY) {
    console.error("Gemini API key is missing. Please check your .env.local file.");
    return "I'm sorry, my neural pathways are disconnected. Please contact support.";
  }

  try {
    const chat = model.startChat({
      history: history,
      generationConfig: {
        maxOutputTokens: 500,
      },
    });

    const result = await chat.sendMessage(userMessage);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini AI Error:", error);
    throw new Error("I encountered an issue processing your request. Please try again.");
  }
};
