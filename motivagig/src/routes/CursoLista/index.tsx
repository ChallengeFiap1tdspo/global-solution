import { Link } from "react-router-dom";

export default function CursoLista() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-black text-white">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-red-400 text-center mb-6">Curso de Python</h1>

        <div className="border border-red-600 rounded-2xl p-6 bg-black shadow">
          <h2 className="text-xl font-semibold text-red-300 mb-2">Python — Unidade única</h2>
          <p className="text-sm text-red-200 mb-4">10 perguntas • perguntas em sequência • feedback imediato</p>

          <Link
            to="/curso-semana/1"
            className="block text-center bg-red-700 hover:bg-red-600 text-white px-4 py-3 rounded-lg font-semibold transition"
          >
            Acessar o curso
          </Link>
        </div>
      </div>
    </div>
  );
}
