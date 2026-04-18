import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
export default function ProjectsPage() {
	return (
		<div
			id='top'
			className='relative min-h-screen overflow-hidden bg-neutral-950 text-white'
		>
			<Navbar />

			<main className='relative'>
				<section className='mx-auto max-w-400 px-8 pb-16 pt-32 lg:px-16'>
					<div className='inline-flex items-center gap-4 font-["JetBrains_Mono",monospace] text-xs tracking-[0.3em] text-[#ff8c42]'>
						<span className='h-0.5 w-12 bg-[#ff8c42]' />
						<span>PROJECTS</span>
					</div>

					<h1 className='bbh-bartle-regular mt-6 max-w-5xl wrap-break-word text-3xl font-medium leading-[1.02] tracking-tight text-white sm:text-4xl lg:text-5xl'>
						Projects
					</h1>

					<p className='mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:mt-6 sm:text-base lg:text-lg'>
						A few things I’ve built recently — focused on clean UI, performance,
						and solid engineering fundamentals.
					</p>

					<div className='mt-8 grid gap-6 md:grid-cols-2 lg:mt-10 lg:gap-8'>
						{projects.map((project) => (
							<ProjectCard key={project.slug} {...project} />
						))}
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}
