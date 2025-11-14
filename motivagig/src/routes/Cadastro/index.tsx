import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { CadastroForm } from "../../types/cadastro";

export default function Cadastro() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<CadastroForm>();
  const senha = watch("senha");
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const navigate = useNavigate();

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
        navigate("/boas-vindas");
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
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-30"></div>
      <div className="absolute top-10 right-10 w-20 h-20 bg-red-600 rounded-full blur-xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-red-500 rounded-full blur-lg opacity-10 animate-bounce"></div>

      <div className="w-full max-w-md bg-zinc-900 rounded-3xl shadow-2xl p-8 border border-red-600 relative z-10 transform hover:scale-[1.01] transition-all duration-300">
        
        <div className="text-center mb-8 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full"></div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 via-red-400 to-red-300 bg-clip-text text-transparent mb-4 tracking-tight">
            Cadastro
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full mx-auto mb-6"></div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">

          <div className="group">
            <label className="font-medium text-gray-200 mb-2 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              Nome
            </label>
            <input
              type="text"
              {...register("nome", { required: "Informe o nome" })}
              className="w-full bg-black border-2 border-red-500/30 rounded-2xl p-4 text-white focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 group-hover:border-red-500/50 placeholder-gray-500"
              placeholder="Seu nome completo"
            />
            {errors.nome && (
              <p className="text-red-400 text-sm mt-2 font-medium">{errors.nome.message}</p>
            )}
          </div>

          <div className="group">
            <label className="font-medium text-gray-200 mb-2 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              E-mail
            </label>
            <input
              type="email"
              {...register("email", { required: "Informe o e-mail" })}
              className="w-full bg-black border-2 border-red-500/30 rounded-2xl p-4 text-white focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 group-hover:border-red-500/50 placeholder-gray-500"
              placeholder="seuemail@exemplo.com"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-2 font-medium">{errors.email.message}</p>
            )}
          </div>

          <div className="group">
            <label className="font-medium text-gray-200 mb-2 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              CPF
            </label>
            <input
              type="text"
              {...register("cpf", { required: "Informe o CPF" })}
              className="w-full bg-black border-2 border-red-500/30 rounded-2xl p-4 text-white focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 group-hover:border-red-500/50 placeholder-gray-500"
              placeholder="000.000.000-00"
            />
            {errors.cpf && (
              <p className="text-red-400 text-sm mt-2 font-medium">{errors.cpf.message}</p>
            )}
          </div>

          <div className="group">
            <label className="font-medium text-gray-200 mb-2 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              Tipo de Veículo
            </label>
            <select
              {...register("tipoVeiculo", { required: "Selecione o veículo" })}
              className="w-full bg-black border-2 border-red-500/30 rounded-2xl p-4 text-white focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 group-hover:border-red-500/50"
            >
              <option value="">Selecione...</option>
              <option value="Carro">Carro</option>
              <option value="Moto">Moto</option>
              <option value="Bicicleta">Bicicleta</option>
              <option value="Nenhum">Nenhum</option>
            </select>
            {errors.tipoVeiculo && (
              <p className="text-red-400 text-sm mt-2 font-medium">{errors.tipoVeiculo.message}</p>
            )}
          </div>

          <div className="group">
            <label className="font-medium text-gray-200 mb-2 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              Senha
            </label>
            <input
              type="password"
              {...register("senha", { required: "Informe a senha" })}
              className="w-full bg-black border-2 border-red-500/30 rounded-2xl p-4 text-white focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 group-hover:border-red-500/50 placeholder-gray-500"
              placeholder="••••••••"
            />
            {errors.senha && (
              <p className="text-red-400 text-sm mt-2 font-medium">{errors.senha.message}</p>
            )}
          </div>

          <div className="group">
            <label className="font-medium text-gray-200 mb-2 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              Confirmar Senha
            </label>
            <input
              type="password"
              {...register("confirmarSenha", {
                required: "Confirme a senha",
                validate: (value) =>
                  value === senha || "As senhas não coincidem",
              })}
              className="w-full bg-black border-2 border-red-500/30 rounded-2xl p-4 text-white focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 group-hover:border-red-500/50 placeholder-gray-500"
              placeholder="Repita sua senha"
            />
            {errors.confirmarSenha && (
              <p className="text-red-400 text-sm mt-2 font-medium">
                {errors.confirmarSenha.message}
              </p>
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
                  Cadastrando...
                </>
              ) : (
                "Cadastrar"
              )}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}