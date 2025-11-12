import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-12 bg-gradient-to-br from-pink-50 via-pink-100 to-purple-50 text-purple-900 relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-pink-300 opacity-30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-purple-400 opacity-20 rounded-full blur-3xl animate-ping"></div>
      </div>

      <div className="max-w-3xl">
        <h1 className="text-6xl sm:text-7xl font-extrabold mb-4 tracking-tight drop-shadow-sm text-pink-700">
          Gig.Up 
        </h1>

        <p className="text-lg sm:text-xl leading-relaxed mb-8 text-purple-700 font-medium">
          Transforme seu trabalho em uma jornada de evolução.  
          <span className="text-pink-600 font-semibold">
            Cuidar de você é o primeiro passo para crescer.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          <Link
            to="/cadastro"
            className="px-8 py-4 bg-pink-600 text-white rounded-full font-semibold text-lg shadow-md hover:bg-pink-500 hover:scale-105 transition-transform duration-300"
          >
            Começar Agora
          </Link>

          <Link
            to="/curso-semana"
            className="px-8 py-4 border-2 border-pink-600 text-pink-700 rounded-full font-semibold text-lg hover:bg-pink-50 hover:scale-105 transition-transform duration-300"
          >
            Ver Curso da Semana
          </Link>
        </div>

        <p className="text-sm uppercase tracking-wide font-semibold text-purple-600">
          Cresça. Aprenda. Evolua. 
        </p>
      </div>

      <div className="mt-20 max-w-2xl text-center text-purple-700">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-pink-700">
          Faça parte da revolução dos autônomos.
        </h2>
        <p className="text-lg leading-relaxed">
          No <span className="font-bold text-purple-800">Gig.Up</span>, você tem
          apoio para crescer — emocional, físico e profissionalmente.
          Cada dia é um passo rumo a um futuro melhor.
        </p>
      </div>
    </section>
  );
}
