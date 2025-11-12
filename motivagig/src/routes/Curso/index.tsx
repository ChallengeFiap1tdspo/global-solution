export default function CursoSemana() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 p-8 flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold text-purple-700">Curso da Semana</h1>
      <p className="mt-3 text-pink-600 text-lg">
        “Gestão de Tempo e Produtividade para Autônomos”
      </p>

      <div className="mt-10 bg-white shadow-md rounded-2xl p-6 max-w-2xl">
        <p className="text-slate-700">
          Neste curso, você vai aprender técnicas simples e práticas para equilibrar o tempo entre trabalho, descanso e aprendizado.
        </p>

        <button
          disabled
          className="mt-8 w-full py-3 rounded-2xl bg-gray-300 text-gray-600 font-semibold cursor-not-allowed"
        >
          Faça login para acessar
        </button>
      </div>
    </div>
  );
}
