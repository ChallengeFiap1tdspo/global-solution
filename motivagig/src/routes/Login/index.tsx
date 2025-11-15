import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import type { LoginForm } from "../../types/login";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true);
    setApiError(null);

    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-API-Key": API_KEY,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const trabalhadorEncontrado = await response.json();
        sessionStorage.setItem("trabalhadorLogado", JSON.stringify(trabalhadorEncontrado));
        navigate("/boas-vindas");
      } else if (response.status === 401 || response.status === 404) {
        setApiError("CPF ou Senha inválidos.");
      } else {
        const errorData = await response.json();
        setApiError(errorData.erro || `Erro ${response.status}: ${response.statusText}`);
      }
    } catch (error: unknown) {
      console.error("Falha ao conectar com a API:", error);
      setApiError(
        error instanceof Error
          ? error.message
          : "Não foi possível conectar ao servidor. Tente novamente mais tarde."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-30"></div>
      <div className="absolute top-10 right-10 w-20 h-20 bg-red-600 rounded-full blur-xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-red-500 rounded-full blur-lg opacity-10 animate-bounce"></div>

      <div className="w-full max-w-md bg-zinc-900 rounded-3xl shadow-2xl p-8 border border-red-600 relative z-10 transform hover:scale-[1.01] transition-all duration-300">
        
        <div className="text-center mb-8 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full"></div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 via-red-400 to-red-300 bg-clip-text text-transparent mb-4 tracking-tight">
            Acesso do Trabalhador
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full mx-auto mb-6"></div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">

          <div className="group">
            <label className="font-medium text-gray-200 mb-2 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              CPF (somente números)
            </label>
            <input
              type="text"
              placeholder="12345678900"
              {...register("cpf", {
                required: "Informe seu CPF",
                pattern: { value: /^\d{11}$/, message: "CPF deve conter 11 números" }
              })}
              disabled={isLoading}
              className="w-full bg-black border-2 border-red-500/30 rounded-2xl p-4 text-white focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 group-hover:border-red-500/50 placeholder-gray-500 disabled:bg-gray-800 disabled:cursor-not-allowed"
            />
            {errors.cpf && (
              <p className="text-red-400 text-sm mt-2 font-medium">{errors.cpf.message}</p>
            )}
          </div>

          <div className="group">
            <label className="font-medium text-gray-200 mb-2 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              Senha
            </label>
            <input
              type="password"
              placeholder="••••••••"
              {...register("senha", { required: "Informe a senha" })}
              disabled={isLoading}
              className="w-full bg-black border-2 border-red-500/30 rounded-2xl p-4 text-white focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 group-hover:border-red-500/50 placeholder-gray-500 disabled:bg-gray-800 disabled:cursor-not-allowed"
            />
            {errors.senha && (
              <p className="text-red-400 text-sm mt-2 font-medium">{errors.senha.message}</p>
            )}
          </div>

          {apiError && (
            <div className="bg-red-900/30 border-2 border-red-500/30 text-red-300 p-4 rounded-2xl text-sm font-medium">
              {apiError}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 disabled:from-gray-700 disabled:to-gray-800 transition-all duration-300 text-white font-semibold py-4 rounded-2xl shadow-lg hover:shadow-red-500/20 hover:shadow-xl hover:scale-[1.02] disabled:hover:scale-100 active:scale-95 mt-2 overflow-hidden disabled:cursor-not-allowed"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] group-disabled:translate-x-[-100%] transition-transform duration-1000"></div>
            <span className="relative flex items-center justify-center gap-2">
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Entrando...
                </>
              ) : (
                "Entrar"
              )}
            </span>
          </button>

          <Link
            to="/cadastro"
            className="text-center text-red-400 hover:text-red-300 font-medium transition-colors duration-300 mt-4 block hover:underline"
          >
            Novo trabalhador? Cadastre-se aqui
          </Link>

        </form>
      </div>
    </div>
  );
}