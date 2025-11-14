import { useState } from "react";
import type { Etapa } from "../../types/cursoTypes";

type Props = {
  etapa: Etapa;
  etapaAtual: number;
  totalEtapas: number;
  onVoltar: () => void;
  onAvancar: () => void;
};

export default function CursoEtapa({
  etapa,
  etapaAtual,
  totalEtapas,
  onVoltar,
  onAvancar,
}: Props) {
  const [respostas, setRespostas] = useState<{ [key: string]: string }>({});
  const [feedback, setFeedback] = useState<{ [key: string]: string }>({});

  const handleResposta = (pergunta: string, alternativa: string, correta: string) => {
    setRespostas((prev) => ({ ...prev, [pergunta]: alternativa }));
    setFeedback((prev) => ({
      ...prev,
      [pergunta]: alternativa === correta ? "Correta!" : "Tente novamente!",
    }));
  };

  return (
    <div className="mt-10 bg-black border border-red-600 shadow-[0_0_15px_rgba(255,0,0,0.4)] rounded-3xl p-8 max-w-3xl w-full text-left">
      <h2 className="text-2xl font-semibold text-red-500 mb-4">
        {etapa.titulo}
      </h2>

      {etapa.conteudo.map((texto, i) => (
        <p key={i} className="text-gray-300 mb-4">
          {texto}
        </p>
      ))}

      {etapa.questoes.map((q, index) => (
        <div
          key={index}
          className="mt-6 border border-red-500 rounded-2xl p-4 bg-black/40 shadow-[0_0_10px_rgba(255,0,0,0.2)]"
        >
          <p className="font-semibold text-red-400 mb-3">{q.pergunta}</p>

          {q.alternativas.map((alt) => (
            <button
              key={alt}
              onClick={() => handleResposta(q.pergunta, alt, q.correta)}
              className={`w-full text-left px-4 py-2 mb-2 rounded-xl border transition
                ${
                  respostas[q.pergunta] === alt
                    ? alt === q.correta
                      ? "bg-green-900 border-green-500 text-green-300"
                      : "bg-red-900 border-red-600 text-red-300"
                    : "border-red-700 text-gray-300 hover:bg-red-700/20"
                }`}
            >
              {alt}
            </button>
          ))}

          {feedback[q.pergunta] && (
            <p
              className={`mt-2 font-medium ${
                feedback[q.pergunta].includes("Correta")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {feedback[q.pergunta]}
            </p>
          )}
        </div>
      ))}

      <div className="mt-8 flex justify-between">
        {/* VOLTAR */}
        <button
          onClick={onVoltar}
          disabled={etapaAtual === 0}
          className={`px-6 py-3 rounded-2xl font-semibold transition
            ${
              etapaAtual === 0
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-red-700 text-white hover:bg-red-600 shadow-[0_0_10px_rgba(255,0,0,0.4)]"
            }`}
        >
          Voltar
        </button>

  
        {etapaAtual < totalEtapas - 1 ? (
          <button
            onClick={onAvancar}
            className="px-6 py-3 bg-red-700 text-white rounded-2xl font-semibold hover:bg-red-600 shadow-[0_0_10px_rgba(255,0,0,0.4)] transition"
          >
            Próxima Etapa →
          </button>
        ) : (
          <button className="px-6 py-3 bg-green-800 text-white rounded-2xl font-semibold hover:bg-green-700 transition shadow-[0_0_10px_rgba(0,255,0,0.3)]">
            Finalizar Curso
          </button>
        )}
      </div>
    </div>
  );
}
