export default function Rodape() {
  return (
    <footer className="bg-black text-red-500 pt-10 pb-5 mt-10 text-left border-t border-red-700 shadow-[0_-4px_12px_rgba(255,0,0,0.25)]">
      
      <div className="mb-6 px-4">
        <h3 className="text-xl font-semibold text-red-400">
          Motivagig
        </h3>
        <p className="mt-2 text-red-500">
          Conteúdos educativos e interativos para impulsionar seu aprendizado.
        </p>
        <p className="mt-1 text-red-500">
          Motivação, conhecimento e evolução contínua.
        </p>
      </div>

      <div className="mb-6 px-4">
        <h3 className="text-lg font-semibold text-red-400">
          Contato
        </h3>
        <p className="mt-2 text-red-500">(11) 1111-2222</p>
        <p className="text-red-500">(11) 91234-5678 (WhatsApp)</p>
        <p className="text-red-500">motivagig@edu.com.br</p>
      </div>

      <div className="border-t border-red-700 pt-4 text-center px-4">
        <p className="text-sm text-red-500">
          © Motivagig. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
