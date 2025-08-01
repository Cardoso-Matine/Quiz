import React from "react";

const QuestionCard = ({ questionData, handleAnswer }) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg w-full max-w-md text-center">
      <h2 className="text-lg font-bold mb-4">{questionData.question}</h2>
      <div className="flex flex-col gap-2">
        {questionData.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
