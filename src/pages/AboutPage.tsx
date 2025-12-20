import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="inline-flex items-center gap-3 text-xs tracking-widest text-white/70">
          <span className="h-[1px] w-10 bg-orange-500/60" />
          <span>ABOUT</span>
        </div>

        <h1 className="bbh-bartle-regular mt-6 max-w-5xl text-5xl font-medium leading-[1.02] tracking-tight text-white sm:text-6xl">
          About ME
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          I’m a computer science student at Amrita Vishwa Vidyapeetham, Bangalore, focused on building decentralized solutions
          that redefine trust and transparency. I enjoy working across the stack—from smart contracts and protocol tooling to
          clean, modern UIs.
        </p>

        <section className="mt-12">
          <h2 className="text-sm font-medium tracking-widest text-white/80">METHODOLOGY</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm font-medium text-white">Think in Systems</div>
              <p className="mt-2 text-sm leading-6 text-white/70">
                I start with first principles: threat model, trust assumptions, and the “why” behind each feature—then pick
                the simplest design that holds up.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm font-medium text-white">Build, Measure, Iterate</div>
              <p className="mt-2 text-sm leading-6 text-white/70">
                I ship small slices end-to-end, validate quickly, and refine. Clean interfaces, clear state, and strong
                fundamentals over cleverness.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm font-medium text-white">Security & Efficiency</div>
              <p className="mt-2 text-sm leading-6 text-white/70">
                I aim for secure-by-default code: careful edge cases, readable logic, and (when it’s on-chain) gas-aware
                implementations.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-sm font-medium tracking-widest text-white/80">TOOLKIT</h2>
          <p className="mt-3 text-sm leading-6 text-white/70">
            Python, JavaScript/TypeScript (React/Next.js), Solidity, C/C++, PostgreSQL.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-sm font-medium tracking-widest text-white/80">BEYOND TECH</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-white/70">
            I’m also a car enthusiast—always curious about engineering trade-offs, performance, and where EVs and combustion
            are heading.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage