// import React, { useEffect, useState } from 'react';
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import LoadingPage from './components/LoadingPage.jsx';
import { ThemeProvider } from './components/ThemeContext.jsx';

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
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')).render(


  <Root />


)
