import type { Project } from "../data/projects";
import { Link } from "react-router-dom";

export function ProjectCard({
	slug,
	title,
	tagline,
	description,
	tech,
	links,
}: Project) {
	return (
		<div className='rounded-2xl border border-white/10 bg-neutral-900/45 p-4 transition duration-300 hover:-translate-y-1 hover:border-[#ff8c42]/40 sm:p-6'>
			<Link to={`/projects/${slug}`}>
				<h3 className='bbh-bartle-regular text-lg font-semibold text-[#ff8c42] hover:underline sm:text-2xl'>
					{title}
				</h3>
			</Link>
			<p className='mt-1 text-sm text-white/60'>{tagline}</p>

			<p className='mt-3 text-sm text-white/80 sm:mt-4 sm:text-base'>
				{description}
			</p>

			<div className='mt-4 flex flex-wrap gap-2 text-xs text-white/50'>
				{tech.map((t) => (
					<span key={t} className='rounded bg-white/5 px-2 py-1'>
						{t}
					</span>
				))}
			</div>

			<div className='mt-5 flex flex-wrap gap-4 text-sm sm:mt-6'>
				{links.github && (
					<a
						href={links.github}
						target='_blank'
						rel='noreferrer'
						className='inline-flex items-center text-white/80 underline-offset-4 transition duration-300 hover:text-[#ff8c42] hover:underline'
					>
						GitHub
					</a>
				)}
				{links.demo && (
					<a
						href={links.demo}
						target='_blank'
						rel='noreferrer'
						className='inline-flex items-center text-white/80 underline-offset-4 transition duration-300 hover:text-[#ff8c42] hover:underline'
					>
						Live
					</a>
				)}
			</div>
		</div>
	);
}
