import Menu from "../Menu/Menu";
import type { NavLinkItem } from "../../types/NavLinkItem";

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
    <header className="bg-black text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-xl font-bold text-red-500"></h1>
        <Menu links={links} />
      </div>
    </header>
  );
}
