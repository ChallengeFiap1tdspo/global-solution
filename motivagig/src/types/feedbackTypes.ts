export type BlocoProps = {
  titulo: string;
  opcoes: string[];
  valor: string;
  aoSelecionar: (emoji: string) => void;
};

export type DicaProps = {
  dica: string;
};
