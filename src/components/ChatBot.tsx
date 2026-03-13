import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "bot" | "user"; content: string }[]>([
    { role: "bot", content: "👋 Hi! I'm the CSE Department assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setInput("");
    // Placeholder bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "Thanks for your message! This chatbot is currently a demo. Please contact cse@ycce.edu for assistance." },
      ]);
    }, 800);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-elevated flex items-center justify-center hover:scale-105 transition-transform"
        aria-label="Open chatbot"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-xl bg-card border border-border shadow-elevated flex flex-col overflow-hidden"
            style={{ height: "480px" }}
          >
            {/* Header */}
            <div className="px-5 py-4 bg-navy-dark flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-primary-foreground">CSE Assistant</h4>
                <p className="text-xs text-primary-foreground/50">Ask me anything</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-navy text-primary-foreground rounded-br-sm"
                        : "bg-secondary text-foreground rounded-bl-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2.5 rounded-lg bg-secondary text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-accent/30"
              />
              <button
                onClick={handleSend}
                className="w-10 h-10 rounded-lg bg-accent text-accent-foreground flex items-center justify-center hover:opacity-90 transition-opacity shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
