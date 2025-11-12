import type { ItemFAQProps } from "../../types/itemFaq";

export default function ItemFAQ({ pergunta, resposta, ativo, onClick }: ItemFAQProps) {
  return (
    <div
      className="border border-purple-200 rounded-xl shadow-sm p-4 cursor-pointer bg-white hover:bg-pink-50 transition"
      onClick={onClick}
    >
      <h2 className="text-lg font-semibold text-purple-700 flex justify-between items-center">
        {pergunta}
        <span className="text-pink-500">{ativo ? "−" : "+"}</span>
      </h2>

      {ativo && <p className="mt-2 text-slate-600 text-sm">{resposta}</p>}
    </div>
  );
}
