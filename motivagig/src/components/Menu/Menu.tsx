import { Link, useLocation } from "react-router-dom";
import type { NavLinkItem } from "../../types/menu";

type MenuProps = {
  links: NavLinkItem[];
};

export default function Menu({ links }: MenuProps) {
  const location = useLocation();

  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <h1 className="text-2xl font-bold tracking-wide">Gig.Up</h1>
      <ul className="flex gap-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              to={link.href}
              className={`${
                location.pathname === link.href
                  ? "border-b-2 border-white text-white"
                  : "text-white/80 hover:text-white"
              } transition-colors font-medium`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
