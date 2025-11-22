import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import type { MenuProps } from "../../types/menu";
import ThemeButton from "../ThemeButton/ThemeButton";

function UserDropMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="px-3 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
      >
        Conta
      </button>

      {open && (
        <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg border w-48 z-50">
          <ul className="text-gray-800">
            <li>
              <Link
                to="/editar-perfil"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                Editar Perfil
              </Link>
            </li>
            <li>
              <Link
                to="/alterar-senha"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                Alterar Senha
              </Link>
            </li>
            <li>
              <Link
                to="/desativar-conta"
                className="block px-4 py-2 hover:bg-red-100 text-red-600"
                onClick={() => setOpen(false)}
              >
                Desativar Conta
              </Link>
            </li>
            <li>
              <button
                onClick={logout}
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Sair
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Menu({ links = [] }: MenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="px-4 py-3 bg-black text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">Gig.Up</h1>

        <div className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              end
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
          <UserDropMenu />
        </div>

        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="lg:hidden p-2"
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
        <div className="lg:hidden mt-2 px-4 pb-3 flex flex-col gap-2">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              end
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

          <div className="mt-2">
            <ThemeButton />
          </div>

          <div className="mt-1 bg-gray-900 rounded-lg p-2">
            <Link
              to="/editar-perfil"
              onClick={() => setOpen(false)}
              className="block px-3 py-2 hover:bg-gray-800 rounded-md"
            >
              Editar Perfil
            </Link>

            <Link
              to="/alterar-senha"
              onClick={() => setOpen(false)}
              className="block px-3 py-2 hover:bg-gray-800 rounded-md"
            >
              Alterar Senha
            </Link>

            <Link
              to="/desativar-conta"
              onClick={() => setOpen(false)}
              className="block px-3 py-2 text-red-500 hover:bg-gray-800 rounded-md"
            >
              Desativar Conta
            </Link>

            <button
              onClick={() => {
                localStorage.removeItem("user");
                setOpen(false);
              }}
              className="w-full text-left px-3 py-2 hover:bg-gray-800 rounded-md"
            >
              Sair
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
