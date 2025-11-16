import Menu from "../Menu/Menu";
import type { NavLinkItem } from "../../types/menu";
import ProfileMenu from "../../components/PerfilMenu/PerfilMenu";
import ThemeToggle from "../../components/ThemeButton/ThemeButton";

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
    <header className="bg-black text-white border-b border-neutral-800 overflow-visible">
      <div className="flex items-center justify-between px-6 py-2">
        <h1 className="text-xl font-bold">Gig.Up</h1>

        <div className="flex items-center gap-6">
          <Menu links={links} />
          <ThemeToggle /> 
          <ProfileMenu />
        </div>
      </div>
    </header>
  );
}
