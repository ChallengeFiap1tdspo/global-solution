import { useState } from "react";
import { NavLink } from "react-router-dom";
import type { MenuProps } from "../../types/menu";

export default function Menu({ links = [] }: MenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="px-4 py-3 bg-black text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">Gig.Up</h1>

        <div className="hidden md:flex md:items-center md:gap-6">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              end
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? "text-red-500"
                    : "text-white/80 hover:text-red-500"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          type="button"
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
        <div className="md:hidden mt-2 px-4 pb-3">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? "text-red-500"
                      : "text-white/80 hover:text-red-500"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
