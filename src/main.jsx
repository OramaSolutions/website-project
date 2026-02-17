// import React, { useEffect, useState } from 'react';
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext.jsx';
import { Toaster } from "react-hot-toast";

function Root() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const simulateStartup = async () => {
  //     // Simulate backend/API initialization, localStorage check, etc.
  //     await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulated delay
  //     setLoading(false);
  //   };

  //   simulateStartup();
  // }, []);

  // if (loading) return <LoadingPage />;

  return (
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            borderRadius: "12px",
            border: "1px solid #d1fae5",
            background: "#ffffff",
            color: "#1f2937",
            boxShadow: "0 10px 25px rgba(2, 6, 23, 0.18)",
          },
          success: {
            iconTheme: {
              primary: "#059669",
              secondary: "#ffffff",
            },
          },
        }}
      />
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')).render(


  <Root />


)
