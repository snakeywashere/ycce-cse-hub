# 🤖 YCCE CSE Hub — AI Chatbot

An AI-powered chatbot web application built for the **Computer Science Engineering (CSE) Department** at **Yeshwantrao Chavan College of Engineering (YCCE)**. The assistant answers questions about YCCE, its CSE department, admissions, courses, faculty, events, and general college information.

---

## 📁 Project Structure

```
new ai chatbot/
├── backend/          # Node.js + Express API server
│   ├── server.js     # Main server file
│   ├── package.json
│   └── .env          # Environment variables (not committed)
└── ycce-cse-hub/     # React + Vite frontend
    ├── src/          # Source files
    ├── public/       # Static assets
    └── index.html
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- A [Groq API Key](https://console.groq.com/) for AI functionality

---

### 1. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder:

```env
GROQ_API_KEY=your_groq_api_key_here
PORT=5000
```

Start the backend server:

```bash
npm start
```

The server will run at `http://localhost:5000`.

---

### 2. Frontend Setup

```bash
cd ycce-cse-hub
npm install
npm run dev
```

The frontend will run at `http://localhost:8080` (or whichever port Vite assigns).

---

## 🛠️ Tech Stack

### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express | REST API server |
| Groq SDK (`llama-3.1-8b-instant`) | AI chat completions |
| dotenv | Environment variable management |
| cors | Cross-origin request support |

### Frontend
| Technology | Purpose |
|---|---|
| React 18 + TypeScript | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS | Styling |
| Radix UI + shadcn/ui | Component library |
| React Router DOM | Client-side routing |
| Framer Motion | Animations |
| TanStack Query | Data fetching & caching |

---

## 🔌 API Endpoints

### `POST /api/chat`

Send a chat message to the AI assistant.

**Request Body:**
```json
{
  "messages": [
    { "role": "user", "content": "What courses does YCCE CSE offer?" }
  ]
}
```

**Response:**
```json
{
  "role": "bot",
  "content": "YCCE CSE offers..."
}
```

---

## ⚙️ Environment Variables

| Variable | Description | Required |
|---|---|---|
| `GROQ_API_KEY` | Your Groq API key for AI features | ✅ Yes |
| `PORT` | Port for the backend server (default: `5000`) | ❌ No |

---

## 📜 Scripts

### Backend (`/backend`)

| Command | Description |
|---|---|
| `npm start` | Start the production server |

### Frontend (`/ycce-cse-hub`)

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run test` | Run unit tests |
| `npm run lint` | Run ESLint |

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and commit: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **ISC License**.
