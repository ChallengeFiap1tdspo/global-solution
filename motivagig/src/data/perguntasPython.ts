import type { Questao } from "../types/cursoTypes";

export const perguntas: Questao[] = [
  { pergunta: "Python é:", alternativas: ["Uma linguagem de programação", "Um navegador", "Um banco de dados"], correta: "Uma linguagem de programação" },
  { pergunta: "Qual é a extensão comum de arquivos Python?", alternativas: [".py", ".js", ".php"], correta: ".py" },
  { pergunta: "Como declaramos uma variável em Python?", alternativas: ["var x = 1", "let x = 1", "x = 1"], correta: "x = 1" },
  { pergunta: "Qual tipo representa números inteiros?", alternativas: ["int", "str", "float"], correta: "int" },
  { pergunta: "Qual estrutura usamos para decisão condicional?", alternativas: ["for", "if", "while"], correta: "if" },
  { pergunta: "Como se inicia um loop que repete enquanto condicao for verdadeira?", alternativas: ["for", "while", "repeat"], correta: "while" },
  { pergunta: "Qual comando interrompe imediatamente um loop?", alternativas: ["stop", "break", "exit"], correta: "break" },
  { pergunta: "Como definimos uma função em Python?", alternativas: ["function nome()", "def nome():", "fun nome()"], correta: "def nome():" },
  { pergunta: "Como retornamos um valor de uma função?", alternativas: ["send", "return", "out"], correta: "return" },
  { pergunta: "Qual comando imprime texto na saída padrão?", alternativas: ["echo()", "print()", "puts()"], correta: "print()" },
];
