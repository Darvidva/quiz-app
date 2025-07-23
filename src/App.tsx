import NavigationWrap from './components/NavigationWrap'
import hero from './assets/hero.png'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Quiz from './components/pages/quizParts/QuizHome';
import About from './components/pages/About';



function App() {

  return (

    
    <section
    className="min-h-screen bg-cover bg-center relative"
    style={{ backgroundImage: `url(${hero})` }}
    >
      <BrowserRouter>
        <NavigationWrap />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </section>
  )
}

export default App
