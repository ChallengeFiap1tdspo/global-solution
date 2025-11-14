import Menu from "../Menu/Menu";
import type { NavLinkItem } from "../../types/menu";

export default function Cabecalho() {
  const links: NavLinkItem[] = [
    { href: "/", label: "Home" },
    { href: "/curso-semana", label: "Curso da Semana" },
    { href: "/feedback", label: "Feedback" },
    { href: "/faq", label: "FAQ" },
    { href: "/contato", label: "Contato" },
    { href: "/equipe", label: "Equipe" },
    { href: "/sobre", label: "Sobre" },
  ];

  return (
    <header
      className="bg-gradient-to-r 
        from-black 
        via-neutral-900 
        to-red-700  
        text-white 
        shadow-[0_4px_20px_rgba(255,0,0,0.4)]
        border-b border-red-600
      "
    >
      <Menu links={links} />
    </header>
  );
}
