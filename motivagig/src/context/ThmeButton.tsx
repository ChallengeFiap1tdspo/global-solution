 
import { useTheme } from "../../src/hooks/useTheme";
 
export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
 

  const getNextThemeName = () => {
    if (theme === "light") return "Escuro";
    if (theme === "dark") return "Alto Contraste";
    return "Claro";
  };
 
  return (
<button 
      onClick={toggleTheme}
  
      className="text-white hover:text-red-400 transition whitespace-nowrap"
>
      Mudar para {getNextThemeName()}
</button>
  );
}