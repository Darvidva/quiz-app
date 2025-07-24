import React from "react";

type CategoryCardProps = {
  image: string;
  title: string;
  description: string;
  onStart: () => void;
  selectedDifficulty: string | null;
  setSelectedDifficulty: (level: string) => void;
};

const CategoryCard: React.FC<CategoryCardProps> = ({
  image,
  title,
  description,
  onStart,
  selectedDifficulty,
  setSelectedDifficulty
}: CategoryCardProps) => {

  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl cursor-pointer transition duration-300 w-full">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
      <h2 className="text-xl text-center font-semibold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-600 mt-2 text-center">{description}</p>
      <div className="flex justify-center gap-2 mt-4">
        {["Easy", "Medium", "Hard"].map((level) => {
          const isActive = selectedDifficulty === level.toLowerCase();

          return (
            <span
              key={level}
              onClick={() => setSelectedDifficulty(level.toLowerCase())}
              className={`px-3 py-1 text-sm rounded-full cursor-pointer transition-colors
                ${isActive 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 text-gray-700 hover:bg-blue-100"
                }`}
            >
              {level}
            </span>
          );
        })}
      </div>

      <button
        onClick={onStart}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default CategoryCard;
