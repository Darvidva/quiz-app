import { useState } from 'react'
import CategoryCard from './CategoryCard'
import PreQuizModal from './PreQuizModal'
import science from '../../../assets/science.jpg'
import General from '../../../assets/General Knowledge.jpg'
import film from '../../../assets/film.jpg'
import sport from '../../../assets/sport.jpg'
import geography from '../../../assets/geography.jpg'
import history from '../../../assets/history.jpg'
import art from '../../../assets/art.jpg'

function QuizHome() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDifficulty, setselectedDifficulty] = useState<{ [category: string]: string | null }>({})
  
  const handleStartQuiz = () => {
  console.log("Start Quiz:", selectedCategory, selectedDifficulty)
  setIsOpen(false)
}


  return (
    <div>
        <h3 className="text-2xl md:text-3xl font-extrabold text-center leading-snug">
          Choose a Quiz Category
        </h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 p-3'>
          <CategoryCard
            image={science}
            title="Science & Nature"
            description="Explore questions about physics, biology, and more."
            onStart={() => {
              setSelectedCategory("Science & Nature")
              setIsOpen(true)
            }}
            selectedDifficulty={selectedDifficulty["Science & Nature"] || null}
            setSelectedDifficulty={(level) =>
              setselectedDifficulty((prev) => ({
                ...prev,
                ["Science & Nature"]: level,
              }))
            }
          />

          <CategoryCard
            image={General}
            title="General Knowledge"
            description="Test your knowledge on a wide range of topics."
            onStart={() => {
              setSelectedCategory("General Knowledge")
              setIsOpen(true)
            }}
            selectedDifficulty={selectedDifficulty["General Knowledge"] || null}
            setSelectedDifficulty={(level) =>
              setselectedDifficulty((prev) => ({
                ...prev,
                ["General Knowledge"]: level,
              }))
            }
          />


          <CategoryCard
            image={sport}
            title="Sports"
            description="Test your knowledge on various sports and events."
            onStart={() => {
              setSelectedCategory("Sport")
              setIsOpen(true)
          }}
          selectedDifficulty={selectedDifficulty["Sport"] || null}
            setSelectedDifficulty={(level) =>
              setselectedDifficulty((prev) => ({
                ...prev,
                ["Sport"]: level,
              }))
            }
          />

          <CategoryCard
            image={film}
            title="Entertainment: Film"
            description="Dive into the world of actors, iconic scenes, and movie trivia."
            onStart={() => {
              setSelectedCategory("Entertainment: Film");
              setIsOpen(true);
          }}
          selectedDifficulty={selectedDifficulty["Entertainment: Film"] || null}
            setSelectedDifficulty={(level) =>
              setselectedDifficulty((prev) => ({
                ...prev,
                ["Entertainment: Film"]: level,
              }))
            }
          />

          <CategoryCard
            image={history}
            title="History"
            description="Dive into questions about world events, ancient civilizations, revolutions, and famous leaders."
            onStart={() => {
              setSelectedCategory("History")
              setIsOpen(true)
          }}
          selectedDifficulty={selectedDifficulty["History"] || null}
            setSelectedDifficulty={(level) =>
              setselectedDifficulty((prev) => ({
                ...prev,
                ["History"]: level,
              }))
            }
          />

         <CategoryCard
          image={geography}
          title="Geography"
          description="Test your knowledge of countries, capitals, landmarks, maps, and global geography facts."
          onStart={() => {
              setSelectedCategory("Geography")
              setIsOpen(true)
          }}
          selectedDifficulty={selectedDifficulty["Geography"] || null}
            setSelectedDifficulty={(level) =>
              setselectedDifficulty((prev) => ({
                ...prev,
                ["Geography"]: level,
              }))
            }
          />

        <CategoryCard
          image={art}
          title="Art"
          description="Dive into questions about famous artists, art history, styles, and iconic works of art."
          onStart={() => {
              setSelectedCategory("Art")
              setIsOpen(true)
          }}
          selectedDifficulty={selectedDifficulty["Art"] || null}
            setSelectedDifficulty={(level) =>
              setselectedDifficulty((prev) => ({
                ...prev,
                ["Art"]: level,
              }))
            }
          />

        <PreQuizModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onConfirm={handleStartQuiz}
          category={selectedCategory}
          difficulty={selectedDifficulty[selectedCategory ?? ""] || null}

        />


        </div>
    </div>
  )
}

export default QuizHome