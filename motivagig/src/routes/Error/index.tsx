import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-30"></div>
      <div className="absolute top-10 right-10 w-20 h-20 bg-red-600 rounded-full blur-xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-red-500 rounded-full blur-lg opacity-10 animate-bounce"></div>

      <div className="relative z-10">
        <h1 className="text-8xl font-bold bg-gradient-to-r from-red-500 via-red-400 to-red-300 bg-clip-text text-transparent mb-4">
          404
        </h1>
        <p className="text-2xl text-red-400 font-medium mb-8">
          Oops! Página não encontrada.
        </p>

        <Link
          to="/"
          className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 transition-all duration-300 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-red-500/20 hover:shadow-xl hover:scale-105 active:scale-95 overflow-hidden inline-block"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          <span className="relative">
            Voltar para Home
          </span>
        </Link>
      </div>
    </div>
  );
}