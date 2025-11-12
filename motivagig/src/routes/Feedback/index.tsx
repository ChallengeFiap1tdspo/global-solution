import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FeedbackBloco from "../../components/FeedbackBloco/FeedbackBloco";
import FeedbackDica from "../../components/FeedbackDica/FeedbackDica";

export default function Feedback() {
  const navigate = useNavigate();
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [energia, setEnergia] = useState("");
  const [humor, setHumor] = useState("");
  const [faturamento, setFaturamento] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    const dados = localStorage.getItem("user");
    if (!dados) navigate("/login");
    else setUser(JSON.parse(dados));
  }, [navigate]);

  const dicas = [
    "💧 Beba água e mantenha-se hidratado!",
    "🚴 Faça um alongamento rápido.",
    "🧘 Respire fundo e desacelere um pouco.",
    "📈 Organize sua rota para otimizar ganhos.",
    "🍎 Lembre-se de se alimentar bem hoje.",
  ];

  const dicaAleatoria = dicas[Math.floor(Math.random() * dicas.length)];

  const enviarFeedback = () => {
    alert(`Valeu, ${user?.email.split("@")[0]}! Feedback enviado 💜`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-pink-50 p-6 text-center">
      <h1 className="text-3xl font-extrabold text-purple-700 mb-2">
        Olá, {user?.email.split("@")[0]} 👋
      </h1>
      <p className="text-pink-600 mb-8 max-w-md">
        Como está o seu dia? Conta pra gente!
      </p>

      <FeedbackBloco
        titulo="Como está sua energia?"
        opcoes={["⚡", "🙂", "😴"]}
        valor={energia}
        aoSelecionar={setEnergia}
      />
      <FeedbackBloco
        titulo="Como está seu humor?"
        opcoes={["😄", "😐", "😞"]}
        valor={humor}
        aoSelecionar={setHumor}
      />
      <FeedbackBloco
        titulo="Como está o faturamento hoje?"
        opcoes={["💰", "📉", "📈"]}
        valor={faturamento}
        aoSelecionar={setFaturamento}
      />

      <div className="bg-white shadow-md rounded-2xl p-5 w-full max-w-md mb-6">
        <h2 className="text-lg font-semibold text-purple-700 mb-3">
          Quer deixar um comentário?
        </h2>
        <textarea
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          placeholder="Fale um pouco sobre seu dia..."
          className="w-full h-28 p-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-300 outline-none text-sm"
        ></textarea>
      </div>

      <FeedbackDica dica={dicaAleatoria} />

      <button
        onClick={enviarFeedback}
        className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-2xl hover:bg-pink-500 transition"
      >
        Enviar feedback
      </button>

      <button
        onClick={() => {
          localStorage.removeItem("user");
          navigate("/login");
        }}
        className="mt-6 text-sm text-purple-600 underline"
      >
        Sair
      </button>
    </div>
  );
}
