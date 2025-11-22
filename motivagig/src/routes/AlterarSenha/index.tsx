import { useForm } from "react-hook-form";

type AlterarSenhaForm = {
  senhaAtual: string;
  novaSenha: string;
};

export default function AlterarSenha() {
  const { register, handleSubmit } = useForm<AlterarSenhaForm>();

  const onSubmit = (data: AlterarSenhaForm) => {
    console.log("Senha alterada:", data);
    alert("Senha alterada com sucesso!");
  };

  return (
    <div className="p-6 max-w-md mx-auto min-h-[calc(100vh-250px)] flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Alterar Senha</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <input
          {...register("senhaAtual")}
          className="border p-2 rounded"
          type="password"
          placeholder="Senha atual"
        />

        <input
          {...register("novaSenha")}
          className="border p-2 rounded"
          type="password"
          placeholder="Nova senha"
        />

        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Alterar senha
        </button>
      </form>
    </div>
  );
}
