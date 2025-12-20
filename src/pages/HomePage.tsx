import Hero from '../components/Hero'
import About from '../components/About'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import LogosMarquee from '../components/LogosMarquee'

const HomePage = () => {
  return (
   <div id="top" className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <Hero />
      <LogosMarquee />
      <About />
      <Footer />
    </div>
  )
}

export default HomePage