import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Quiz de Conhecimentos Gerais</h1>
      <Link href="/quiz">
        <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
          Iniciar Quiz
        </button>
      </Link>
    </div>
  );
}
