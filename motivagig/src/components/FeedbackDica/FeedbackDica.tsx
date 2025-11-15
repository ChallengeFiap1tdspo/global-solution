import type { DicaProps } from "../../types/feedbackTypes";

export default function FeedbackDica({ dica }: DicaProps) {
  return (
    <div
      className="bg-black border border-red-600 
                 shadow-[0_0_12px_rgba(255,0,0,0.35)]
                 text-red-400 font-medium rounded-2xl 
                 p-4 max-w-md mb-8 flex items-center gap-2"
    >
      <span className="text-red-500 text-xl"></span>
      <span>{dica}</span>
    </div>
  );
}
