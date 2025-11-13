import { useEffect } from "react";
import fotoEmanuel from "../../img/FotoEmanuel.jpg";
import fotoPaulo from "../../img/FotoPaulo.jpg";
import fotoAlef from "../../img/FotoAlef.jpg";
import logoLinkedin from "../../img/LogoLinkedlin.png";
import logoGithub from "../../img/GitHub-logo.png";

type IntegranteType = {
  nome: string;
  rm: string;
  turma: string;
  foto: string;
  linkedin: string;
  github: string;
};

export default function Integrantes() {
  useEffect(() => {
    document.title = "Equipe - FIAP";
  }, []);

  const integrantes: IntegranteType[] = [
    {
      nome: "Emanuel Italo",
      rm: "RM561337",
      turma: "1TDSPO",
      foto: fotoEmanuel,
      linkedin: "https://www.linkedin.com/in/emanuel-italo-b7865b184/",
      github: "https://github.com/Emanuel-Italo",
    },
    {
      nome: "Paulo Estalise",
      rm: "RM563811",
      turma: "1TDSPO",
      foto: fotoPaulo,
      linkedin: "https://www.linkedin.com/in/paulo-henrique-estalise-a2324a271/",
      github: "https://github.com/Paulo-Estalise",
    },
    {
      nome: "Alef Rodrigues",
      rm: "RM563272",
      turma: "1TDSPO",
      foto: fotoAlef,
      linkedin: "https://www.linkedin.com/in/alef-rodrigues-985203271/",
      github: "https://github.com/AlefRodrigues94",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center relative overflow-hidden">
      
      {/* Efeitos de fundo futurista */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
      
      {/* Grid tecnológico */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>

      {/* Header */}
      <div className="text-center max-w-2xl relative z-10 mb-16">
        <div className="relative">
          <div className="absolute -inset-3 bg-red-600 rounded-lg blur-lg opacity-20 animate-pulse"></div>
          <h1 className="relative text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600 tracking-tight">
            NOSSA EQUIPE
          </h1>
        </div>
        
        <div className="mt-6 h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_15px_#ef4444]"></div>
        
        <p className="mt-6 text-red-300 text-lg max-w-md mx-auto">
          Equipe dedicada da turma <span className="font-bold text-red-400">1TDSPO</span> 
          comprometida com a excelência e inovação.
        </p>
      </div>

      {/* Grid de integrantes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl relative z-10">
        {integrantes.map((membro, index) => (
          <div
            key={index}
            className="relative group transform hover:scale-[1.03] transition-all duration-500"
          >
            {/* Efeito de brilho no hover */}
            <div className="absolute -inset-1 bg-red-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
            
            {/* Card principal */}
            <div className="relative bg-black/80 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8 group-hover:border-red-500/60 transition-all duration-300 h-full flex flex-col items-center">
              
              {/* Foto com moldura futurista */}
              <div className="relative mb-6">
                <div className="absolute -inset-2 bg-red-600 rounded-full blur-md opacity-0 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative w-32 h-32 border-2 border-red-500/50 rounded-full overflow-hidden group-hover:border-red-400 transition duration-300 shadow-[0_0_20px_#ef444440]">
                  <img
                    src={membro.foto}
                    alt={`Foto de ${membro.nome}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Informações */}
              <div className="text-center flex-1">
                <h3 className="text-xl font-bold text-red-400 mb-2 group-hover:text-red-300 transition duration-300">
                  {membro.nome}
                </h3>
                
                <div className="space-y-1 mb-6">
                  <p className="text-red-300 font-mono text-sm bg-red-900/30 px-3 py-1 rounded-lg inline-block">
                    {membro.rm}
                  </p>
                  <p className="text-red-200 text-sm">{membro.turma}</p>
                </div>

                {/* Links sociais */}
                <div className="flex justify-center gap-6 pt-4 border-t border-red-500/20">
                  <a 
                    href={membro.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transform hover:scale-110 transition duration-300 hover:filter hover:drop-shadow-[0_0_8px_#ef4444]"
                  >
                    <img 
                      src={logoLinkedin} 
                      alt="LinkedIn" 
                      className="w-7 h-7 invert"
                    />
                  </a>
                  <a 
                    href={membro.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transform hover:scale-110 transition duration-300 hover:filter hover:drop-shadow-[0_0_8px_#ef4444]"
                  >
                    <img 
                      src={logoGithub} 
                      alt="GitHub" 
                      className="w-7 h-7 invert"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Indicador de elemento */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
          </div>
        ))}
      </div>

      {/* Elementos decorativos flutuantes */}
      <div className="absolute top-20 right-20 w-3 h-3 bg-red-500 rounded-full animate-bounce shadow-[0_0_10px_#ef4444]"></div>
      <div className="absolute bottom-40 left-32 w-2 h-2 bg-red-400 rounded-full animate-bounce delay-300 shadow-[0_0_8px_#f87171]"></div>
      <div className="absolute top-1/2 left-10 w-1 h-1 bg-red-300 rounded-full animate-bounce delay-700"></div>
    </div>
  );
}