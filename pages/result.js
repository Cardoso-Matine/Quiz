import { useRouter } from "next/router";
import Link from "next/link";

export default function ResultPage() {
  const router = useRouter();
  const { score, answers } = router.query;
  const parsedAnswers = answers ? JSON.parse(answers) : [];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Quiz Results</h1>
      <p className="text-xl mb-6">You answered {score} questions correctly!</p>

      <h2 className="text-lg font-semibold mb-2">Review your answers:</h2>
      <ul className="mt-4 w-full max-w-lg bg-white p-4 rounded shadow">
        {parsedAnswers.map((item, index) => (
          <li key={index} className="mb-3 border-b pb-2">
            <strong>{item.question}</strong><br />
            <span>Your answer: {item.chosen}</span><br />
            <span className={item.chosen === item.correct ? "text-green-600" : "text-red-600"}>
              Correct answer: {item.correct}
            </span>
          </li>
        ))}
      </ul>

      <Link href="/">
        <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
