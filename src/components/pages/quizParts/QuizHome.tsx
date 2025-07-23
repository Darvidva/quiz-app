import science from '../../../assets/science.jpg'
import General from '../../../assets/General Knowledge.jpg'
import film from '../../../assets/film.jpg'
import sport from '../../../assets/sport.jpg'
import geography from '../../../assets/geography.jpg'
import history from '../../../assets/history.jpg'
import art from '../../../assets/art.jpg'

function QuizHome() {
  return (
    <div>
        <h3 className="text-2xl md:text-3xl font-extrabold text-center leading-snug">
          Choose a Quiz Category
        </h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 p-3'>
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl cursor-pointer transition duration-300 w-full">
            <img src={science} alt="Science" className="w-full h-40 md:h-40 object-cover rounded-md mb-4" />
            <h2 className="text-xl text-center font-semibold text-gray-800">Science & Nature</h2>
            <p className="text-sm text-gray-600 mt-2 text-center">Explore questions about physics, biology, and more.</p>
            <div className="flex justify-center gap-2 mt-4">
              <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700 cursor-pointer hover:bg-blue-100">
                Easy
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700 cursor-pointer hover:bg-blue-100">
                Medium
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700 cursor-pointer hover:bg-blue-100">
                Hard
              </span>
            </div>
              <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Start Quiz
              </button>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl cursor-pointer transition duration-300 w-full p-6">
            <img src={General} alt="General Knowledge" className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-xl text-center font-semibold text-gray-800">General Knowledge</h2>
            <p className="text-sm text-gray-600 mt-2 text-center">Explore questions about physics, biology, and more.</p>
            <div className="flex justify-center gap-2 mt-4">
              <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700 cursor-pointer hover:bg-blue-100">
                Easy
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700 cursor-pointer hover:bg-blue-100">
                Medium
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700 cursor-pointer hover:bg-blue-100">
                Hard
              </span>
            </div>
              <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Start Quiz
              </button>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl cursor-pointer transition duration-300 w-full">
            <img src={film} alt="Film" className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-xl text-center font-semibold text-gray-800">Entertainment: Film</h2>
            <p className="text-sm text-gray-600 mt-2 text-center">Explore questions about physics, biology, and more.</p>
            <div className="flex justify-center gap-2 mt-4">
              <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700 cursor-pointer hover:bg-blue-100">
                Easy
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700 cursor-pointer hover:bg-blue-100">
                Medium
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700 cursor-pointer hover:bg-blue-100">
                Hard
              </span>
            </div>
              <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Start Quiz
              </button>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl cursor-pointer transition duration-300 w-full">
            <img src={sport} alt="Sport" className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-xl text-center font-semibold text-gray-800">Sports</h2>
            <p className="text-sm text-gray-600 mt-2 text-center">Explore questions about physics, biology, and more.</p>
            <div className="flex justify-center gap-2 mt-4">
              <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700 cursor-pointer hover:bg-blue-100">
                Easy
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700 cursor-pointer hover:bg-blue-100">
                Medium
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700 cursor-pointer hover:bg-blue-100">
                Hard
              </span>
            </div>
              <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Start Quiz
              </button>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl cursor-pointer transition duration-300 w-full">
            <img src={history} alt="History" className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-xl text-center font-semibold text-gray-800">History</h2>
            <p className="text-sm text-gray-600 mt-2 text-center">Explore questions about physics, biology, and more.</p>
            <div className="flex justify-center gap-2 mt-4">
              <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700 cursor-pointer hover:bg-blue-100">
                Easy
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700 cursor-pointer hover:bg-blue-100">
                Medium
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700 cursor-pointer hover:bg-blue-100">
                Hard
              </span>
            </div>
              <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Start Quiz
              </button>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl cursor-pointer transition duration-300 w-full">
            <img src={geography} alt="Geography" className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-xl text-center font-semibold text-gray-800">Geography</h2>
            <p className="text-sm text-gray-600 mt-2 text-center">Explore questions about physics, biology, and more.</p>
            <div className="flex justify-center gap-2 mt-4">
              <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700 cursor-pointer hover:bg-blue-100">
                Easy
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700 cursor-pointer hover:bg-blue-100">
                Medium
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700 cursor-pointer hover:bg-blue-100">
                Hard
              </span>
            </div>
              <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Start Quiz
              </button>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl cursor-pointer transition duration-300 w-full">
            <img src={art} alt="art" className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-xl text-center font-semibold text-gray-800">Art</h2>
            <p className="text-sm text-gray-600 mt-2 text-center">Explore questions about physics, biology, and more.</p>
            <div className="flex justify-center gap-2 mt-4">
              <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700 cursor-pointer hover:bg-blue-100">
                Easy
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700 cursor-pointer hover:bg-blue-100">
                Medium
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700 cursor-pointer hover:bg-blue-100">
                Hard
              </span>
            </div>
              <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Start Quiz
              </button>
          </div>

        </div>
    </div>
  )
}

export default QuizHome