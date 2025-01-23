import React, { useState } from "react";
import { X, Send } from "lucide-react";

function AiPanel({ isOpen, onClose }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);

    // Placeholder for Gemini API call logic.
    const aiResponse = {
      role: "ai",
      content: "This is a placeholder response.",
    };
    setMessages((prev) => [...prev, aiResponse]);

    setInput("");
  };

  return (
    <div
      className={`fixed inset-y-0 right-0 w-full max-w-sm bg-base-200 shadow-xl transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-base-300">
        <h2 className="text-lg font-semibold">Connectify Assistant</h2>
        <button
          onClick={onClose}
          className="btn btn-ghost btn-circle size-8 flex items-center justify-center"
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages Section */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] px-4 py-2 rounded-lg text-sm ${
                message.role === "user"
                  ? "bg-primary text-white"
                  : "bg-base-300 text-base-content"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="p-4 border-t border-base-300">
        <div className="flex items-center gap-2">
          <input
            type="text"
            className="input input-bordered flex-1 rounded-lg"
            placeholder="Ask me anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleSendMessage}
            className="btn btn-primary btn-circle size-10 flex items-center justify-center"
            disabled={!input.trim()}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AiPanel;
