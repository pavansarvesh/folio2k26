import type { Project } from "../data/projects"

export function ProjectCard({
    title,
    tagline,
    description,
    tech,
    links,
}: Project) {
  return (
    <div className="rounded-xl border border-white/10 bg-neutral-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20">
      <h3 className="text-xl font-semibold text-orange-500">{title}</h3>
      <p className="mt-1 text-sm text-white/60">{tagline}</p>

      <p className="mt-4 text-white/80">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/50">
        {tech.map((t) => (
          <span key={t} className="rounded bg-white/5 px-2 py-1">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        {links.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-white/80 underline-offset-4 transition duration-300 hover:text-orange-500 hover:underline"
          >
            GitHub
          </a>
        )}
        {links.demo && (
          <a
            href={links.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-white/80 underline-offset-4 transition duration-300 hover:text-orange-500 hover:underline"
          >
            Live
          </a>
        )}
      </div>
    </div>
  )
}