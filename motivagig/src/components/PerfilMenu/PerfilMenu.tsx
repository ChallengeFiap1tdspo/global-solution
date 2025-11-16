import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("trabalhadorLogado");
    navigate("/login");
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="text-white hover:text-red-400 transition"
      >
        Perfil
      </button>

      {open && (
        <div className="absolute right-0 mt-2 bg-black border border-red-600 rounded-lg shadow-xl w-40 z-50">
          <ul className="flex flex-col text-sm text-white">
            <li>
              <Link
                to="/editar-perfil"
                className="block px-4 py-2 hover:bg-red-600/40"
                onClick={() => setOpen(false)}
              >
                Editar Perfil
              </Link>
            </li>
            <li>
              <Link
                to="/desativar-conta"
                className="block px-4 py-2 hover:bg-red-600/40"
                onClick={() => setOpen(false)}
              >
                Desativar Conta
              </Link>
            </li>
            <li>
              <button
                onClick={logout}
                className="text-left w-full block px-4 py-2 hover:bg-red-600/40"
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
