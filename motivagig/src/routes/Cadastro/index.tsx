import { useState } from 'react';
import { useForm } from "react-hook-form";
 
import type { CadastroForm } from "../../types/cadastro";
 
export default function Cadastro() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<CadastroForm>();
  const senha = watch("senha");
 
 
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
 
 
  const onSubmit = async (data: CadastroForm) => {
   
   
    setIsLoading(true);
    setApiError(null);
 
   
    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;
 
 
   
    const novoTrabalhador = {
      nome: data.nome,
      email: data.email,
      senha: data.senha,
      cpf: data.cpf,              
      contato: data.contato,        
      tipoVeiculo: data.tipoVeiculo,
    };
    try {
     
     
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': API_KEY                
        },
        body: JSON.stringify(novoTrabalhador)
      });
 
   
      if (response.status === 201) {
        alert("Cadastro realizado com sucesso!");
         
     
      } else {
       
        const erro = await response.json();
        const mensagemErro = erro.erro || `Erro ${response.status}: Falha ao cadastrar.`;
        setApiError(mensagemErro);
        alert(mensagemErro);
      }
      } catch (error) {
     
      console.error('Falha na requisição:', error);
      const errorMsg = "Não foi possível conectar ao servidor. Tente novamente.";
      setApiError(errorMsg);
      alert(errorMsg);
   
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
          Cadastro
        </h1>
 
        <div className="mb-4">
          <label className="block text-pink-600 font-semibold mb-2">
            Nome
          </label>
          <input
            type="text"
            {...register("nome", { required: "Informe o nome" })}
            className="w-full border border-purple-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Seu nome completo"
          />
          {errors.nome && (
            <p className="text-pink-600 text-sm mt-1">{errors.nome.message}</p>
          )}
        </div>