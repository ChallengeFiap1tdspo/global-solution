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
    { href: "/sobre", label: "Sobre" }
  ];

  return (
    <header className="bg-black text-white border-b border-neutral-800">
      <Menu links={links} />
    </header>
  );
}
