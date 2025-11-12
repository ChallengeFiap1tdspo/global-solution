import { useState } from "react";

export default function Feedback() {
  const [humor, setHumor] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-purple-50 p-6">
      <h1 className="text-3xl font-bold text-purple-700">Seu feedback de hoje</h1>
      <p className="mt-2 text-pink-600">Como você está se sentindo hoje?</p>

      <div className="mt-8 flex gap-4">
        {["😊", "😐", "😔"].map((emoji) => (
          <button
            key={emoji}
            onClick={() => setHumor(emoji)}
            className={`text-3xl p-4 rounded-2xl border-2 transition ${
              humor === emoji
                ? "border-purple-600 bg-purple-100"
                : "border-transparent hover:bg-purple-50"
            }`}
          >
            {emoji}
          </button>
        ))}
      </div>

      <textarea
        placeholder="Quer desabafar ou comentar algo?"
        className="mt-8 w-full max-w-md h-28 p-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-300"
      ></textarea>

      <button className="mt-6 px-8 py-3 bg-purple-600 text-white font-semibold rounded-2xl hover:bg-pink-500 transition">
        Enviar feedback
      </button>
    </div>
  );
}
