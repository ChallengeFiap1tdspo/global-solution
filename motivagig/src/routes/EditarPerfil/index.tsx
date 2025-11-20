import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
 
 
type Trabalhador = {
  id: number;
  nome: string;
  email: string;
  cpf?: string;
  telefone?: string;
  tipoVeiculo?: string;
  pontos?: number;
  nivel?: number;
};
 
export default function EditarPerfil() {
  const { register, handleSubmit, reset } = useForm<Trabalhador>();
  const [isLoading, setIsLoading] = useState(true);
 
 
  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    const carregarDados = async () => {
      try {
        const dadosSessao = sessionStorage.getItem("trabalhadorLogado");
        if (!dadosSessao) {
          alert("Sessão expirada. Faça login novamente.");
          return;
        }
 
        const usuarioLogado = JSON.parse(dadosSessao);
        const id = usuarioLogado.id;
 
        const response = await fetch(`${API_URL}/${id}`, {
          method: "GET",
          headers: {
            "Accept": "application/json",
            "X-API-Key": API_KEY,
          },
        });
        if (response.ok) {
          const dados = await response.json();
         
          reset(dados);
        } else {
          console.error("Erro ao buscar perfil:", response.status);
          alert("Não foi possível carregar seus dados.");
        }
      } catch (error) {
        console.error("Erro de conexão (GET):", error);
      } finally {
        setIsLoading(false);
      }
    };
 
    carregarDados();
  }, [reset, API_URL, API_KEY]);
  const onSubmit = async (data: Trabalhador) => {
    setIsLoading(true);
    try {
      const dadosSessao = sessionStorage.getItem("trabalhadorLogado");
      if (!dadosSessao) {
        alert("Erro: Usuário não autenticado.");
        return;
      }
     
      const usuarioLogado = JSON.parse(dadosSessao);
      const id = usuarioLogado.id;
 
     
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-API-Key": API_KEY,
        },
        body: JSON.stringify(data),
      });
 
      if (response.ok) {
        const dadosAtualizados = await response.json();
       
       
        reset(dadosAtualizados);
        sessionStorage.setItem("trabalhadorLogado", JSON.stringify(dadosAtualizados));
       
        alert("✅ Perfil atualizado com sucesso!");
      } else {
       
        const erroApi = await response.json().catch(() => ({}));
        alert(`Falha ao atualizar: ${erroApi.erro || "Erro desconhecido no servidor."}`);
      }
 
    } catch (error) {
      console.error("Erro de conexão (PUT):", error);
      alert("Erro de conexão. Verifique sua internet e tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };
 
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white text-xl animate-pulse">Carregando...</div>
      </div>
    );
  }
       