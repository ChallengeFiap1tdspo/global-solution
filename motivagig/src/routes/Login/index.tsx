import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation, Link } from "react-router-dom";
import type { LoginForm } from "../../types/login";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectTo = location.state?.from || "/";

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
        const trabalhador = await response.json();

        sessionStorage.setItem(
          "trabalhadorLogado",
          JSON.stringify(trabalhador)
        );

        navigate(redirectTo, { replace: true });
        return;
      }

      if (response.status === 401 || response.status === 404) {
        setApiError("CPF ou senha inválidos.");
        return;
      }

      const erroApi = await response.json();
      setApiError(erroApi?.erro || "Erro inesperado no servidor.");
    } 
    catch (err: unknown) {

      if (err instanceof Error) {
        setApiError(err.message);
      } else {
        setApiError("Falha de conexão com o servidor.");
      }

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-zinc-900 rounded-3xl shadow-2xl p-8 border border-red-600">
        
        <h1 className="text-4xl text-center font-bold text-red-400 mb-8">
          Acesso do Trabalhador
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">

          <div>
            <label className="font-medium text-gray-200 mb-2 block">
              CPF (somente números)
            </label>
            <input
              type="text"
              placeholder="12345678900"
              {...register("cpf", {
                required: "Informe seu CPF",
                pattern: { value: /^\d{11}$/, message: "CPF deve ter 11 números" }
              })}
              disabled={isLoading}
              className="w-full bg-black border border-red-500 rounded-2xl p-4 text-white"
            />
            {errors.cpf && <p className="text-red-400 mt-1">{errors.cpf.message}</p>}
          </div>

          <div>
            <label className="font-medium text-gray-200 mb-2 block">
              Senha
            </label>
            <input
              type="password"
              placeholder="••••••••"
              {...register("senha", { required: "Informe sua senha" })}
              disabled={isLoading}
              className="w-full bg-black border border-red-500 rounded-2xl p-4 text-white"
            />
            {errors.senha && <p className="text-red-400 mt-1">{errors.senha.message}</p>}
          </div>

          {apiError && (
            <div className="bg-red-900/30 border border-red-500 text-red-300 p-4 rounded-2xl text-sm">
              {apiError}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="bg-red-600 text-white py-4 rounded-2xl font-semibold hover:bg-red-500 transition"
          >
            {isLoading ? "Entrando..." : "Entrar"}
          </button>

          <Link
            to="/cadastro"
            className="text-center text-red-400 hover:underline mt-2"
          >
            Novo trabalhador? Cadastre-se aqui
          </Link>
        </form>
      </div>
    </div>
  );
}
