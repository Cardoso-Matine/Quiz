import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import questions from "../data/questions";
import QuestionCard from "../components/QuestionCard";

export default function QuizPage() {
  const router = useRouter();
  const { level } = router.query;

  const [questionsLevel, setQuestionsLevel] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    if (level === "2") setQuestionsLevel(questions.level2);
    else if (level === "3") setQuestionsLevel(questions.level3);
    else setQuestionsLevel(questions.level1);
  }, [level]);

  const handleAnswer = (option) => {
    const updatedAnswers = [
      ...answers,
      {
        question: questionsLevel[currentQuestion].question,
        chosen: option,
        correct: questionsLevel[currentQuestion].answer,
      },
    ];
    setAnswers(updatedAnswers);

    if (option === questionsLevel[currentQuestion].answer) {
      setScore(score + 1);
    }

    const next = currentQuestion + 1;
    if (next < questionsLevel.length) {
      setCurrentQuestion(next);
    } else {
      router.push({
        pathname: "/result",
        query: {
          score:
            score + (option === questionsLevel[currentQuestion].answer ? 1 : 0),
          answers: JSON.stringify(updatedAnswers),
        },
      });
    }
  };

  if (questionsLevel.length === 0) return <p>Loading questions...</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <QuestionCard
        questionData={questionsLevel[currentQuestion]}
        handleAnswer={handleAnswer}
      />
      <p className="mt-4">
        Question {currentQuestion + 1} of {questionsLevel.length}
      </p>
    </div>
  );
}
