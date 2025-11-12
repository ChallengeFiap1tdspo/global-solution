import { useState } from "react";

type Etapa = {
  id: number;
  titulo: string;
  conteudo: string[];
  questoes: {
    pergunta: string;
    alternativas: string[];
    correta: string;
  }[];
};

export default function CursoSemana() {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [respostas, setRespostas] = useState<{ [key: string]: string }>({});
  const [feedback, setFeedback] = useState<{ [key: string]: string }>({});

  const etapas: Etapa[] = [
    {
      id: 1,
      titulo: "Segunda — Introdução ao Python",
      conteudo: [
        "Python é uma linguagem de programação de alto nível, muito usada em automação, web, ciência de dados e IA.",
        "Sua principal vantagem é a simplicidade da sintaxe, o que a torna ideal para iniciantes.",
        "Para começar, instale o Python ou use plataformas online como o Programiz.",
      ],
      questoes: [
        {
          pergunta: "O que é Python?",
          alternativas: [
            "Um tipo de banco de dados",
            "Uma linguagem de programação",
            "Um navegador web",
            "Um sistema operacional",
          ],
          correta: "Uma linguagem de programação",
        },
      ],
    },
    {
      id: 2,
      titulo: "Terça — Variáveis e Tipos de Dados",
      conteudo: [
        "Variáveis são usadas para armazenar informações que podem ser usadas depois.",
        "Exemplo: nome = 'João' ou idade = 25",
        "Python reconhece automaticamente o tipo de dado, como string, int, float, bool.",
      ],
      questoes: [
        {
          pergunta: "Como declaramos uma variável chamada nome?",
          alternativas: [
            "let nome = 'João'",
            "var nome = 'João'",
            "nome = 'João'",
            "string nome = 'João'",
          ],
          correta: "nome = 'João'",
        },
      ],
    },
    {
      id: 3,
      titulo: "Quarta — Estruturas de Repetição",
      conteudo: [
        "Os loops são usados para repetir instruções várias vezes.",
        "O comando 'for' percorre uma sequência (lista, texto, range).",
        "Exemplo: for i in range(5): print(i)",
      ],
      questoes: [
        {
          pergunta: "Qual comando usamos para repetir um bloco de código?",
          alternativas: ["while", "repeat", "loop", "if"],
          correta: "while",
        },
      ],
    },
    {
      id: 4,
      titulo: "Quinta — Funções em Python",
      conteudo: [
        "Funções são blocos de código que executam uma tarefa específica.",
        "Definimos funções com a palavra-chave 'def'.",
        "Exemplo: def saudacao(): print('Olá!')",
      ],
      questoes: [
        {
          pergunta: "Como se define uma função no Python?",
          alternativas: [
            "function saudacao():",
            "def saudacao():",
            "criar saudacao():",
            "func saudacao():",
          ],
          correta: "def saudacao():",
        },
      ],
    },
    {
      id: 5,
      titulo: "Sexta — Projeto Final",
      conteudo: [
        "Agora é hora de juntar tudo o que aprendeu e criar algo prático.",
        "Crie um programa que receba o nome do usuário e mostre uma saudação personalizada.",
        "Dica: use input() para capturar dados e print() para exibir mensagens.",
      ],
      questoes: [
        {
          pergunta: "Qual função usamos para capturar dados do usuário?",
          alternativas: ["input()", "get()", "scan()", "read()"],
          correta: "input()",
        },
      ],
    },
  ];

  const etapa = etapas[etapaAtual];

  const handleResposta = (pergunta: string, alternativa: string, correta: string) => {
    setRespostas((prev) => ({ ...prev, [pergunta]: alternativa }));
    setFeedback((prev) => ({
      ...prev,
      [pergunta]:
        alternativa === correta ? "Correta!" : "Tente novamente!",
    }));
  };

  const avancarEtapa = () => {
    if (etapaAtual < etapas.length - 1) {
      setEtapaAtual(etapaAtual + 1);
    }
  };

  const voltarEtapa = () => {
    if (etapaAtual > 0) {
      setEtapaAtual(etapaAtual - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 flex flex-col items-center text-center p-8">
      <h1 className="text-4xl font-extrabold text-purple-700">Curso da Semana</h1>
      <p className="mt-3 text-pink-600 text-lg font-medium">
        Python do Iniciante ao Intermediário
      </p>

      <div className="mt-10 bg-white shadow-lg rounded-3xl p-8 max-w-3xl text-left w-full">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">
          {etapa.titulo}
        </h2>

        {etapa.conteudo.map((texto, i) => (
          <p key={i} className="text-slate-700 mb-4">
            {texto}
          </p>
        ))}

        {etapa.questoes.map((q, index) => (
          <div key={index} className="mt-6 border rounded-2xl p-4">
            <p className="font-semibold text-purple-700 mb-3">{q.pergunta}</p>
            {q.alternativas.map((alt) => (
              <button
                key={alt}
                onClick={() => handleResposta(q.pergunta, alt, q.correta)}
                className={`w-full text-left px-4 py-2 mb-2 rounded-xl border transition
                  ${
                    respostas[q.pergunta] === alt
                      ? alt === q.correta
                        ? "bg-green-100 border-green-500 text-green-700"
                        : "bg-red-100 border-red-500 text-red-700"
                      : "border-slate-200 hover:bg-purple-50"
                  }`}
              >
                {alt}
              </button>
            ))}
            {feedback[q.pergunta] && (
              <p
                className={`mt-2 font-medium ${
                  feedback[q.pergunta].includes("Correta")
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {feedback[q.pergunta]}
              </p>
            )}
          </div>
        ))}

        <div className="mt-8 flex justify-between">
          <button
            onClick={voltarEtapa}
            disabled={etapaAtual === 0}
            className={`px-6 py-3 rounded-2xl font-semibold transition ${
              etapaAtual === 0
                ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                : "bg-purple-600 text-white hover:bg-pink-500"
            }`}
          >
            Voltar
          </button>

          {etapaAtual < etapas.length - 1 ? (
            <button
              onClick={avancarEtapa}
              className="px-6 py-3 bg-purple-600 text-white rounded-2xl font-semibold hover:bg-pink-500 transition"
            >
              Próxima Etapa →
            </button>
          ) : (
            <button className="px-6 py-3 bg-green-600 text-white rounded-2xl font-semibold hover:bg-green-500 transition">
              Finalizar Curso
            </button>
          )}
        </div>
      </div>

      <p className="mt-10 text-slate-600 text-sm">
        Etapa {etapaAtual + 1} de {etapas.length}
      </p>
    </div>
  );
}
