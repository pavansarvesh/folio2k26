import { Link } from "react-router-dom"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-white/70">
              © {year} Pavan Sarvesh ·{" "}
              <a
                href="https://vite.dev"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 underline-offset-4 hover:text-orange-500 hover:underline"
              >
                Built with Vite
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <Link to="/about" className="text-white/70 underline-offset-4 hover:text-orange-500 hover:underline">
                About
              </Link>
              <Link to="/projects" className="text-white/70 underline-offset-4 hover:text-orange-500 hover:underline">
                Projects
              </Link>
              <Link to="/socials" className="text-white/70 underline-offset-4 hover:text-orange-500 hover:underline">
                Socials
              </Link>
              <a href="#top" className="text-white/70 underline-offset-4 hover:text-orange-500 hover:underline">
                Back to top
              </a>
            </div>
          </div>

          {/* <div className="flex items-center gap-4 text-[11px] uppercase tracking-widest text-white/60">
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
              <a href="https://amrita.town" target="_blank" rel="noreferrer" className="transition hover:text-orange-500">
                amrita.town
              </a>
              <span className="text-orange-500/60" aria-hidden="true">
                /
              </span>
              <a href="https://amrita.town/prev" target="_blank" rel="noreferrer" className="transition hover:text-orange-500">
                ← prev
              </a>
              <span className="text-orange-500/60" aria-hidden="true">
                /
              </span>
              <a href="https://amrita.town/random" target="_blank" rel="noreferrer" className="transition hover:text-orange-500">
                ⚄ random
              </a>
              <span className="text-orange-500/60" aria-hidden="true">
                /
              </span>
              <a href="https://amrita.town/next" target="_blank" rel="noreferrer" className="transition hover:text-orange-500">
                next →
              </a>
            </div>

            <span className="hidden h-px flex-1 bg-orange-500/40 sm:block" aria-hidden="true" />
          </div> */}
        </div>
      </div>
    </footer>
  )
}
