import { createContext } from "react";
 

export type Theme = "light" | "dark" | "high-contrast";
 

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};
 

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);