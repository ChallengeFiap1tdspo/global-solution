import { useState } from "react";

export default function Feedback() {
  const [energia, setEnergia] = useState("");
  const [sentimento, setSentimento] = useState("");
  const [faturamento, setFaturamento] = useState("");
  const [mensagem, setMensagem] = useState("");

  const dicas = [
    "💧 Lembre-se de beber água — manter-se hidratado é essencial!",
    "🧠 Tire 5 minutos pra respirar fundo e relaxar. Sua mente agradece.",
    "🚴 Um alongamento rápido entre as corridas pode mudar seu dia!",
    "📅 Estabeleça uma meta pequena hoje — e comemore ao cumpri-la.",
    "🍎 Se alimente bem, energia vem do cuidado com o corpo.",
  ];

  const dicaDoDia = dicas[Math.floor(Math.random() * dicas.length)];

  const handleEnviar = () => {
    alert("Feedback enviado! Obrigado por compartilhar 💜");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-pink-50 p-6 text-center">
      <h1 className="text-4xl font-extrabold text-purple-700 mb-2">
        Seu Feedback Diário
      </h1>
      <p className="text-pink-600 mb-8 max-w-md">
        Reserve um minutinho para se cuidar. Suas emoções importam!
      </p>

      <div className="bg-white shadow-md rounded-2xl p-5 w-full max-w-md mb-6">
        <h2 className="text-lg font-semibold text-purple-700 mb-3">
          Como está sua energia hoje?
        </h2>
        <div className="flex justify-center gap-4 text-3xl">
          {["⚡", "🙂", "😴"].map((emoji) => (
            <button
              key={emoji}
              onClick={() => setEnergia(emoji)}
              className={`p-3 rounded-2xl border-2 transition ${
                energia === emoji
                  ? "border-purple-600 bg-purple-100 scale-110"
                  : "border-transparent hover:bg-pink-50"
              }`}
            >
              {emoji}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white shadow-md rounded-2xl p-5 w-full max-w-md mb-6">
        <h2 className="text-lg font-semibold text-purple-700 mb-3">
          Como está seu humor?
        </h2>
        <div className="flex justify-center gap-4 text-3xl">
          {["😄", "😐", "😞"].map((emoji) => (
            <button
              key={emoji}
              onClick={() => setSentimento(emoji)}
              className={`p-3 rounded-2xl border-2 transition ${
                sentimento === emoji
                  ? "border-purple-600 bg-purple-100 scale-110"
                  : "border-transparent hover:bg-pink-50"
              }`}
            >
              {emoji}
            </button>
          ))}
        </div>
      </div>

      {/* BLOCO 3 - Faturamento */}
      <div className="bg-white shadow-md rounded-2xl p-5 w-full max-w-md mb-6">
        <h2 className="text-lg font-semibold text-purple-700 mb-3">
          Como está o seu faturamento hoje?
        </h2>
        <div className="flex justify-center gap-4 text-3xl">
          {["💰", "📉", "📈"].map((emoji) => (
            <button
              key={emoji}
              onClick={() => setFaturamento(emoji)}
              className={`p-3 rounded-2xl border-2 transition ${
                faturamento === emoji
                  ? "border-purple-600 bg-purple-100 scale-110"
                  : "border-transparent hover:bg-pink-50"
              }`}
            >
              {emoji}
            </button>
          ))}
        </div>
      </div>

      {/* BLOCO 4 - Comentário */}
      <div className="bg-white shadow-md rounded-2xl p-5 w-full max-w-md mb-6">
        <h2 className="text-lg font-semibold text-purple-700 mb-3">
          Quer deixar algum comentário?
        </h2>
        <textarea
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          placeholder="Escreva algo sobre seu dia..."
          className="w-full h-28 p-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-300 outline-none text-sm"
        ></textarea>
      </div>

      {/* DICA DO DIA */}
      <div className="bg-purple-100 text-purple-700 font-medium rounded-2xl shadow-sm p-4 max-w-md mb-8">
        💡 <span className="text-purple-800">{dicaDoDia}</span>
      </div>

      <button
        onClick={handleEnviar}
        className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-2xl hover:bg-pink-500 transition"
      >
        Enviar feedback
      </button>
    </div>
  );
}
