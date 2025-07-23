import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";


function About() {
  return (
    <div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center leading-snug">
            About Quiz App
        </h2>
        <div className='px-4 sm:px-6 md:px-16 py-12 bg-white text-gray-800 max-w-4xl mx-auto rounded-xl'>
            <span className="text-base md:text-lg mt-2 leading-relaxed text-gray-700 text-justify text-wrap">
                Quiz App is a responsive and interactive application developed using React and TypeScript, designed to help users test and grow their knowledge across various topics in a fun and accessible way. From general knowledge and science to history and art, users can choose a category and instantly begin a quiz with randomly generated multiple-choice questions. These questions are fetched in real-time from the Open Trivia DB (OpenTDB) API, ensuring a wide range of up-to-date content every time. The app offers a clean user interface, smooth transitions, and score tracking, all optimized for both mobile and desktop devices.
            </span>

            <p className="text-base md:text-lg mt-6 leading-relaxed text-gray-700 text-justify text-wrap">
                Built with Tailwind CSS for styling and powered by the Vite build tool, the Quiz App combines modern frontend technologies to deliver fast performance and a streamlined developer experience. Its component-based structure makes the app easy to maintain and scale, leaving room for future features like user authentication, quiz history, and progress tracking. Whether you're studying or just looking for a fun challenge, the Quiz App offers a simple yet effective platform for learning through play.
            </p>

            <p className="text-sm md:text-base mt-6 text-gray-800 text-center">
                This app was created by <span className="font-semibold text-blue-600">David Mbre</span>. Got feedback or ideas?
                <div className='flex flex-row justify-center items-center gap-4 mt-2'>
                    <a href="https://github.com/Darvidva" className=''>
                        <FaGithub className="w-6 h-6" />
                    </a>
                    <a href="https://x.com/darvidva_">
                        <FaXTwitter className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/david-mbre-b0a430311/">
                        <FaLinkedin className="w-6 h-6 text-blue-700" />
                    </a>
                </div>
            </p>
        </div>



    </div>
    
  )
}

export default About