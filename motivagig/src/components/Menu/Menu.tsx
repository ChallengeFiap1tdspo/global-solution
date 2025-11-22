import { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeButton from "../ThemeButton/ThemeButton";
import UserMenu from "../UserMenu/UserMenu";
import type { NavLinkItem } from "../../types/NavLinkItem";

type MenuProps = {
  links: NavLinkItem[];
};

export default function Menu({ links = [] }: MenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <div className="text-red-500 font-bold text-xl">GIG.UP</div>

        <div className="hidden lg:flex lg:items-center lg:gap-6">
          {links.map((link: NavLinkItem) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive ? "text-red-500" : "text-white/80 hover:text-red-500"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <ThemeButton />
          <UserMenu />
        </div>

        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M6 18L18 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path d="M3 6h18" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M3 12h18" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M3 18h18" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black text-white z-50 shadow-lg border-t border-gray-800">
          <div className="flex flex-col gap-2 px-4 py-3">
            {links.map((link: NavLinkItem) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive ? "text-red-500" : "text-white/80 hover:text-red-500"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <ThemeButton />
            <UserMenu />
          </div>
        </div>
      )}
    </nav>
  );
}
