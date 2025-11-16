import { useTheme } from "../../hooks/useTheme";

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Trocar para {theme === "dark" ? "claro" : "escuro"}
    </button>
  );
}
