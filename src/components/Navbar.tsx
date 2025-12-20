import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm">
        <div className="font-semibold tracking-tight">P</div>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 sm:flex">
          <Link to="/#about" className="text-white/80 hover:text-white">
            ABOUT
          </Link>
          <Link to="/projects" className="text-white/80 hover:text-white">
            PROJECTS
          </Link>
          <Link to="/#blog" className="text-white/80 hover:text-white">
            BLOG
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/#resume"
            className="hidden rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white hover:bg-white/15 sm:inline-flex"
          >
            DOWNLOAD RESUME
          </Link>
          <Link
            to="/connect"
            className="rounded-full bg-white px-4 py-2 text-xs font-medium text-neutral-900 hover:bg-white/90"
          >
            CONNECT WITH ME
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar