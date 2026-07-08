import LogoSection from './components/LogoSection'
import Navbar from './components/Navbar'
import ExperienceSection from './sections/ExperienceSection'
import FeatureCards from './sections/FeatureCards'
import Hero from './sections/Hero'
import Showcase from './sections/Showcase'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />  
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
    </>
  )
}

export default App