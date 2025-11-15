import type { ItemFAQProps } from "../../types/itemFaq";

export default function ItemFAQ({ pergunta, resposta, ativo, onClick }: ItemFAQProps) {
  return (
    <div
      onClick={onClick}
      className="border border-red-600 rounded-xl p-4 cursor-pointer 
                 bg-black transition shadow-[0_0_12px_rgba(255,0,0,0.3)]"
    >
      <h2 className="text-lg font-semibold text-red-400 flex justify-between items-center">
        {pergunta}
        <span className="text-red-500">{ativo ? "−" : "+"}</span>
      </h2>

      {ativo && (
        <p className="mt-2 text-gray-300 text-sm">
          {resposta}
        </p>
      )}
    </div>
  );
}
