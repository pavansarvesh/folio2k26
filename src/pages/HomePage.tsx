import Hero from '../components/Hero'
import About from '../components/SmallAbout'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import LogosMarquee from '../components/LogosMarquee'
import CodingStats from '../components/CodingStats'
import SpotifyRecentlyPlayed from '../components/SpotifyRecentlyPlayed'

const HomePage = () => {
  return (
   <div id="top" className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <Hero />
      <LogosMarquee />
      <About showKnowMore/>

      <section className="mx-auto w-full max-w-6xl px-4 py-10">
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
      <Footer />
    </div>
  )
}

export default HomePage