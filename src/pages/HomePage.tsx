import Hero from '../components/Hero'
import About from '../components/SmallAbout'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import LogosMarquee from '../components/LogosMarquee'
import CodingStats from '../components/CodingStats'

const HomePage = () => {
  return (
   <div id="top" className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <Hero />
      <LogosMarquee />
      <About showKnowMore/>
      <CodingStats />
      <Footer />
    </div>
  )
}

export default HomePage