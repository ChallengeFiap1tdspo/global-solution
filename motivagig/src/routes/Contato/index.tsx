import { useForm } from "react-hook-form";
import type { ContatoData } from "../../types/contato";

export default function Contato() {
  const { register, handleSubmit, reset } = useForm<ContatoData>();

  const onSubmit = () => {
    alert("Mensagem enviada com sucesso!");
    reset();
  };

  return (
    <main className="min-h-screen w-full bg-black flex flex-col items-center px-4 py-12 text-white">
      <div className="w-full max-w-2xl bg-zinc-900 rounded-2xl shadow-xl p-8 border border-red-600">

        <h1 className="text-4xl font-bold text-red-600 text-center mb-6">
          Fale Conosco
        </h1>

        <p className="text-gray-300 text-center mb-10 leading-relaxed">
          Nosso atendimento é 100% online.  
          Não possuímos local físico.  
          <br />  
          <span className="text-red-500 font-semibold">
            Horário de funcionamento: 08h às 18h — Segunda a Sexta
          </span>
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">

     
          <div className="flex flex-col">
            <label className="font-medium text-gray-200 mb-1">Nome</label>
            <input
              {...register("nome", { required: true })}
              type="text"
              className="bg-black border border-red-600 rounded-xl p-3 text-white focus:outline-none focus:border-red-400"
              placeholder="Digite seu nome"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-200 mb-1">E-mail</label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="bg-black border border-red-600 rounded-xl p-3 text-white focus:outline-none focus:border-red-400"
              placeholder="exemplo@email.com"
            />
          </div>

  
          <div className="flex flex-col">
            <label className="font-medium text-gray-200 mb-1">Assunto</label>
            <input
              {...register("assunto", { required: true })}
              type="text"
              className="bg-black border border-red-600 rounded-xl p-3 text-white focus:outline-none focus:border-red-400"
              placeholder="Sobre o que deseja falar?"
            />
          </div>

       
          <div className="flex flex-col">
            <label className="font-medium text-gray-200 mb-1">Mensagem</label>
            <textarea
              {...register("mensagem", { required: true })}
              rows={5}
              className="bg-black border border-red-600 rounded-xl p-3 text-white resize-none focus:outline-none focus:border-red-400"
              placeholder="Escreva sua mensagem..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 transition-all text-white font-medium py-3 rounded-xl shadow-md"
          >
            Enviar Mensagem
          </button>

        </form>
      </div>
    </main>
  );
}
