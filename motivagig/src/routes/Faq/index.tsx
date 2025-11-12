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
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-purple-700 mb-8">
        Perguntas Frequentes (FAQ)
      </h1>

      <div className="w-full max-w-2xl space-y-4">
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
  );
}
