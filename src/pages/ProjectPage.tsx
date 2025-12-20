import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Projects from "../sections/Projects"

export default function ProjectsPage() {
  return (
    <div id="top" className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      <Navbar />

      <main className="relative">
        <Projects />
      </main>

      <Footer />
    </div>
  )
}