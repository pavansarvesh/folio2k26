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
				<section className='mx-auto max-w-5xl px-6 py-12 sm:py-16 lg:max-w-6xl lg:py-20'>
					<div className='inline-flex items-center gap-3 text-xs tracking-widest text-white/70'>
						<span className='h-px w-10 bg-orange-500/60' />
						<span>PROJECTS</span>
					</div>

					<h1 className='bbh-bartle-regular mt-6 max-w-5xl break-words text-3xl font-medium leading-[1.02] tracking-tight text-white sm:text-4xl lg:text-5xl'>
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
