# AI Resume Chatbot (Frontend Widget)

Live Demo: [https://bharat-resume-chat-bot-widget.onrender.com](https://bharat-resume-chat-bot-widget.onrender.com)

A modern React-based chat interface that connects to an AI-powered backend to provide interactive conversations about my professional experience.

## Architecture

- **Framework**: React + TypeScript
- **Build Tool**: Vite
- **UI Components**: Custom-built for optimal UX
- **State Management**: React Hooks
- **Deployment**: Render.com static site
- **API Integration**: REST endpoints with fetch API

## Project Structure

```
resume_chatbot_widget/
├── src/
│   ├── components/     # React components
│   ├── styles/        # CSS modules
│   ├── config.ts      # Configuration
│   └── App.tsx        # Main application
├── public/            # Static assets
└── vite.config.ts     # Vite configuration
```

## Local Development

1. **Environment Setup**

   ```bash
   # Install dependencies
   npm install

   # Copy environment template
   cp .env.example .env
   ```

2. **Configure Environment**

   ```
   VITE_API_URL=http://localhost:5001
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Server runs on http://localhost:5173

## Technology Stack

- **React 18**: UI framework
- **TypeScript**: Type safety
- **Vite**: Build tool
- **CSS Modules**: Styling
- **React-Toastify**: Notifications
- **ESLint**: Code quality

## Features

- **Real-time Chat**: Smooth, instant interactions
- **Responsive Design**: Mobile-first approach
- **Smart Notifications**: User-friendly alerts
- **Error Handling**: Graceful fallbacks
- **Loading States**: Optimistic UI updates
- **Accessibility**: ARIA-compliant markup

## Component Design

The widget is built with modular components:

- **ChatbotWidget**: Main container
- **MessageList**: Chat history display
- **InputForm**: User message input
- **AIAvatar**: Bot identification
- **StatusIndicator**: Connection status

This frontend connects to a Flask/LangChain backend for AI-powered conversations.
