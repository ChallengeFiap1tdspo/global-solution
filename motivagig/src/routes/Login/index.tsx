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
 