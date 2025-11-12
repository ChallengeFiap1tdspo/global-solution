import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <h1 className="text-5xl font-bold text-purple-600">404</h1>
      <p className="mt-3 text-pink-500 text-lg">
        Oops! Página não encontrada.
      </p>

      <Link
        to="/"
        className="mt-5 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-pink-500 transition-colors"
      >
        Voltar para Home
      </Link>
    </div>
  );
}
