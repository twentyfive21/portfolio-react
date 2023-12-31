import './App.css'
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import Skills from './components/Skills/Skills'
import Work from './components/Work/Work'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Contact from './components/Contact/Contact'



function App() {
  return (
    <div>
      <Header />
      <Intro id='home-section' />
      <Skills />
      <Work id='work-section' />
      <About id='about-section' />
      <Contact id='contact-section' />
      <Footer />
    </div>
  )
}

export default App
