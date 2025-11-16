import { useNavigate } from "react-router-dom";

export default function DesativarConta() {
  const navigate = useNavigate();

  const desativar = () => {
    alert("Conta desativada!");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="p-6 max-w-md mx-auto mt-10 mb-20">
      <h1 className="text-2xl font-bold text-red-600 mb-4">
        Desativar Conta
      </h1>

      <p className="mb-4">
        Tem certeza que deseja desativar sua conta? Essa ação é irreversível.
      </p>

      <button
        onClick={desativar}
        className="bg-red-600 text-white py-2 rounded hover:bg-red-700 w-full"
      >
        Desativar Conta
      </button>
    </div>
  );
}
