import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function UserMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="relative">
      <button
        className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-700 w-full text-left"
        onClick={() => setOpen(!open)}
      >
        Conta
      </button>

      {open && (
        <div className="mt-2 bg-white rounded-lg shadow-lg border w-48 absolute right-0 z-50">
          <ul className="text-gray-800">
            <li>
              <Link
                to="/editar-perfil"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Editar Perfil
              </Link>
            </li>
            <li>
              <Link
                to="/alterar-senha"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Alterar Senha
              </Link>
            </li>
            <li>
              <Link
                to="/desativar-conta"
                className="block px-4 py-2 hover:bg-red-100 text-red-600"
              >
                Desativar Conta
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
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
