import React, { useEffect, useState } from "react";

type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

type QuizModalProps = {
  isQuizOpen: boolean;
  onClose: () => void;
};

const mockQuestions: Question[] = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: "Who wrote 'Macbeth'?",
    options: ["Shakespeare", "Tolstoy", "Achebe", "Homer"],
    correctAnswer: "Shakespeare",
  },
  {
    question: "What is 9 × 9?",
    options: ["72", "81", "90", "99"],
    correctAnswer: "81",
  },
  {
    question: "Which gas do plants absorb?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correctAnswer: "Carbon Dioxide",
  },
];

const QuizModal: React.FC<QuizModalProps> = ({ isQuizOpen, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(
    Array(mockQuestions.length).fill(null)
  );
  const [timeLeft, setTimeLeft] = useState(300);

  useEffect(() => {
    if (!isQuizOpen) return;
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const interval = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timeLeft, isQuizOpen]);

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${s % 60 < 10 ? "0" : ""}${s % 60}`;

  const handleSelect = (option: string) => {
    const updated = [...selectedAnswers];
    updated[currentQuestion] = option;
    setSelectedAnswers(updated);
  };

  const handleSubmit = () => {
    alert("Quiz submitted!");
    onClose();
  };

  const handleQuit = () => {
    if (confirm("Are you sure you want to quit the quiz? Your progress will be lost.")) {
      onClose();
    }
  };

  if (!isQuizOpen) return null;

  const q = mockQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / mockQuestions.length) * 100;

  return (
    <div className="fixed inset-0 backdrop-blur-md bg-black/30 flex items-center justify-center z-50 px-4">
      <div className="bg-white p-6 rounded-2xl w-full max-w-xl shadow-xl transition-all duration-300 ease-in-out relative">
        {/* Timer and progress */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">⏱ {formatTime(timeLeft)}</span>
            <span className="text-sm text-gray-500">
              Question {currentQuestion + 1} of {mockQuestions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <p className="text-gray-900 font-medium text-lg mb-4">{q.question}</p>

        {/* Options */}
        <div className="grid gap-3 mb-6">
          {q.options.map((opt) => (
            <button
              key={opt}
              onClick={() => handleSelect(opt)}
              className={`w-full text-left px-4 py-2 rounded-lg border transition ${
                selectedAnswers[currentQuestion] === opt
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mb-4">
          <button
            onClick={handleQuit}
            className="text-red-500 hover:text-red-700 text-sm font-semibold px-5 py-2 rounded-full border-2 border-red-500"
          >
            Quit Quiz
          </button>

          <div className="flex justify-end ">
            <button
              onClick={() => setCurrentQuestion((prev) => prev - 1)}
              disabled={currentQuestion === 0}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-5 py-2 rounded-full disabled:opacity-40"
            >
              Prev
            </button>

            {currentQuestion === mockQuestions.length - 1 ? (
              <button
                onClick={handleSubmit}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-full"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={() => setCurrentQuestion((prev) => prev + 1)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-full"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizModal;
