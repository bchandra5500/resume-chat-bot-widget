import React, { useState, useRef, useEffect } from "react";
import "../styles/ChatbotWidget.css";
import config from "../config";

interface Message {
  text: string;
  isUser: boolean;
}

const AIIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    <path
      d="M12 2L12 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 18L12 22"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M22 12L18 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M6 12L2 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M19.0711 4.92893L16.2426 7.75736"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M7.75736 16.2426L4.92893 19.0711"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M19.0711 19.0711L16.2426 16.2426"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M7.75736 7.75736L4.92893 4.92893"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const SendIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 2L11 13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 2L15 22L11 13L2 9L22 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TypingIndicator = () => (
  <div className="typing-indicator">
    <span></span>
    <span></span>
    <span></span>
  </div>
);

const ChatbotWidget: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "👋 Hi! I'm Jarvis, Bharat's AI assistant. How can I help you learn about his experience and qualifications?",
      isUser: false,
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isApiOnline, setIsApiOnline] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const checkApiStatus = async () => {
    try {
      const response = await fetch(`${config.apiUrl}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: "ping" }),
      });
      setIsApiOnline(response.ok);
    } catch {
      setIsApiOnline(false);
    }
  };

  useEffect(() => {
    checkApiStatus();
    const interval = setInterval(checkApiStatus, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
    adjustTextareaHeight();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || !isApiOnline) return;

    // Add user message
    const userMessage: Message = {
      text: inputText,
      isUser: true,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
    setIsTyping(true);

    try {
      // Make API call to resume chatbot using relative path
      const response = await fetch(`${config.apiUrl}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputText }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setIsApiOnline(true);

      // Simulate AI thinking time for better UX
      await new Promise((resolve) => setTimeout(resolve, 500));
      setIsTyping(false);

      // Add bot response
      const botMessage: Message = {
        text: data.response,
        isUser: false,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      setIsTyping(false);
      setIsApiOnline(false);
      // Add error message
      const errorMessage: Message = {
        text: "Sorry, I encountered an error. Please try again.",
        isUser: false,
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <div className="chatbot-widget">
      <div className="chatbot-header">
        <div className="header-content">
          <div className="ai-icon">
            <AIIcon />
          </div>
          <div className="header-text">
            <div className="header-title">
              <h3>Jarvis • Bharat's AI</h3>
              <div
                className={`status-indicator ${
                  isApiOnline ? "online" : "offline"
                }`}
              ></div>
            </div>
            <span className="status">
              {isApiOnline
                ? "Online • Powered by Bharat.AI"
                : "Offline • Service unavailable"}
            </span>
          </div>
        </div>
      </div>
      <div className="messages-container">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.isUser ? "user-message" : "bot-message"
            } ${!message.isUser ? "with-avatar" : ""}`}
          >
            {!message.isUser && (
              <div className="bot-avatar">
                <AIIcon />
              </div>
            )}
            <div className="message-content">{message.text}</div>
          </div>
        ))}
        {isTyping && (
          <div className="message bot-message with-avatar">
            <div className="bot-avatar">
              <AIIcon />
            </div>
            <TypingIndicator />
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="input-form">
        <textarea
          ref={textareaRef}
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={
            isApiOnline ? "Ask about Bharat..." : "Service unavailable"
          }
          className="message-input"
          rows={1}
          disabled={!isApiOnline}
        />
        <button
          type="submit"
          className={`send-button ${!isApiOnline ? "offline" : ""}`}
          disabled={!isApiOnline}
        >
          <SendIcon />
        </button>
      </form>
    </div>
  );
};

export default ChatbotWidget;
