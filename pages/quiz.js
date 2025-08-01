import { useState } from "react";
import { useRouter } from "next/router";
import questions from "../data/questions";
import QuestionCard from "../components/QuestionCard";

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      router.push(`/result?score=${score + (option === questions[currentQuestion].answer ? 1 : 0)}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <QuestionCard
        questionData={questions[currentQuestion]}
        handleAnswer={handleAnswer}
      />
      <p className="mt-4">
        Pergunta {currentQuestion + 1} de {questions.length}
      </p>
    </div>
  );
}
