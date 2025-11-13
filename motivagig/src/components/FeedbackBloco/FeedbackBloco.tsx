import type { BlocoProps } from "../../types/feedbackTypes";

export default function FeedbackBloco({
  titulo,
  opcoes,
  valor,
  aoSelecionar,
}: BlocoProps) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 w-full max-w-md mb-6">
      <h2 className="text-lg font-semibold text-purple-700 mb-3">{titulo}</h2>
      <div className="flex justify-center gap-4 text-3xl">
        {opcoes.map((emoji) => (
          <button
            key={emoji}
            onClick={() => aoSelecionar(emoji)}
            className={`p-3 rounded-2xl border-2 transition ${
              valor === emoji
                ? "border-purple-600 bg-purple-100 scale-110"
                : "border-transparent hover:bg-pink-50"
            }`}
          >
            {emoji}
          </button>
        ))}
      </div>
    </div>
  );
}
