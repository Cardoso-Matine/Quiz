import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-4">
      <h1 className="text-3xl font-bold mb-6">Quiz de Conhecimentos Gerais</h1>
      <Link href="/quiz?level=1"><button className="bg-green-500 text-white px-6 py-3 rounded-lg">Nível 1</button></Link>
      <Link href="/quiz?level=2"><button className="bg-yellow-500 text-white px-6 py-3 rounded-lg">Nível 2</button></Link>
      <Link href="/quiz?level=3"><button className="bg-red-500 text-white px-6 py-3 rounded-lg">Nível 3</button></Link>
    </div>
  );
}
