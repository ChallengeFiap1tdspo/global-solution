import { useForm } from "react-hook-form";
import type { ContatoData } from "../../types/contato";

export default function Contato() {
  const { register, handleSubmit, reset } = useForm<ContatoData>();

  const onSubmit = () => {
    alert("Mensagem enviada com sucesso!");
    reset();
  };

  return (
    <main className="min-h-screen w-full bg-white flex flex-col items-center justify-center px-4 py-8 text-gray-800 relative overflow-hidden">

      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 border border-red-600 relative z-10 transform hover:scale-[1.01] transition-all duration-300">
        
        {/* Header com efeito especial */}
        <div className="text-center mb-8 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full"></div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent mb-4 tracking-tight drop-shadow-sm">
            Fale Conosco
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full mx-auto mb-6"></div>
        </div>

        {/* Informações */}
        <div className="bg-gray-50 border border-red-200 rounded-2xl p-6 mb-8">
          <p className="text-gray-700 text-center mb-4 leading-relaxed text-lg font-medium">
            Nosso atendimento é 100% online
          </p>
          <p className="text-gray-600 text-center mb-4 leading-relaxed">
            Não possuímos local físico
          </p>
          <div className="flex items-center justify-center mt-4">
            <div className="flex items-center bg-red-50 border border-red-200 rounded-full px-6 py-3">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></span>
              <span className="text-red-700 font-semibold text-sm">
                Horário: 08h às 18h — Segunda a Sexta
              </span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">

          {/* Campo Nome */}
          <div className="group">
            <label className="font-medium text-gray-700 mb-2 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              Nome
            </label>
            <input
              {...register("nome", { required: true })}
              type="text"
              className="w-full bg-white border-2 border-red-200 rounded-2xl p-4 text-gray-800 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 group-hover:border-red-300 placeholder-gray-500"
              placeholder="Digite seu nome completo"
            />
          </div>

          {/* Campo E-mail */}
          <div className="group">
            <label className="font-medium text-gray-700 mb-2 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              E-mail
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="w-full bg-white border-2 border-red-200 rounded-2xl p-4 text-gray-800 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 group-hover:border-red-300 placeholder-gray-500"
              placeholder="exemplo@email.com"
            />
          </div>

          {/* Campo Assunto */}
          <div className="group">
            <label className="font-medium text-gray-700 mb-2 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              Assunto
            </label>
            <input
              {...register("assunto", { required: true })}
              type="text"
              className="w-full bg-white border-2 border-red-200 rounded-2xl p-4 text-gray-800 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 group-hover:border-red-300 placeholder-gray-500"
              placeholder="Sobre o que deseja falar?"
            />
          </div>

     
          <div className="group">
            <label className="font-medium text-gray-700 mb-2 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              Mensagem
            </label>
            <textarea
              {...register("mensagem", { required: true })}
              rows={5}
              className="w-full bg-white border-2 border-red-200 rounded-2xl p-4 text-gray-800 resize-none focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 group-hover:border-red-300 placeholder-gray-500"
              placeholder="Escreva sua mensagem detalhadamente..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 transition-all duration-300 text-white font-semibold py-4 rounded-2xl shadow-lg hover:shadow-red-500/20 hover:shadow-xl hover:scale-[1.02] active:scale-95 mt-4 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <span className="relative flex items-center justify-center gap-2">
              Enviar Mensagem
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>

        </form>

        <div className="mt-8 pt-6 border-t border-red-200">
          <p className="text-center text-gray-500 text-sm">
            Responderemos em até 24 horas úteis
          </p>
        </div>
      </div>
    </main>
  );
}