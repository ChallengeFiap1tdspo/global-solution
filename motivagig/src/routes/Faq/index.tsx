import { useState } from "react";
import ItemFAQ from "../../components/Faq/ItemFAQ";

export default function Faq() {
  const [ativo, setAtivo] = useState<number | null>(null);

  const perguntas = [
    {
      pergunta: "O que é o Motivagig?",
      resposta:
        "É uma plataforma que ajuda trabalhadores autônomos e de apps a se desenvolverem profissionalmente e cuidarem da saúde.",
    },
    {
      pergunta: "Preciso pagar para usar?",
      resposta:
        "Não! O cadastro é totalmente gratuito e você pode aproveitar os cursos e o acompanhamento sem custo.",
    },
    {
      pergunta: "Como participo dos cursos?",
      resposta:
        "Crie sua conta, faça login e acesse a aba 'Curso da Semana' para começar a aprender.",
    },
    {
      pergunta: "O que ganho participando?",
      resposta:
        "Você adquire novas habilidades, recebe certificados e pode crescer na sua carreira.",
    },
    {
      pergunta: "Quem pode se cadastrar?",
      resposta:
        "Todos os trabalhadores autônomos — entregadores, motoristas, freelancers, entre outros.",
    },
    {
      pergunta: "Posso acessar pelo celular?",
      resposta:
        "Sim! O site é responsivo e funciona bem em qualquer dispositivo.",
    },
    {
      pergunta: "Vocês oferecem suporte?",
      resposta:
        "Sim, temos suporte por e-mail e WhatsApp para tirar dúvidas e ajudar em qualquer etapa.",
    },
    {
      pergunta: "Os cursos têm certificado?",
      resposta:
        "Sim, cada curso concluído gera um certificado digital gratuito.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black p-8 flex flex-col items-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-30"></div>
      <div className="absolute top-10 right-10 w-20 h-20 bg-red-600 rounded-full blur-xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-red-500 rounded-full blur-lg opacity-10 animate-bounce"></div>

      <div className="w-full max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-red-500 via-red-400 to-red-300 bg-clip-text text-transparent mb-4">
            Perguntas Frequentes (FAQ)
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full mx-auto"></div>
        </div>

        <div className="space-y-4">
          {perguntas.map((item, i) => (
            <ItemFAQ
              key={i}
              pergunta={item.pergunta}
              resposta={item.resposta}
              ativo={ativo === i}
              onClick={() => setAtivo(ativo === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}