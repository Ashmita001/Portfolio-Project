import './App.css'
import AboutMyself from './component/AboutMyself'
import AutoScroll from './component/AutoScroll'
import Education from './component/Education'
import HeroMain from './component/HeroMain'
import NavbarMain from './component/NavbarMain'
import TechnicalSkills from './component/TechnicalSkills'
import WorkApp from './component/WorkApp'
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
    </>
  )
}

export default App
