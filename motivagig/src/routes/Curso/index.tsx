import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CursoEtapa from "../../components/CursoEtapa/CursoEtapa";
import type { Etapa } from "../../types/cursoTypes";

export default function CursoSemana() {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const trabalhadorLogado = sessionStorage.getItem("trabalhadorLogado");
      
      if (!trabalhadorLogado) {
        console.log("Usuário não autenticado, redirecionando para login...");
        navigate("/login", { replace: true });
        return;
      }
      
      console.log("Usuário autenticado:", JSON.parse(trabalhadorLogado));
      setIsLoading(false);
    };

    checkAuth();
  }, [navigate]);

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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-red-400 font-medium">Verificando autenticação...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-red-900 flex flex-col items-center text-center p-8">
      <h1 className="text-4xl font-extrabold text-red-400">Curso da Semana</h1>

      <p className="mt-3 text-red-200 text-lg font-medium">
        Python do Iniciante ao Intermediário
      </p>

      <CursoEtapa
        etapa={etapa}
        etapaAtual={etapaAtual}
        totalEtapas={etapas.length}
        onAvancar={avancarEtapa}
        onVoltar={voltarEtapa}
      />

      <p className="mt-10 text-red-300 text-sm">
        Etapa {etapaAtual + 1} de {etapas.length}
      </p>
    </div>
  );
}