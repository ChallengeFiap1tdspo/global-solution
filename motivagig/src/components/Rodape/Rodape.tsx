export default function Rodape() {
  return (
    <footer className="bg-purple-600 text-white pt-10 pb-5 mt-10 text-left">
      <div className="mb-6 px-4">
        <h3 className="text-xl font-semibold text-pink-200">
          Motivagig
        </h3>
        <p className="mt-2 text-pink-100">
          Conteúdos educativos e interativos para impulsionar seu aprendizado.
        </p>
        <p className="mt-1 text-pink-100">
          Motivação, conhecimento e evolução contínua.
        </p>
      </div>

      <div className="mb-6 px-4">
        <h3 className="text-lg font-semibold text-pink-200">
          Contato
        </h3>
        <p className="mt-2 text-pink-100">(11) 1111-2222</p>
        <p className="text-pink-100">(11) 91234-5678 (WhatsApp)</p>
        <p className="text-pink-100">motivagig@edu.com.br</p>
      </div>

      <div className="border-t border-white/30 pt-4 text-center px-4">
        <p className="text-sm text-pink-100">
          © Motivagig. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
