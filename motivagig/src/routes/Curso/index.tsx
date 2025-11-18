import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { perguntas } from "../../data/perguntasPython";

export default function CursoSemana() {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  const idNum = id ? Number(id) : NaN;
  const total = perguntas.length;


  const [selecionada, setSelecionada] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<"correta" | "errada" | null>(null);

  useEffect(() => {

    setSelecionada(null);
    setFeedback(null);
  }, [idNum]);

  if (!id || Number.isNaN(idNum) || idNum < 1 || idNum > total) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-black text-white">
        <div className="text-center text-red-400">Questão não encontrada.</div>
      </div>
    );
  }

  const index = idNum - 1;
  const q = perguntas[index];

  function escolher(alt: string) {
    setSelecionada(alt);
    setFeedback(alt === q.correta ? "correta" : "errada");
  }

  function proxima() {
    if (!selecionada) return;
    if (index + 1 < total) {
      const nextId = idNum + 1;
      navigate(`/curso-semana/${nextId}`);
    } else {
      alert("🎉 Parabéns! Você concluiu sua primeira etapa sobre Python. Aguarde a próxima semana.");
      navigate("/curso"); 
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-black text-white">
      <div className="w-full max-w-2xl px-4">
        <h1 className="text-3xl font-extrabold text-red-400 text-center mb-4">Curso de Python</h1>

        <div className="border border-red-600 rounded-2xl p-6 bg-black shadow">
          <p className="text-lg font-semibold text-red-300 text-center mb-4">Questão {idNum} de {total}</p>

          <p className="text-xl font-semibold text-red-200 text-center mb-6">{q.pergunta}</p>

          <div className="flex flex-col gap-3">
            {q.alternativas.map((alt) => {
              const selected = selecionada === alt;
              const correct = alt === q.correta;
              let cls =
                "w-full rounded-xl px-4 py-3 text-center transition border ";
              if (!selected) cls += "border-red-700 text-gray-200 hover:bg-red-700/20";
              else cls += correct ? "bg-green-900 border-green-500 text-green-300" : "bg-red-900 border-red-600 text-red-300";

              return (
                <button
                  key={alt}
                  onClick={() => escolher(alt)}
                  className={cls}
                >
                  {alt}
                </button>
              );
            })}
          </div>

          {feedback && (
            <p className={`mt-4 text-center font-medium ${feedback === "correta" ? "text-green-400" : "text-red-400"}`}>
              {feedback === "correta" ? "Correta!" : "Errada — reveja o conteúdo."}
            </p>
          )}

          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => navigate("/curso")}
              className="px-5 py-2 rounded-xl border border-red-600 text-red-200 hover:bg-red-700/20 transition"
            >
              Voltar ao curso
            </button>

            <button
              onClick={proxima}
              disabled={!selecionada}
              className={`px-5 py-2 rounded-xl font-semibold transition ${
                !selecionada
                  ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                  : "bg-red-700 text-white hover:bg-red-600"
              }`}
            >
              {index + 1 < total ? "Próxima" : "Finalizar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
