import type { BlocoProps } from "../../types/feedbackTypes";

export default function FeedbackBloco({
  titulo,
  opcoes,
  valor,
  aoSelecionar,
}: BlocoProps) {
  return (
    <div className="bg-black border border-red-600 shadow-[0_0_15px_rgba(255,0,0,0.35)] 
                    rounded-2xl p-5 w-full max-w-md mb-6">
      <h2 className="text-lg font-semibold text-red-400 mb-3">{titulo}</h2>

      <div className="flex justify-center gap-4 text-3xl">
        {opcoes.map((emoji) => (
          <button
            key={emoji}
            onClick={() => aoSelecionar(emoji)}
            className={`p-3 rounded-2xl border-2 transition 
              ${
                valor === emoji
                  ? "border-red-500 bg-red-900/40 scale-110"
                  : "border-red-700/30 hover:bg-red-900/20"
              }`}
          >
            {emoji}
          </button>
        ))}
      </div>
    </div>
  );
}
