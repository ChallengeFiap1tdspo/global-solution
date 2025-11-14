import { Link } from "react-router-dom";

export default function BoasVindas() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-30"></div>
      <div className="absolute top-10 right-10 w-20 h-20 bg-red-600 rounded-full blur-xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-red-500 rounded-full blur-lg opacity-10 animate-bounce"></div>

      <div className="w-full max-w-4xl bg-zinc-900 rounded-3xl shadow-2xl p-8 border border-red-600 relative z-10">
        
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-red-500 via-red-400 to-red-300 bg-clip-text text-transparent mb-4">
            Bem-vindo ao Gig.Up!
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-red-200">
            Sua jornada de crescimento começa agora
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-black/50 border-2 border-red-500/30 rounded-2xl p-6 hover:border-red-400 transition-all duration-300">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-red-400 mb-2">Curso da Semana</h3>
              <p className="text-red-200 mb-4">
                Aprenda habilidades essenciais para impulsionar sua carreira com nosso curso exclusivo da semana.
              </p>
            </div>
            <Link
              to="/curso-semana"
              className="w-full bg-red-600 hover:bg-red-500 text-white font-semibold py-3 rounded-xl transition-all duration-300 block text-center hover:scale-105"
            >
              Acessar Curso
            </Link>
          </div>

          <div className="bg-black/50 border-2 border-red-500/30 rounded-2xl p-6 hover:border-red-400 transition-all duration-300">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-red-400 mb-2">Feedback Diário</h3>
              <p className="text-red-200 mb-4">
                Compartilhe suas experiências e receba orientações personalizadas para seu crescimento diário.
              </p>
            </div>
            <Link
              to="/feedback"
              className="w-full bg-red-600 hover:bg-red-500 text-white font-semibold py-3 rounded-xl transition-all duration-300 block text-center hover:scale-105"
            >
              Dar Feedback
            </Link>
          </div>
        </div>

        <div className="bg-red-900/20 border border-red-600/30 rounded-2xl p-6 text-center">
          <h4 className="text-lg font-bold text-red-400 mb-2"> Dica Importante</h4>
          <p className="text-red-200">
            Para melhor aproveitamento, recomendamos acessar o <strong>Curso da Semana</strong> primeiro 
            e depois compartilhar seu <strong>Feedback Diário</strong> sobre o que aprendeu.
          </p>
        </div>

        <div className="text-center mt-8">
          <p className="text-red-300">
            Precisa de ajuda? <Link to="/ajuda" className="text-red-400 hover:text-red-300 underline">Clique aqui</Link>
          </p>
        </div>
      </div>
    </div>
  );
}