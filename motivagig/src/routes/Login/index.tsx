import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import type { LoginForm } from "../../types/login";
 
 
const API_URL = import.meta.env.VITE_API_URL || "https://challenge-4-java.onrender.com/api";
const API_KEY = import.meta.env.VITE_API_KEY || "chave_secreta_muito_segura_123456";
 
export default function Login() {
 
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
 
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
 
 
  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true);
    setApiError(null);
 
   
    try {
      const response = await fetch(`${API_URL}/trabalhadores/login`, {
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
        navigate("/ajuda");
      }
      else if (response.status === 401 || response.status === 404) {
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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center text-purple-600 mb-6">
          Acesso do Trabalhador
        </h1>
        <div className="mb-4">
          <label className="block text-pink-600 font-semibold mb-2">
            CPF (somente números)
          </label>
          <input
            type="text"
            placeholder="12345678900"
            {...register("cpf", {
              required: "Informe seu CPF",
         
              pattern: { value: /^\d{11}$/, message: "CPF deve conter 11 números" }
            })}
            className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.cpf
                ? 'border-pink-600 ring-pink-400'
                : 'border-purple-300 focus:ring-purple-400'
            }`}
            disabled={isLoading}
          />
          {errors.cpf && (
            <p className="text-pink-600 text-sm mt-1">{errors.cpf.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-pink-600 font-semibold mb-2">
            Senha
          </label>
          <input
            type="password"
            placeholder="••••••••"
            {...register("senha", { required: "Informe a senha" })}
            className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.senha
                ? 'border-pink-600 ring-pink-400'
                : 'border-purple-300 focus:ring-purple-400'
            }`}
            disabled={isLoading}
          />
          {errors.senha && (
            <p className="text-pink-600 text-sm mt-1">{errors.senha.message}</p>
          )}
        </div>
        {apiError && (
          <div className="bg-pink-100 border border-pink-400 text-pink-700 p-3 rounded-md mb-4 text-sm">
            {apiError}
          </div>
        )}
 
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full text-white py-2 rounded-md transition-colors font-semibold ${
            isLoading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-purple-600 hover:bg-pink-500'
          }`}
        ></button>