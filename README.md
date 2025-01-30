# Resume Chatbot Widget

A React-based frontend widget for the AI resume chatbot.

## Deployment Instructions (Vercel)

1. Create a Vercel account at https://vercel.com

2. Install Vercel CLI:

```bash
npm i -g vercel
```

3. Login to Vercel:

```bash
vercel login
```

4. Configure environment variables in Vercel:

- Go to your project settings
- Add `VITE_API_URL` with your Railway backend URL (e.g. https://your-app.railway.app)

5. Deploy to Vercel:

```bash
vercel
```

Follow the prompts to deploy your application. Once deployed, Vercel will provide you with a URL for your application.

## Environment Variables

Copy `.env.example` to `.env` and configure:

```
VITE_API_URL=http://localhost:5001  # Local development
# VITE_API_URL=https://your-app.railway.app  # Production
```

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

The development server will run on http://localhost:5173

## Building for Production

To create a production build:

```bash
npm run build
```

## Customization

You can customize the widget appearance by modifying:

- `src/styles/ChatbotWidget.css` - Styling
- `src/components/ChatbotWidget.tsx` - Component logic and structure
