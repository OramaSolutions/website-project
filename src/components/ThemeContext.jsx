import { createContext, useContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const themes = {
  light: "theme-light",
  dark: "theme-dark",
  bluedark: "theme-bluedark",
};

// Themes that should trigger Tailwind's dark mode
const tailwindDarkThemes = new Set(["theme-dark", "theme-bluedark"]);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "theme-dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    // Remove old theme and dark mode
    Object.values(themes).forEach((cls) => root.classList.remove(cls));
    root.classList.remove("dark");

    // Add new theme class
    const currentThemeClass = themes[theme] || themes.light;
    root.classList.add(currentThemeClass);

    // Conditionally add Tailwind's dark mode
    if (tailwindDarkThemes.has(currentThemeClass)) {
      root.classList.add("dark");
    }

    // Persist the theme
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
