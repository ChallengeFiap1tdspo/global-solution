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