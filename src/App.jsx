import LogoSection from './components/LogoSection'
import Navbar from './components/Navbar'
import ExperienceSection from './sections/ExperienceSection'
import FeatureCards from './sections/FeatureCards'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Showcase from './sections/Showcase'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase /> 
      <ExperienceSection />
      <FeatureCards />
      <LogoSection />
      <Footer/>
    </>
  )
}

export default App