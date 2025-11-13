import type { DicaProps } from "../../types/feedbackTypes";

export default function FeedbackDica({ dica }: DicaProps) {
  return (
    <div className="bg-purple-100 text-purple-700 font-medium rounded-2xl shadow-sm p-4 max-w-md mb-8">
      💡 <span className="text-purple-800">{dica}</span>
    </div>
  );
}
