import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FeedbackBloco from "../../components/FeedbackBloco/FeedbackBloco";
import FeedbackDica from "../../components/FeedbackDica/FeedbackDica";

export default function Feedback() {
  const navigate = useNavigate();
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [energia, setEnergia] = useState("");
  const [humor, setHumor] = useState("");
  const [faturamento, setFaturamento] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    const checkAuth = () => {
      const trabalhadorLogado = sessionStorage.getItem("trabalhadorLogado");

      if (!trabalhadorLogado) {
        console.log("Usuário não autenticado, redirecionando...");
        navigate("/login", { replace: true });
        return;
      }

      const dados = localStorage.getItem("user");
      if (dados) setUser(JSON.parse(dados));

      setIsLoading(false); 
    };

    checkAuth();
  }, [navigate]);

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

  const dicas = [
    "💧 Beba água e mantenha-se hidratado!",
    "🚴 Faça um alongamento rápido.",
    "🧘 Respire fundo e desacelere um pouco.",
    "📈 Organize sua rota para otimizar ganhos.",
    "🍎 Lembre-se de se alimentar bem hoje.",
  ];

  const dicaAleatoria = dicas[Math.floor(Math.random() * dicas.length)];

  const enviarFeedback = () => {
    alert(`Valeu, ${user?.email.split("@")[0]}! Feedback enviado ❤️`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-red-900 p-6 text-center">
      <h1 className="text-3xl font-extrabold text-red-400 mb-2">
        Olá, {user?.email.split("@")[0]} 👋
      </h1>
      <p className="text-red-300 mb-8 max-w-md">
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

      <div className="bg-black border border-red-600 shadow-lg shadow-red-800/40 rounded-2xl p-5 w-full max-w-md mb-6">
        <h2 className="text-lg font-semibold text-red-400 mb-3">
          Quer deixar um comentário?
        </h2>

        <textarea
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          placeholder="Fale um pouco sobre seu dia..."
          className="w-full h-28 p-3 border border-red-700 bg-black text-red-300 rounded-xl 
          focus:ring-2 focus:ring-red-500 outline-none text-sm placeholder-red-600"
        ></textarea>
      </div>

      <FeedbackDica dica={dicaAleatoria} />

      <button
        onClick={enviarFeedback}
        className="px-8 py-3 bg-red-600 text-black font-semibold rounded-2xl 
        hover:bg-red-500 transition shadow-md shadow-red-900"
      >
        Enviar feedback
      </button>

      <button
        onClick={() => {
          localStorage.removeItem("user");
          navigate("/login");
        }}
        className="mt-6 text-sm text-red-400 underline hover:text-red-300 transition"
      >
        Sair
      </button>
    </div>
  );
}
