

type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

const ResultModal = ({
  isOpen,
  score,
  totalQuestions,
  questions,
  userAnswers,
  onClose,
}: {
  isOpen: boolean
  score: number
  totalQuestions: number
  questions: Question[]
  userAnswers: (string | null)[]
  onClose: () => void
}) => {
  if (!isOpen) return null

  const missedQuestions = questions.filter((_, index) => 
    userAnswers[index] !== questions[index].correctAnswer
  );

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/10 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-md w-[90%] max-w-2xl max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">🎉 Quiz Completed!</h2>
        
        {/* Score Summary */}
        <div className="text-center mb-6">
          <div className="mb-4">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {Math.round((score / totalQuestions) * 100)}%
            </div>
            <p className="text-lg">
              You scored <span className="font-bold text-blue-600">{score}</span> out of{" "}
              <span className="font-bold">{totalQuestions}</span>
            </p>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
            <div 
              className="bg-blue-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(score / totalQuestions) * 100}%` }}
            ></div>
          </div>
          
          <p className="text-sm text-gray-600">
            {score === totalQuestions ? "Perfect score! 🎯" : 
             score >= totalQuestions * 0.8 ? "Great job! 👍" :
             score >= totalQuestions * 0.6 ? "Good effort! 💪" : "Keep practicing! 📚"}
          </p>
        </div>

        {/* Review Section */}
        {missedQuestions.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-red-600">
              📝 Review Your Answers ({missedQuestions.length} missed)
            </h3>
            <div className="space-y-4">
              {questions.map((question, index) => {
                const userAnswer = userAnswers[index];
                const isCorrect = userAnswer === question.correctAnswer;
                
                if (isCorrect) return null; // Skip correct answers
                
                return (
                  <div key={index} className="border border-red-200 rounded-lg p-4 bg-red-50">
                    <p className="font-medium text-gray-800 mb-2">
                      <span className="text-red-600">Q{index + 1}:</span> {question.question}
                    </p>
                    
                    <div className="space-y-1">
                      {question.options.map((option) => (
                        <div
                          key={option}
                          className={`px-3 py-1 rounded text-sm ${
                            option === question.correctAnswer
                              ? "bg-green-100 text-green-800 border border-green-300"
                              : option === userAnswer
                              ? "bg-red-100 text-red-800 border border-red-300"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {option}
                          {option === question.correctAnswer && " ✓"}
                          {option === userAnswer && option !== question.correctAnswer && " ✗"}
                        </div>
                      ))}
                    </div>
                    
                    <p className="text-sm text-gray-600 mt-2">
                      <span className="font-medium">Your answer:</span> {userAnswer || "Not answered"}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-center gap-3">
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultModal
