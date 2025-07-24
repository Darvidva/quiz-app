type PreQuizModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  category: string | null;
  difficulty: string | null;
};

const PreQuizModal: React.FC<PreQuizModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  category,
  difficulty,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/10 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md w-[90%] max-w-md">
        <h2 className="text-xl font-bold mb-4">Ready to start?</h2>
        <p className="mb-2">Category: <strong>{category}</strong></p>
        <p className="mb-4">Difficulty: <strong>{difficulty}</strong></p>

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
            Cancel
          </button>
          <button onClick={onConfirm} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreQuizModal;
