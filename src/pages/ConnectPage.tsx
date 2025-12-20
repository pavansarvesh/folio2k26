import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function ConnectPage() {
  return (
    <div id="top" className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-neutral-950" />
        <div className="absolute inset-0 opacity-95 [background-image:radial-gradient(rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/10 to-neutral-950/35" />
      </div>

      <Navbar />

      <main className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="inline-flex items-center gap-3 text-xs tracking-widest text-white/70">
          <span className="h-[1px] w-10 bg-orange-500/60" />
          <span>CONNECT</span>
        </div>

        <h1 className="bbh-bartle-regular mt-6 max-w-5xl text-5xl font-medium leading-[1.02] tracking-tight text-white sm:text-7xl">
          Connect
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
          Want to collaborate or have an opportunity? Send me a message and I’ll get back to you.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-orange-600"
          >
            EMAIL ME
          </a>
          <a
            href="https://github.com/yourname"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/15"
          >
            GITHUB
          </a>
        </div>
      </main>

      <div className="relative">
        <Footer />
      </div>
    </div>
  )
}
