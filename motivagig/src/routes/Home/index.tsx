import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-pink-100 to-purple-100 p-8">
      <h1 className="text-5xl font-extrabold text-purple-700">Gig.Up</h1>
      <p className="mt-4 text-lg text-pink-600 max-w-xl">
        Construa sua jornada. Acompanhe sua saúde e cresça profissionalmente com nossos cursos semanais.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link
          to="/cadastro"
          className="px-6 py-3 bg-purple-600 text-white rounded-2xl font-semibold hover:bg-pink-500 transition"
        >
          Cadastre-se agora
        </Link>
        <Link
          to="/curso-semana"
          className="px-6 py-3 border-2 border-purple-600 text-purple-700 rounded-2xl font-semibold hover:bg-purple-50 transition"
        >
          Ver curso da semana
        </Link>
      </div>

      <p className="mt-10 text-sm text-slate-600">
        Junte-se à comunidade Gig.Up — transforme os bicos em carreira.
      </p>
    </div>
  );
}
