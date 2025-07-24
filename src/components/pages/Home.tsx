import SplitText from '../ui/SplitText'
import DecryptedText from '../ui/DecryptedText'
import { useNavigate } from "react-router-dom";

function Home() {
const navigate = useNavigate();

  return (
      <div className='flex flex-col items-center justify-center text-center min-h-screen px-4'>
        
        <SplitText
          text="Challenge Your Mind"
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center leading-relaxed break-words max-w-[90%] mx-auto"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
        />

        <SplitText
          text="Prove You are the Smartest"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-4 leading-relaxed break-words max-w-[90%] mx-auto"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
        />

        <DecryptedText
          text="Join our quiz app and test your knowledge across various topics."
          speed={100}
          maxIterations={20}
          className="revealed text-base sm:text-lg md:text-xl text-gray-700 mt-6 text-center max-w-[90%] mx-auto break-words"
          parentClassName="all-letters"
          encryptedClassName="encrypted"
        />


        <button 
        onClick={() => navigate("/quiz")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full px-8 mt-8 transition duration-300 ease-in-out transform hover:scale-105">
          Start Quiz
        </button>

      </div>
  )
}

export default Home