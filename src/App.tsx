import { useEffect } from "react";
import ChatbotWidget from "./components/ChatbotWidget";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    const message =
      import.meta.env.MODE === "development"
        ? "⚡ Start backend server: pipenv run dev"
        : "⏳ First response may take ~1 min";

    toast.success(message, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      style: {
        zIndex: 9999,
        fontFamily: "system-ui, -apple-system, sans-serif",
        fontSize: "13px",
        fontWeight: 500,
        borderRadius: "8px",
        padding: "10px 14px",
        maxWidth: "280px",
      },
    });
  }, []);

  return (
    <div className="app">
      <ChatbotWidget />
      <ToastContainer style={{ zIndex: 9999 }} />
    </div>
  );
}

export default App;
