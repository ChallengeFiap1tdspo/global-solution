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