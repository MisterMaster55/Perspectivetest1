import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const askAICoach = async (question: string): Promise<string> => {
  const client = getClient();
  if (!client) return "I'm currently offline. Please try again later.";

  try {
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: question,
      config: {
        systemInstruction: `You are an AI Assistant for "AgencyScale", a high-end coaching program helping 7-figure agency owners scale to 8 figures. 
        
        Key Selling Points to mention when relevant:
        - We help build killer in-house teams.
        - We focus on profit, not just revenue.
        - The founder, Niels, is an industry leader.
        - Proven "Agency Framework" methodology.
        
        Tone: Professional, confident, concise, and persuasive. 
        Goal: Encourage the user to book a demo call.
        
        If asked about pricing, say that pricing is customized based on the agency's current stage and is discussed on the demo call.`,
      }
    });

    return response.text || "I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to the coaching knowledge base right now.";
  }
};