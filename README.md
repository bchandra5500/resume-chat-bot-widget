# Resume Chatbot Widget

A modern, responsive React widget that provides a sleek chat interface for interacting with an AI-powered resume assistant. Built with React, TypeScript, and Vite.

## Features

- **Modern UI**: Sleek, responsive design with smooth animations
- **Real-time Status**: Visual indicators for online/offline status
- **Auto-expanding Input**: Dynamic textarea that grows with content
- **Error Handling**: Graceful error states and offline mode
- **Typing Indicators**: Visual feedback for AI responses
- **Responsive Layout**: Adapts to different screen sizes

## Prerequisites

- Node.js 16+
- npm or yarn
- Resume Chatbot Backend running locally

## Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd resume_chatbot_widget
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Configure the development environment:
   - The widget expects the backend server to be running on `http://localhost:5001`
   - The proxy configuration is already set up in `vite.config.ts`

## Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

The development server will start on `http://localhost:5173` with hot module replacement enabled.

## Building for Production

Build the widget:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Project Structure

```
resume_chatbot_widget/
├── .gitignore              # Git ignore rules
├── index.html              # HTML entry point
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── public/                 # Static assets
└── src/
    ├── components/         # React components
    │   └── ChatbotWidget.tsx  # Main widget component
    ├── styles/             # CSS styles
    │   └── ChatbotWidget.css  # Widget styles
    ├── App.tsx            # Root component
    └── main.tsx           # Application entry point
```

## Features in Detail

### Real-time Status Indicator

- Green dot indicates active backend connection
- Red dot shows when backend is unavailable
- Automatic status checks every 30 seconds

### Message Input

- Auto-expanding textarea
- Enter to send, Shift+Enter for new line
- Character limit handling
- Disabled state when offline

### Responsive Design

- Adapts to container width
- Mobile-friendly interface
- Smooth animations and transitions
- Custom scrollbar styling

## Styling

The widget uses custom CSS with:

- CSS Grid and Flexbox for layout
- CSS Variables for theming
- CSS Animations for smooth transitions
- Modern gradient backgrounds
- Responsive design principles

## Integration

To integrate the widget into another project:

1. Build the widget
2. Copy the built files from `dist`
3. Import and use the ChatbotWidget component:

```tsx
import { ChatbotWidget } from "resume-chatbot-widget";

function App() {
  return (
    <div className="container">
      <ChatbotWidget />
    </div>
  );
}
```

## Development Notes

- Uses Vite for fast development and optimized builds
- TypeScript for type safety
- Modern React practices with hooks
- CSS modules for style encapsulation

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

[Your chosen license]
