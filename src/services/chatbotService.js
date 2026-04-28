// src/services/chatbotService.js

// Fetch and sanitize the API key from environment variables
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY?.replace(/["']/g, '');

// API configuration using stable v1 and base gemini-1.5-flash
const MODEL_NAME = "gemini-1.5-flash";
const API_URL = `https://generativelanguage.googleapis.com/v1/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;

const SYSTEM_INSTRUCTION = "You are Saathi, the Pathik platform's AI assistant. Your goal is to help users navigate the platform, explain how to report community needs, and guide volunteers on how to find tasks. Be empathetic, concise, and professional. Pathik bridges the gap between communities, volunteers, and NGOs.";

/**
 * Provides a rule-based response when the Gemini API is unavailable.
 * This ensures the chatbot remains functional even in offline or error states.
 * 
 * @param {string} userMessage - The current message from the user
 * @returns {string} A rule-based fallback response
 */
const getOfflineResponse = (userMessage) => {
  const input = userMessage.toLowerCase();
  
  const menu = `I'm currently offline, but I can still help you 👇
Please choose an option (type the number or keyword):

1. Report a community issue 🏠
2. Become a volunteer 🙋
3. Find NGO support 🤝
4. Learn about Pathik ❓`;

  // Option 1: Reporting
  if (input.includes('report') || input.includes('1') || input.includes('issue') || input.includes('crisis')) {
    return "To report a community issue:\n\n1. Navigate to the 'Report Need' page from the top menu.\n2. Provide specific details about the crisis (location, urgency, and description).\n3. Our system will verify the report and notify nearby NGOs and volunteers to coordinate relief.";
  }
  
  // Option 2: Volunteering
  if (input.includes('volunteer') || input.includes('2') || input.includes('join')) {
    return "Becoming a volunteer is simple!\n\n1. Click 'Get Started' or 'Join as Volunteer' on the homepage.\n2. Complete your profile to match with tasks.\n3. Check your dashboard for real-time opportunities to help in your local community.";
  }
  
  // Option 3: NGO Support
  if (input.includes('ngo') || input.includes('3') || input.includes('support')) {
    return "Pathik offers a dedicated command center for verified NGOs:\n\n1. Registered NGOs receive verified community alerts instantly.\n2. They can manage volunteers through a dynamic task pipeline.\n3. The platform provides analytics to help scale social impact effectively.";
  }
  
  // Option 4: About Pathik
  if (input.includes('pathik') || input.includes('4') || input.includes('purpose') || input.includes('what is')) {
    return "Pathik is a unified coordination engine for social impact. We bridge the gap between people in need and those who can help, ensuring that verified NGOs and volunteers can coordinate relief efforts in real-time.";
  }

  // Default Fallback: Show the menu
  return menu;
};

/**
 * Sends a message to the Gemini AI and returns the response.
 * Falls back to a local rule-based system if the API fails.
 * 
 * @param {string} userMessage - The current message from the user
 * @param {Array} history - Previous chat messages in Gemini format
 * @returns {Promise<string>} The response from the AI or the offline fallback
 */
export const sendMessage = async (userMessage, history = []) => {
  // If API key is missing, go straight to offline fallback
  if (!API_KEY) {
    return getOfflineResponse(userMessage);
  }

  try {
    // 1. Initialize contents and filter out the initial model greeting
    let contents = [...history];
    if (contents.length > 0 && contents[0].role === 'model') {
      contents.shift(); 
    }

    // 2. Ensure current message is present
    if (contents.length === 0) {
      contents.push({
        role: "user",
        parts: [{ text: userMessage }]
      });
    }

    // 3. Inject system persona into the first user message
    if (contents[0] && contents[0].role === 'user') {
      const firstMsgText = contents[0].parts[0].text;
      if (!firstMsgText.includes("Pathik platform's AI assistant")) {
        contents[0].parts[0].text = `${SYSTEM_INSTRUCTION}\n\nUser Question: ${firstMsgText}`;
      }
    }

    // 4. Perform the fetch call with a timeout/error catch
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

    // 5. If response is successful, return AI response
    if (response.ok && data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
      return data.candidates[0].content.parts[0].text;
    } else {
      // API returned an error (quota, restricted key, etc.) -> Switch to Offline
      console.warn("Gemini API Error. Switching to Offline Fallback.");
      return getOfflineResponse(userMessage);
    }
  } catch (error) {
    // Network failure or other error -> Switch to Offline
    console.error("Gemini Connection Failed. Using Offline Mode.");
    return getOfflineResponse(userMessage);
  }
};
