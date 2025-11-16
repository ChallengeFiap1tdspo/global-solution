import type { CursoType } from "../../types/cursoTypes";

const MOCK: CursoType[] = [
  {
    id: 1,
    titulo: "React Avançado",
    ativo: true,
    duracaoHoras: 12,
    descricao: "Curso completo sobre hooks, context e otimização."
  },
];

export default function CursoLista() {
  return (
    <div>
      {MOCK.map((c) => (
        <div key={c.id} className="p-4 border mb-2 rounded">
          <h3 className="text-xl font-semibold">{c.titulo}</h3>
          <p>{c.descricao}</p>
          <a href={`/curso/${c.id}`} className="text-blue-500 underline hover:opacity-70">
            Ver
          </a>
        </div>
      ))}
    </div>
  );
}
