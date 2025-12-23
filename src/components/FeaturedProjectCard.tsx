import type { Project } from "../data/projects";

type Props = {
    project: Project
}

export default function FeaturedProjectCard({project} : Props){
    return (
    <article className="rounded-xl border border-white/10 bg-neutral-900 p-5 transition duration-300 hover:-translate-y-1 hover:border-orange-500/30">
      <h3 className=" text-base font-semibold text-orange-500">
        {project.title}
      </h3>

      <p className="mt-1 text-sm text-white/60">
        {project.tagline}
      </p>

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/50">
        {project.tech.slice(0, 3).map((tech) => (
          <span key={tech} className="rounded bg-white/5 px-2 py-1">
            {tech}
          </span>
        ))}
      </div>
    </article>
  )
}