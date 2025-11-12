import { useForm } from "react-hook-form";
import type { CadastroForm } from "../../types/cadastro";

export default function Cadastro() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<CadastroForm>();
  const senha = watch("senha");

  const onSubmit = (data: CadastroForm) => {
    console.log("Cadastro:", data);
    alert("Cadastro realizado com sucesso!");
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

        <div className="mb-4">
          <label className="block text-pink-600 font-semibold mb-2">
            E-mail
          </label>
          <input
            type="email"
            {...register("email", { required: "Informe o e-mail" })}
            className="w-full border border-purple-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="seuemail@exemplo.com"
          />
          {errors.email && (
            <p className="text-pink-600 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-pink-600 font-semibold mb-2">
            Senha
          </label>
          <input
            type="password"
            {...register("senha", { required: "Informe a senha" })}
            className="w-full border border-purple-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="••••••••"
          />
          {errors.senha && (
            <p className="text-pink-600 text-sm mt-1">{errors.senha.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-pink-600 font-semibold mb-2">
            Confirmar Senha
          </label>
          <input
            type="password"
            {...register("confirmarSenha", {
              required: "Confirme a senha",
              validate: (value) =>
                value === senha || "As senhas não coincidem",
            })}
            className="w-full border border-purple-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Repita sua senha"
          />
          {errors.confirmarSenha && (
            <p className="text-pink-600 text-sm mt-1">
              {errors.confirmarSenha.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-pink-500 transition-colors font-semibold"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
