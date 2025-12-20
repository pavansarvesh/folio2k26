import { Link } from "react-router-dom"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="text-white/70">© {year} Pavan Sarvesh</div>

        <div className="flex flex-wrap items-center gap-6">
          <Link to="/#about" className="text-white/70 hover:text-orange-500 hover:underline underline-offset-4">
            About
          </Link>
          <Link to="/projects" className="text-white/70 hover:text-orange-500 hover:underline underline-offset-4">
            Projects
          </Link>
          <Link to="/connect" className="text-white/70 hover:text-orange-500 hover:underline underline-offset-4">
            Connect
          </Link>
          <a href="#top" className="text-white/70 hover:text-orange-500 hover:underline underline-offset-4">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
