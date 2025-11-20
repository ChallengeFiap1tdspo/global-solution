import { useState } from "react";
import { useNavigate } from "react-router-dom";
 
 
const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
 
export default function DesativarConta() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
 
  const desativar = async () => {
   
    const dadosString = sessionStorage.getItem("trabalhadorLogado");
   
    if (!dadosString) {
      alert("Erro: Sessão expirada ou usuário não identificado.");
      navigate("/login");
      return;
    }
 
    const trabalhador = JSON.parse(dadosString);
   
   
    if (!window.confirm("Tem certeza absoluta? Sua conta será desativada.")) {
        return;
    }
 
    setIsLoading(true);
 
    try {
   
     
      const response = await fetch(`${API_URL}/${trabalhador.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "X-API-Key": API_KEY,
        },
      });
      if (response.status === 204 || response.ok) {
        alert("Conta desativada com sucesso! Sentiremos sua falta.");
       
       
        sessionStorage.removeItem("trabalhadorLogado");
        navigate("/");
       
      } else {const errorData = await response.json().catch(() => ({}));
        const msgErro = errorData.erro || `Erro ${response.status}: Falha ao desativar.`;
        alert(msgErro);
      }
 
    } catch (error) {
     
      console.error("Erro na requisição:", error);
      alert("Erro de conexão. Verifique sua internet e tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="p-6 max-w-md mx-auto mt-10 mb-20 bg-zinc-900 text-white rounded-2xl shadow-xl border border-red-600">
      <h1 className="text-2xl font-bold text-red-500 mb-4 text-center">
        Desativar Conta
      </h1>
      <p className="mb-6 text-gray-300 text-center">
        Tem certeza que deseja desativar sua conta? <br/>
        <span className="text-red-400 font-semibold">Essa ação tornará seu perfil inativo.</span>
      </p>
 
      <button
        onClick={desativar}
        disabled={isLoading}
        className={`w-full py-3 rounded-xl font-bold transition-all shadow-lg
          ${isLoading
            ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
            : 'bg-red-600 text-white hover:bg-red-700 hover:shadow-red-900/50 active:scale-95'
          }`}
          >
          {isLoading ? "Processando..." : "Confirmar Desativação"}
      </button>
 
 