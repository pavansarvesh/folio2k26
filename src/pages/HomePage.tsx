import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { projects } from '../data/projects'
import About from '../components/SmallAbout'
import CodingStats from '../components/CodingStats'
import LogosMarquee from '../components/LogosMarquee'
import FeaturedProjectCard from '../components/FeaturedProjectCard'
import SpotifyRecentlyPlayed from '../components/SpotifyRecentlyPlayed'

const HomePage = () => {
  const featuredProjects = projects.filter(
    (project) => project.featured
  ).slice(0,3)
  // console.log(featuredProjects)

  return (
   <div id="top" className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      <Navbar />

      <main className="relative">
        <Hero />
        <LogosMarquee />
        <About showKnowMore/>

        <section className="mx-auto w-full max-w-6xl px-6 py-10 sm:py-12">
          <div className="mb-5">
            <h2 className="bbh-bartle-regular text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Live Stats
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex h-full flex-col rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 transition hover:border-neutral-700">
              <div className="mb-4 flex items-center justify-between">
                <div className="min-w-0">
                  <h3 className="bbh-bartle-regular truncate text-base font-semibold text-white">
                    WakaTime
                  </h3>
                  <p className="text-xs text-neutral-500">Coding stats</p>
                </div>
                <span className="text-xs text-neutral-500">Last 7 days</span>
              </div>
              <div className="flex-1">
                <CodingStats />
              </div>
            </div>

            <div className="flex h-full flex-col rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 transition hover:border-neutral-700">
              <div className="mb-4 flex items-center justify-between">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="bbh-bartle-regular truncate text-base font-semibold text-white">
                      Spotify
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-500">Recently played</p>
                </div>
                <span className="text-xs text-neutral-500">Recently played</span>
              </div>
              <div className="flex-1">
                <SpotifyRecentlyPlayed />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 py-10 sm:py-12">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0">
              <h2 className="bbh-bartle-regular text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Featured Projects
              </h2>
              {/* <p className="mt-1 text-sm text-white/60">My top projects</p> */}
            </div>

            <a
              href="/projects"
              className="shrink-0 text-sm text-white/60 underline-offset-4 transition hover:text-orange-500 hover:underline"
            >
              View all
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <FeaturedProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default HomePage