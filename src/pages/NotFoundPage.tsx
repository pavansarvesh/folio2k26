import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function NotFoundPage() {
  return (
    <div id="top" className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-neutral-950" />
        <div className="absolute inset-0 opacity-95 [background-image:radial-gradient(rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/10 to-neutral-950/35" />
      </div>

      <Navbar />

      <main className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-6 py-16 sm:py-20">
        <div className="inline-flex items-center gap-3 text-xs tracking-widest text-white/70">
          <span className="h-[1px] w-10 bg-orange-500/60" />
          <span>404</span>
        </div>

        <h1 className="bbh-bartle-regular mt-6 max-w-5xl text-5xl font-medium leading-[1.02] tracking-tight text-white sm:text-7xl">
          Page not found
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
          The page you’re looking for doesn’t exist or the link is wrong or I am still working on it.
        </p>

        <div className="mt-10 flex items-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-orange-600"
          >
            GO HOME
          </Link>
          <Link
            to="/connect"
            className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/15"
          >
            CONNECT
          </Link>
        </div>
      </main>

      <div className="relative">
        <Footer />
      </div>
    </div>
  )
}
