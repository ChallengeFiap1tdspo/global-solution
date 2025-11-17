import { useContext } from "react";

import { ThemeContext, type ThemeContextType } from "../context/ThemeContext";

 
export function useTheme(): ThemeContextType {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme deve ser usado dentro de ThemeProvider");
  return ctx;
}