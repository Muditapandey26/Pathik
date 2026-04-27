// Fetch the API key from environment variables
// Added .replace to ensure any accidental quotes in the .env file are removed
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY?.replace(/["']/g, '');

// API configuration
// Using the stable 'v1' endpoint and base 'gemini-1.5-flash' for maximum compatibility
const MODEL_NAME = "gemini-1.5-flash";
const API_URL = `https://generativelanguage.googleapis.com/v1/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;

const SYSTEM_INSTRUCTION = "You are Saathi, the Pathik platform's AI assistant. Your goal is to help users navigate the platform, explain how to report community needs, and guide volunteers on how to find tasks. Be empathetic, concise, and professional. Pathik bridges the gap between communities, volunteers, and NGOs.";

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
    // Gemini history MUST start with a 'user' role.
    let contents = [...history];
    
    // Safety check: If the history starts with a model response (greeting), Gemini will error
    if (contents.length > 0 && contents[0].role === 'model') {
      contents.shift(); 
    }

    // If contents is empty after filtering or wasn't provided, ensure it has the current message
    if (contents.length === 0) {
      contents.push({
        role: "user",
        parts: [{ text: userMessage }]
      });
    }

    // FIX: To avoid "Unknown name system_instruction" errors on the v1 stable API,
    // we prepend the system persona to the first user message in the conversation.
    if (contents[0] && contents[0].role === 'user') {
      const firstMsgText = contents[0].parts[0].text;
      // Only prepend if not already present to avoid duplication in long histories
      if (!firstMsgText.includes("Saathi, the Pathik platform's AI assistant")) {
        contents[0].parts[0].text = `CONTEXT: ${SYSTEM_INSTRUCTION}\n\nUSER MESSAGE: ${firstMsgText}`;
      }
    }

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: contents,
        generationConfig: {
          maxOutputTokens: 800,
          temperature: 0.7,
        }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Gemini API Error Detail:", data);
      throw new Error(data.error?.message || `API Error ${response.status}`);
    }
    
    // Extract response text
    if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
      return data.candidates[0].content.parts[0].text;
    } else {
      console.error("Unexpected Gemini API response structure:", data);
      throw new Error("Invalid response structure from Gemini AI");
    }
  } catch (error) {
    console.error("Gemini AI Fetch Error:", error);
    throw new Error(error.message || "I encountered an issue processing your request. Please try again.");
  }
};
