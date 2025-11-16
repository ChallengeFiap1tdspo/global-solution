
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
    <div className="p-6 max-w-md mx-auto mt-10 bg-black/80 text-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Editar Perfil</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <input
          {...register("nome")}
          className="border p-2 rounded bg-black text-white border-white/40"
          placeholder="Novo nome"
        />

        <input
          {...register("email")}
          className="border p-2 rounded bg-black text-white border-white/40"
          placeholder="Novo email"
          type="email"
        />

        <button
          type="submit"
          className="bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
        >
          Salvar alterações
        </button>
      </form>
    </div>
  );
}
