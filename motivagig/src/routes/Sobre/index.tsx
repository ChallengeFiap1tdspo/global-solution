export default function Sobre() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center relative overflow-hidden">

      <div className="absolute top-0 left-0 w-72 h-72 bg-red-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
      

      <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.1)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40"></div>

      <div className="text-center max-w-4xl relative z-10">

        <div className="relative mb-16">
          <div className="absolute -inset-3 bg-red-600 rounded-lg blur-lg opacity-30 animate-pulse"></div>
          <h1 className="relative text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600 tracking-tight">
            SOBRE O PROJETO
          </h1>
          <div className="mt-4 h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_20px_#ef4444]"></div>
        </div>


        <div className="grid gap-8 mt-12">
          <div className="relative group transform hover:scale-[1.02] transition duration-300">
            <div className="absolute -inset-1 bg-red-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative px-8 py-8 bg-black/90 border border-red-500/40 rounded-xl backdrop-blur-sm group-hover:border-red-500/60 transition-all duration-300">
              <p className="text-xl leading-relaxed text-gray-200">
                A <span className="text-red-400 font-bold text-2xl">Motivagig</span> nasceu com o propósito de transformar 
                o futuro dos trabalhadores autônomos da <span className="text-red-300 font-semibold">Gig Economy</span>.
              </p>
            </div>
          </div>

          <div className="relative group transform hover:scale-[1.02] transition duration-300">
            <div className="absolute -inset-1 bg-red-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative px-8 py-8 bg-black/90 border border-red-500/40 rounded-xl backdrop-blur-sm group-hover:border-red-500/60 transition-all duration-300">
              <p className="text-xl text-gray-200 leading-relaxed">
                Uma plataforma criada para apoiar <span className="text-red-300 font-semibold">motoristas</span>,{' '}
                <span className="text-red-300 font-semibold">entregadores</span> e{' '}
                <span className="text-red-300 font-semibold">independentes</span> na jornada de evolução pessoal e profissional.
              </p>
            </div>
          </div>

          <div className="relative group transform hover:scale-[1.02] transition duration-300">
            <div className="absolute -inset-1 bg-red-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative px-8 py-8 bg-black/90 border border-red-500/40 rounded-xl backdrop-blur-sm group-hover:border-red-500/60 transition-all duration-300">
              <p className="text-xl text-gray-200 leading-relaxed">
                Tecnologia e humanidade trabalhando juntas para criar{' '}
                <span className="text-red-300 font-semibold">oportunidades reais</span>, 
                trilhas de aprendizado, bem-estar e acompanhamento diário.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="relative my-20 w-full max-w-2xl">
        <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_30px_#ef4444]"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-6 h-6 border-2 border-red-500 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-4xl text-center relative z-10">
        <div className="relative inline-block mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 tracking-wider">
            POR QUE FAZEMOS ISSO?
          </h2>
          <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-red-500/50 via-red-500 to-red-500/50 shadow-[0_0_15px_#ef4444]"></div>
        </div>
        
        <div className="relative group transform hover:scale-[1.02] transition duration-300">
          <div className="absolute -inset-2 bg-red-600/30 rounded-xl blur-xl group-hover:blur-2xl transition duration-500"></div>
          <div className="relative px-10 py-10 bg-black/80 border border-red-500/30 rounded-xl backdrop-blur-sm group-hover:border-red-500/50 transition-all duration-300">
            <p className="text-xl text-gray-200 leading-relaxed mb-6">
              Acreditamos que todo trabalhador merece <span className="text-red-300 font-semibold">apoio</span>,{' '}
              <span className="text-red-300 font-semibold">desenvolvimento</span>,{' '}
              <span className="text-red-300 font-semibold">acolhimento</span> e uma{' '}
              <span className="text-red-300 font-semibold">rota clara para crescer</span>.
            </p>
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              A Gig Economy não precisa ser um ciclo sem saída — ela pode ser o começo de algo maior.
            </p>
          </div>
        </div>
      </div>


      <div className="absolute top-32 right-24 w-4 h-4 bg-red-500 rounded-full animate-bounce shadow-[0_0_10px_#ef4444]"></div>
      <div className="absolute bottom-48 left-20 w-3 h-3 bg-red-400 rounded-full animate-bounce delay-300 shadow-[0_0_8px_#f87171]"></div>
      <div className="absolute top-80 right-40 w-2 h-2 bg-red-300 rounded-full animate-bounce delay-700 shadow-[0_0_6px_#fca5a5]"></div>

      <div className="absolute top-1/4 left-10 w-px h-40 bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-60"></div>
      <div className="absolute bottom-1/4 right-10 w-px h-40 bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-60"></div>
    </div>
  );
}