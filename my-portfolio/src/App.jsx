import './App.css'
import AboutMyself from './component/AboutMyself'
import AutoScroll from './component/AutoScroll'
import ContactSection from './component/ContactSection'
import Education from './component/Education'
import HeroMain from './component/HeroMain'
import NavbarMain from './component/NavbarMain'
import TechnicalSkills from './component/TechnicalSkills'
import WorkApp from './component/WorkApp'
import WorkGraphic from './component/WorkGraphic'
import WorkWeb from './component/WorkWeb'

function App() {

  return (
    <>
      <NavbarMain/>
      <HeroMain/>
      <AboutMyself/>
      <AutoScroll/>
      <Education/>
      <TechnicalSkills/>
      <WorkWeb/>
      <WorkApp/>
      <WorkGraphic/>
      <ContactSection/>
    </>
  )
}

export default App
