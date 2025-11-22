import { useTheme } from "../../src/hooks/useTheme";

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 w-full text-left"
    >
      Trocar para {theme === "dark" ? "claro" : "escuro"}
    </button>
  );
}
