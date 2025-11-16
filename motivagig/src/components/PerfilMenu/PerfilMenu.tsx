import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("trabalhadorLogado");
    navigate("/login");
  };

  return (
    <div className="relative">
 
      <button
        onClick={() => setOpen(!open)}
        className="text-white hover:text-red-400 transition"
      >
        Perfil
      </button>

      {open && (
        <div className="absolute right-0 mt-2 bg-black border border-red-600 rounded-lg shadow-xl w-40">
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
