import React, { useEffect, useState } from "react";
import ResultModal from "./ResultModal";

type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

type QuizModalProps = {
  isQuizOpen: boolean;
  onClose: () => void;
  category: string | null;
  difficulty: string | null;
};

// Category to API category mapping
const categoryMapping: { [key: string]: number } = {
  "General Knowledge": 9,
  "Science & Nature": 17,
  "Sport": 21,
  "Entertainment: Film": 11,
  "History": 23,
  "Geography": 22,
  "Art": 25,
};

// Difficulty configuration
const getDifficultyConfig = (difficulty: string | null) => {
  switch (difficulty) {
    case "easy":
      return { questionCount: 10, timeLimit: 120 }; // 2 minutes
    case "medium":
      return { questionCount: 15, timeLimit: 300 }; // 5 minutes
    case "hard":
      return { questionCount: 20, timeLimit: 300 }; // 5 minutes
    default:
      return { questionCount: 15, timeLimit: 300 }; // Default: 15 questions, 5 minutes
  }
};

const QuizModal: React.FC<QuizModalProps> = ({ isQuizOpen, onClose, category, difficulty }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(300);
  const [score, setScore] = useState<number>(0);
  const [showResultModal, setShowResultModal] = useState<boolean>(false);

  const difficultyConfig = getDifficultyConfig(difficulty);

  // Fetch questions from Open Trivia DB with fallback difficulty
  const fetchQuestions = async () => {
    if (!category) {
      setLoading(false);
      return;
    }
    
    setLoading(true);
    try {
      const categoryId = categoryMapping[category];
      console.log(categoryId);
      
      if (!categoryId) {
        console.error('Invalid category:', category);
        setLoading(false);
        return;
      }
      
      // Try different difficulty levels if the requested one fails
      const difficultiesToTry = [difficulty || 'medium', 'easy', 'hard', null];
      
      for (const diff of difficultiesToTry) {
        const difficultyParam = diff ? `&difficulty=${diff}` : '';
        const apiUrl = `https://opentdb.com/api.php?amount=${difficultyConfig.questionCount}&category=${categoryId}${difficultyParam}&type=multiple`;
        console.log(`Trying API URL: ${apiUrl}`);

        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('API Response data:', data);
        console.log('Response code:', data.response_code);
        console.log('Results length:', data.results?.length);
        
        if (data.response_code === 0 && data.results && data.results.length > 0) {
          const formattedQuestions: Question[] = data.results.map((q: any) => ({
            question: q.question,
            options: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5),
            correctAnswer: q.correct_answer,
          }));
          
          console.log(`Success! Found ${formattedQuestions.length} questions with difficulty: ${diff || 'any'}`);
          setQuestions(formattedQuestions);
          setSelectedAnswers(Array(formattedQuestions.length).fill(null));
          setTimeLeft(difficultyConfig.timeLimit);
          return; // Success, exit the function
        } else {
          console.log(`No results for difficulty: ${diff || 'any'}`);
        }
      }
      
            // If all difficulties failed, use fallback questions
      console.log('All difficulty levels failed, using fallback questions');
      const fallbackQuestions: Question[] = [
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
      
      setQuestions(fallbackQuestions);
      setSelectedAnswers(Array(fallbackQuestions.length).fill(null));
      setTimeLeft(difficultyConfig.timeLimit);
    } catch (error) {
      console.error('Error fetching questions:', error);
      
      // Fallback to mock questions if API call fails
      console.log('Using fallback questions due to error');
      const fallbackQuestions: Question[] = [
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
      
      setQuestions(fallbackQuestions);
      setSelectedAnswers(Array(fallbackQuestions.length).fill(null));
      setTimeLeft(difficultyConfig.timeLimit);
    } finally {
      setLoading(false);
    }
  };

  // Reset quiz state when quiz closes
  useEffect(() => {
    if (!isQuizOpen) {
      setCurrentQuestion(0);
      setSelectedAnswers([]);
      setScore(0);
      setShowResultModal(false);
      setQuestions([]);
      setTimeLeft(300);
    }
  }, [isQuizOpen]);

  // Fetch questions when quiz opens
  useEffect(() => {
    if (isQuizOpen && category) {
      fetchQuestions();
    }
  }, [isQuizOpen, category, difficulty]);

  const handleSubmit = () => {
    let finalScore = 0;

    selectedAnswers.forEach((answer, i) => {
      if (answer === questions[i]?.correctAnswer) {
        finalScore += 1;
      }
    });

    setScore(finalScore);
    setShowResultModal(true);
  }

  useEffect(() => {
    if (!isQuizOpen) return;
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const interval = setInterval(() => setTimeLeft((t) => t - 1), 1000)
    return () => clearInterval(interval)
  }, [timeLeft, isQuizOpen])

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${s % 60 < 10 ? "0" : ""}${s % 60}`

  const handleSelect = (option: string) => {
    const updated = [...selectedAnswers];
    updated[currentQuestion] = option;
    setSelectedAnswers(updated);
  }


  const handleQuit = () => {
    if (confirm("Are you sure you want to quit the quiz? Your progress will be lost.")) {
      onClose()
    }
  }

  if (!isQuizOpen) return null;

  if (loading || questions.length === 0) {
    return (
      <div className="fixed inset-0 backdrop-blur-md bg-black/30 flex items-center justify-center z-50 px-4">
        <div className="bg-white p-6 rounded-2xl w-full max-w-xl shadow-xl">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading questions...</p>
          </div>
        </div>
      </div>
    );
  }

  const q = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="fixed inset-0 backdrop-blur-md bg-black/30 flex items-center justify-center z-50 px-4">
      <div className="bg-white p-6 rounded-2xl w-full max-w-xl shadow-xl transition-all duration-300 ease-in-out relative">
        {/* Timer and progress */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">⏱ {formatTime(timeLeft)}</span>
            <span className="text-sm text-gray-500">
              Question {currentQuestion + 1} of {questions.length}
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

            {currentQuestion === questions.length - 1 ? (
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
      
      <ResultModal 
        isOpen={showResultModal}
        score={score}
        totalQuestions={questions.length}
        questions={questions}
        userAnswers={selectedAnswers}
        onClose={() => {
          setShowResultModal(false);
          // Reset all quiz state when result modal closes
          setCurrentQuestion(0);
          setSelectedAnswers([]);
          setScore(0);
          setQuestions([]);
          setTimeLeft(300);
          onClose();
        }}
      />
    </div>
  );
};

export default QuizModal;
