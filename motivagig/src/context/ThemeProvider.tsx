import { useState, useEffect } from "react";
import { ThemeContext, type Theme } from "./ThemeContext"; 
 
export default function ThemeProvider({ children }: { children: React.ReactNode }) {
 
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
  
    if (saved === "dark" || saved === "high-contrast") {
      return saved;
    }
   
    return "light"; 
  });
 
  
  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === "light") return "dark";
      if (prev === "dark") return "high-contrast";
      return "light"; 
    });
  };
 
 
  useEffect(() => {
    const doc = document.documentElement;
 
    
    doc.classList.remove("dark", "light", "high-contrast");
 
 
    doc.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);
 
  return (
<ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
</ThemeContext.Provider>
  );
}