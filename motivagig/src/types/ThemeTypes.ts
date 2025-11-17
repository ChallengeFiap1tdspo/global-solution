
 

export type Theme = "light" | "dark" | "high-contrast";
 

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};