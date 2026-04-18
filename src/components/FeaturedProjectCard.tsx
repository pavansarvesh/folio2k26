import type { Project } from "../data/projects";
import { Link } from "react-router-dom";

type Props = {
	project: Project;
};

export default function FeaturedProjectCard({ project }: Props) {
	return (
		<article className='rounded-2xl border border-white/10 bg-neutral-900/45 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#ff8c42]/35'>
			<Link to={`/projects/${project.slug}`}>
				<h3 className='bbh-bartle-regular text-base font-semibold text-[#ff8c42] hover:underline sm:text-xl'>
					{project.title}
				</h3>
			</Link>
			<p className='mt-1 text-sm text-white/60'>{project.tagline}</p>

			<div className='mt-4 flex flex-wrap gap-2 text-xs text-white/50'>
				{project.tech.slice(0, 3).map((tech) => (
					<span key={tech} className='rounded bg-white/5 px-2 py-1'>
						{tech}
					</span>
				))}
			</div>
		</article>
	);
}
