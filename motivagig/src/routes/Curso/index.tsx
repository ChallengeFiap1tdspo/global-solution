import { useState } from "react";
import CursoEtapa from "../../components/CursoEtapa/CursoEtapa";
import type { Etapa } from "../../types/cursoTypes";

export default function CursoSemana() {
  const [etapaAtual, setEtapaAtual] = useState(0);

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
  ];

  const etapa = etapas[etapaAtual];

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

      <CursoEtapa
        etapa={etapa}
        etapaAtual={etapaAtual}
        totalEtapas={etapas.length}
        onAvancar={avancarEtapa}
        onVoltar={voltarEtapa}
      />

      <p className="mt-10 text-slate-600 text-sm">
        Etapa {etapaAtual + 1} de {etapas.length}
      </p>
    </div>
  );
}
