import type { Project } from "../data/projects";
import { Link } from "react-router-dom";

type Props = {
	project: Project;
};

export default function FeaturedProjectCard({ project }: Props) {
	const demoHref = project.links.demo;
	const eyebrow = project.tech.slice(0, 2).join(" / ").toUpperCase();
	const previewHref = demoHref || "/";

	return (
		<article className='group overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/70 p-5 transition duration-300 hover:border-[#ff8c42]/35 sm:p-7'>
			<div className='grid items-start gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8'>
				<div className='min-w-0'>
					<p className='font-["JetBrains_Mono",monospace] text-xs tracking-[0.24em] text-[#ff8c42]'>
						{eyebrow}
					</p>

					<Link to={`/projects/${project.slug}`}>
						<h3 className='mt-3 font-["Space_Grotesk",sans-serif] text-2xl font-bold tracking-tight text-white transition group-hover:text-[#ff8c42] sm:text-3xl lg:text-4xl'>
							{project.title}
						</h3>
					</Link>

					<p className='mt-3 text-lg text-white/65 sm:text-xl'>
						{project.tagline}
					</p>
					<p className='mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base'>
						{project.description}
					</p>

					<div className='mt-6 flex flex-wrap gap-2.5'>
						{project.tech.slice(0, 4).map((tech) => (
							<span
								key={tech}
								className='rounded-full border border-white/10 bg-white/5 px-3 py-1 font-["JetBrains_Mono",monospace] text-[11px] tracking-[0.14em] text-white/65'
							>
								{tech}
							</span>
						))}
					</div>

					<div className='mt-8 flex flex-wrap items-center gap-4'>
						<Link
							to={`/projects/${project.slug}`}
							className='inline-flex items-center rounded-md border border-[#ff8c42] bg-[#ff8c42] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white'
						>
							View Project
						</Link>
						{demoHref ? (
							<a
								href={demoHref}
								target={demoHref.startsWith("http") ? "_blank" : undefined}
								rel={demoHref.startsWith("http") ? "noreferrer" : undefined}
								className='inline-flex items-center rounded-md border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-[#ff8c42]/60 hover:bg-[#ff8c42]/10 hover:text-[#ff8c42]'
							>
								Open Site
							</a>
						) : null}
					</div>
				</div>

				<div className='hidden lg:block overflow-hidden rounded-2xl'>
					<div className='w-full overflow-hidden'>
						<div
							className='relative h-auto w-full overflow-hidden'
							style={{ aspectRatio: "16 / 9" }}
						>
							<div className='pointer-events-none absolute left-1/2 top-0 h-225 w-360 origin-top -translate-x-1/2 scale-50'>
								<iframe
									src={previewHref}
									title={`${project.title} preview`}
									loading='lazy'
									scrolling='no'
									referrerPolicy='no-referrer'
									className='h-full w-full border-0 bg-white'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}
