import { projects } from "../data/projects"
import { ProjectCard } from "../components/ProjectCard"

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="inline-flex items-center gap-3 text-xs tracking-widest text-white/70">
        <span className="h-[1px] w-10 bg-orange-500/60" />
        <span>PROJECTS</span>
      </div>

      <h1 className="bbh-bartle-regular mt-6 max-w-5xl text-5xl font-medium leading-[1.02] tracking-tight text-white sm:text-5xl">
        Projects
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
        A few things I’ve built recently — focused on clean UI, performance, and solid engineering fundamentals.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </section>
  )
}
