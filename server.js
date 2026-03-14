import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Groq from 'groq-sdk';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Groq conditionally to avoid deployment crashes
let groq = null;
try {
  if (process.env.GROQ_API_KEY) {
    groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
  }
} catch (error) {
  console.warn("GROQ_API_KEY is not set or invalid. Chatbot features will not work until configured.");
}
// API Route for Chatbot
app.post('/api/chat', async (req, res) => {
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
    
    if (!groq) {
      return res.status(503).json({ error: 'AI service is not configured (missing GROQ_API_KEY environment variable).' });
    }
    
    const completion = await groq.chat.completions.create({
      messages: formattedMessages,
      model: "llama-3.1-8b-instant", 
    });

    res.json({ role: 'bot', content: completion.choices[0]?.message?.content || "I couldn't process that request." });
  } catch (error) {
    console.error('Error with AI API:', error);
    res.status(500).json({ error: 'An error occurred while communicating with the AI.' });
  }
});

// Serve frontend build
app.use(express.static(path.join(__dirname, 'dist')));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
