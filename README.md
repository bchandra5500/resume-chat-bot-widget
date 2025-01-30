# Resume Chatbot Widget

A React-based frontend widget for the AI resume chatbot.

## Deployment Instructions (Render.com)

1. Create a Render account at https://render.com

2. Connect your GitHub repository to Render:

   - Go to Dashboard
   - Click "New +"
   - Select "Static Site"
   - Choose your repository
   - Select the branch to deploy

3. Configure the site:

   - Name: `resume-chatbot-widget` (or your preferred name)
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`
   - Add environment variable:
     - `VITE_API_URL`: Your backend URL (e.g. `https://resume-chatbot-api.onrender.com`)

4. Click "Create Static Site"

Your site will be available at `https://your-site-name.onrender.com`

## Environment Variables

Copy `.env.example` to `.env` and configure:

```
VITE_API_URL=http://localhost:5001  # Local development
# VITE_API_URL=https://your-backend.onrender.com  # Production
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
