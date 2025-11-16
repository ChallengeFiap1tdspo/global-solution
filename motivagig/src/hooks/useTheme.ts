import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import type { ThemeContextType } from "../types/ThemeTypes";

export function useTheme(): ThemeContextType {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme deve ser usado dentro de ThemeProvider");
  return ctx;
}
