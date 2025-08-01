import { useRouter } from "next/router";
import Link from "next/link";

export default function ResultPage() {
  const router = useRouter();
  const { score } = router.query;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Resultado do Quiz</h1>
      <p className="text-xl mb-6">Você acertou {score} perguntas!</p>
      <Link href="/">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
          Voltar ao Início
        </button>
      </Link>
    </div>
  );
}
