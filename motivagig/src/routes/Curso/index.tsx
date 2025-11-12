import { useState } from "react";

type Questao = {
  id: number;
  pergunta: string;
  alternativas: string[];
  correta: string;
};

export default function CursoSemana() {
  const [respostas, setRespostas] = useState<{ [key: number]: string }>({});
  const [feedback, setFeedback] = useState<{ [key: number]: string }>({});

  const handleResposta = (id: number, alternativa: string, correta: string) => {
    setRespostas((prev) => ({ ...prev, [id]: alternativa }));
    if (alternativa === correta) {
      setFeedback((prev) => ({ ...prev, [id]: "✅ Resposta correta!" }));
    } else {
      setFeedback((prev) => ({ ...prev, [id]: "❌ Tente novamente!" }));
    }
  };

  const questoes: Questao[] = [
    {
      id: 1,
      pergunta: "O que é o Python?",
      alternativas: [
        "Um sistema operacional",
        "Uma linguagem de programação",
        "Um editor de texto",
        "Um banco de dados",
      ],
      correta: "Uma linguagem de programação",
    },
    {
      id: 2,
      pergunta: "Como criamos uma função no Python?",
      alternativas: [
        "function minhaFuncao()",
        "criar funcao",
        "def minha_funcao():",
        "func minhaFuncao:",
      ],
      correta: "def minha_funcao():",
    },
    {
      id: 3,
      pergunta: "Qual desses é um tipo de dado em Python?",
      alternativas: ["texto", "número", "bool", "todos os anteriores"],
      correta: "todos os anteriores",
    },
    {
      id: 4,
      pergunta: "O que o comando 'for' faz em Python?",
      alternativas: [
        "Cria uma função",
        "Repete um bloco de código",
        "Finaliza o programa",
        "Verifica uma condição",
      ],
      correta: "Repete um bloco de código",
    },
    {
      id: 5,
      pergunta: "Qual desses símbolos indica um comentário?",
      alternativas: ["//", "/* */", "#", "--"],
      correta: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 flex flex-col items-center text-center p-8">
      <h1 className="text-4xl font-extrabold text-purple-700">Curso da Semana</h1>
      <p className="mt-3 text-pink-600 text-lg">
         <strong>Python do Iniciante ao Intermediário</strong>
      </p>

      <div className="mt-10 bg-white shadow-lg rounded-3xl p-8 max-w-3xl text-left space-y-10">
        <section>
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            📘 Introdução ao Python
          </h2>
          <p className="text-slate-700 mb-4">
            Python é uma das linguagens mais populares do mundo, conhecida pela
            sua <span className="text-purple-600 font-semibold">simplicidade</span> e
            versatilidade. É usada em diversas áreas, como desenvolvimento web,
            automação, ciência de dados e inteligência artificial.
          </p>
          <p className="text-slate-700 mb-4">
            Por ser fácil de aprender e ter uma sintaxe parecida com o inglês,
            é ideal para quem está começando. Um exemplo básico:
          </p>
          <pre className="bg-slate-100 p-4 rounded-xl text-sm text-slate-800">
            print("Olá, mundo!")
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-700 mb-6"> Questões de Fixação</h2>
          {questoes.map((q) => (
            <div key={q.id} className="border rounded-2xl p-4 mb-6 hover:bg-pink-50 transition">
              <p className="font-semibold text-purple-700 mb-3">
                {q.id}. {q.pergunta}
              </p>

              <div className="space-y-2">
                {q.alternativas.map((alt) => (
                  <button
                    key={alt}
                    onClick={() => handleResposta(q.id, alt, q.correta)}
                    className={`w-full text-left px-4 py-2 rounded-xl border transition font-medium
                      ${
                        respostas[q.id] === alt
                          ? alt === q.correta
                            ? "bg-green-100 border-green-500 text-green-700"
                            : "bg-red-100 border-red-500 text-red-700"
                          : "border-slate-200 hover:bg-purple-50"
                      }`}
                  >
                    {alt}
                  </button>
                ))}
              </div>

              {feedback[q.id] && (
                <p
                  className={`mt-3 font-medium ${
                    feedback[q.id].includes("✅") ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {feedback[q.id]}
                </p>
              )}
            </div>
          ))}
        </section>

        <section className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold text-purple-700 mb-2"> Dica do Dia</h2>
          <p className="text-slate-700">
            Que tal praticar um pouquinho? Abra o site{" "}
            <a
              href="https://www.programiz.com/python/online-compiler/"
              target="_blank"
              rel="noreferrer"
              className="text-purple-600 font-semibold hover:underline"
            >
              Programiz
            </a>{" "}
            e teste seus códigos Python diretamente no navegador!
          </p>
        </section>

        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <button className="px-6 py-3 bg-purple-600 text-white rounded-2xl font-semibold hover:bg-pink-500 transition">
            Finalizar Curso 🎓
          </button>
          <button className="px-6 py-3 border-2 border-purple-600 text-purple-700 rounded-2xl font-semibold hover:bg-purple-50 transition">
            Gerar Certificado (em breve)
          </button>
        </div>
      </div>

      <p className="mt-10 text-slate-600 text-sm">
        Continue aprendendo — um novo curso toda semana 
      </p>
    </div>
  );
}
