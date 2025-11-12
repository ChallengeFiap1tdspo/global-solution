export type Questao = {
  pergunta: string;
  alternativas: string[];
  correta: string;
};

export type Etapa = {
  id: number;
  titulo: string;
  conteudo: string[];
  questoes: Questao[];
};
