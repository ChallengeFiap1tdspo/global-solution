import { useForm } from "react-hook-form";

type EditarPerfilForm = {
  nome: string;
  email: string;
};

export default function EditarPerfil() {
  const { register, handleSubmit } = useForm<EditarPerfilForm>();

  const onSubmit = (data: EditarPerfilForm) => {
    console.log("Novo perfil:", data);
    alert("Perfil atualizado!");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Editar Perfil</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <input
          {...register("nome")}
          className="border p-2 rounded"
          placeholder="Novo nome"
        />

        <input
          {...register("email")}
          className="border p-2 rounded"
          placeholder="Novo email"
          type="email"
        />

        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Salvar alterações
        </button>
      </form>
    </div>
  );
}
