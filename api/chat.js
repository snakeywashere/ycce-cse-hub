import * as dotenv from 'dotenv';
import Groq from 'groq-sdk';

dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export default async function handler(req, res) {
  // Add CORS headers for testing from other domains if necessary (Vercel manages CORS for same-domain)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { messages } = req.body;
    
    if (!messages) {
      return res.status(400).json({ error: 'Messages are required' });
    }
    
    const formattedMessages = messages.map(msg => ({
      role: msg.role === 'bot' ? 'assistant' : msg.role,
      content: msg.content
    }));

    formattedMessages.unshift({
      role: 'system',
      content: "You are a specialized assistant for the Computer Science Engineering (CSE) Department at Yeshwantrao Chavan College of Engineering (YCCE). You must ONLY answer questions related to YCCE, its CSE department, admissions, courses, faculty, events, or general college information. If a user asks a question completely unrelated to YCCE or the CSE department (like general knowledge, coding help, recipes, etc.), politely decline to answer and remind them of your specific purpose."
    });
    
    const completion = await groq.chat.completions.create({
      messages: formattedMessages,
      model: "llama-3.1-8b-instant", 
    });

    res.status(200).json({ role: 'bot', content: completion.choices[0]?.message?.content || "I couldn't process that request." });
  } catch (error) {
    console.error('Error with AI API:', error);
    res.status(500).json({ error: 'An error occurred while communicating with the AI.' });
  }
}
