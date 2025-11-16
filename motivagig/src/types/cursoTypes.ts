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


export type CursoType = {
  id: number;
  titulo: string;
  descricao: string;
  ativo: boolean;
  duracaoHoras: number;
};
