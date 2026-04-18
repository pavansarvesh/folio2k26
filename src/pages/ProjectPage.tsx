import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TableOfContents from "../components/TableOfContents";
import { projects } from "../data/projects";

export default function ProjectPage() {
	const { slug } = useParams();

	const project = projects.find((p) => p.slug === slug);
	const description = project?.description?.trim();
	const caseStudy = project?.caseStudy;
	const summary =
		description && description.length > 0
			? description
			: caseStudy?.overview?.trim() ||
				"A short case study on the goals, decisions, and outcomes behind this project.";

	const linkEntries = project
		? (
				Object.entries(project.links) as Array<
					["github" | "demo" | "caseStudy", string | undefined]
				>
			).filter(([, href]) => Boolean(href))
		: [];

	const tocSections = [
		{ id: "overview", label: "Overview" },
		...(caseStudy?.problem?.trim()
			? [{ id: "problem", label: "Problem" }]
			: []),
		...(caseStudy?.solution?.trim()
			? [{ id: "approach", label: "Approach" }]
			: []),
		...(caseStudy?.highlights?.length
			? [{ id: "highlights", label: "Highlights" }]
			: []),
		...(caseStudy?.learnings?.length
			? [{ id: "learnings", label: "Learnings" }]
			: []),
		...(caseStudy?.nextSteps?.length
			? [{ id: "next-steps", label: "Next steps" }]
			: []),
		{ id: "tech-stack", label: "Tech stack" },
	];

	if (!project) {
		return (
			<div
				id='top'
				className='relative min-h-screen overflow-hidden bg-neutral-950 text-white'
			>
				<Navbar />

				<main className='relative mx-auto max-w-400 px-8 pb-16 pt-32 lg:px-16'>
					<div className='inline-flex items-center gap-4 font-["JetBrains_Mono",monospace] text-xs tracking-[0.3em] text-[#ff8c42]'>
						<span className='h-0.5 w-12 bg-[#ff8c42]' />
						<span>PROJECT</span>
					</div>

					<h1 className='bbh-bartle-regular mt-6 text-5xl font-medium leading-[1.02] tracking-tight text-white sm:text-6xl'>
						Project not found
					</h1>

					<p className='mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg'>
						This project doesn’t exist (or the link is wrong).
					</p>

					<div className='mt-10 flex flex-wrap items-center gap-3'>
						<Link
							to='/projects'
							className='inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800'
						>
							Back to projects
						</Link>
						<Link
							to='/'
							className='inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-orange-600'
						>
							Go home
						</Link>
					</div>
				</main>

				<div className='relative'>
					<Footer />
				</div>
			</div>
		);
	}

	return (
		<div
			id='top'
			className='relative min-h-screen overflow-hidden bg-neutral-950 text-white'
		>
			<Navbar />

			<main className='relative'>
				<header className='mx-auto max-w-400 px-8 pb-8 pt-32 lg:px-16'>
					<div className='flex flex-col gap-6'>
						<div className='flex items-center justify-between gap-4'>
							<Link
								to='/projects'
								className='text-xs tracking-widest text-white/70 hover:text-orange-500'
							>
								← BACK TO PROJECTS
							</Link>
						</div>

						<div className='inline-flex items-center gap-4 font-["JetBrains_Mono",monospace] text-xs tracking-[0.3em] text-[#ff8c42]'>
							<span className='h-0.5 w-12 bg-[#ff8c42]' />
							<span className='text-orange-500/80'>PROJECT</span>
						</div>

						<div className='space-y-3'>
							<h1 className='bbh-bartle-regular text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl'>
								{project.title}
							</h1>
							<p className='text-sm leading-6 text-white/60 sm:text-base'>
								{project.tagline}
							</p>
						</div>

						<p className='text-base leading-7 text-white/75 sm:text-lg'>
							{summary}
						</p>

						{linkEntries.length ? (
							<div className='flex flex-wrap items-center gap-x-5 gap-y-2 text-sm'>
								{linkEntries.map(([kind, href]) => {
									const label =
										kind === "github"
											? "GitHub"
											: kind === "demo"
												? "Live demo"
												: "Case study";
									const isInternal = Boolean(href && href.startsWith("/"));

									if (!href) return null;
									return isInternal ? (
										<Link
											key={kind}
											to={href}
											className='text-white/80 underline underline-offset-4 hover:text-orange-500'
										>
											{label}
										</Link>
									) : (
										<a
											key={kind}
											href={href}
											target='_blank'
											rel='noreferrer'
											className='text-white/80 underline underline-offset-4 hover:text-orange-500'
										>
											{label}
										</a>
									);
								})}
							</div>
						) : null}

						<div className='rounded-2xl border border-orange-500/15 bg-neutral-900/40 p-6 ring-1 ring-orange-500/10'>
							<TableOfContents sections={tocSections} />
						</div>
					</div>
				</header>

				<section className='mx-auto max-w-400 px-8 pb-16 lg:px-16 sm:pb-20'>
					<article className='border-t border-white/10 pt-10'>
						<div className='space-y-10 text-white/70'>
							<section id='overview' className='scroll-mt-24'>
								<h2 className='bbh-bartle-regular flex items-center gap-3 text-xl font-semibold tracking-tight text-white sm:text-2xl'>
									<span
										className='h-px w-8 bg-orange-500/60'
										aria-hidden='true'
									/>
									<span>Overview</span>
								</h2>
								<p className='mt-3 leading-8'>
									{caseStudy?.overview?.trim()
										? caseStudy.overview
										: "A short case study on the goals, decisions, and outcomes behind this project."}
								</p>
							</section>

							{caseStudy?.problem?.trim() ? (
								<section id='problem' className='scroll-mt-24'>
									<h2 className='bbh-bartle-regular flex items-center gap-3 text-xl font-semibold tracking-tight text-white sm:text-2xl'>
										<span
											className='h-px w-8 bg-orange-500/60'
											aria-hidden='true'
										/>
										<span>Problem</span>
									</h2>
									<p className='mt-3 leading-8'>{caseStudy.problem}</p>
								</section>
							) : null}

							{caseStudy?.solution?.trim() ? (
								<section id='approach' className='scroll-mt-24'>
									<h2 className='bbh-bartle-regular flex items-center gap-3 text-xl font-semibold tracking-tight text-white sm:text-2xl'>
										<span
											className='h-px w-8 bg-orange-500/60'
											aria-hidden='true'
										/>
										<span>Approach</span>
									</h2>
									<p className='mt-3 leading-8'>{caseStudy.solution}</p>
								</section>
							) : null}

							{caseStudy?.highlights?.length ? (
								<section
									id='highlights'
									className='scroll-mt-24 rounded-2xl border border-orange-500/15 bg-neutral-900/40 p-6 ring-1 ring-orange-500/10'
								>
									<h2 className='text-sm font-semibold tracking-widest text-orange-500/80'>
										HIGHLIGHTS
									</h2>
									<ul className='mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-white/70'>
										{caseStudy.highlights.map((item) => (
											<li key={item}>{item}</li>
										))}
									</ul>
								</section>
							) : null}

							{caseStudy?.learnings?.length ? (
								<section id='learnings' className='scroll-mt-24'>
									<h2 className='bbh-bartle-regular flex items-center gap-3 text-xl font-semibold tracking-tight text-white sm:text-2xl'>
										<span
											className='h-px w-8 bg-orange-500/60'
											aria-hidden='true'
										/>
										<span>Learnings</span>
									</h2>
									<ul className='mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-white/70'>
										{caseStudy.learnings.map((item) => (
											<li key={item}>{item}</li>
										))}
									</ul>
								</section>
							) : null}

							{caseStudy?.nextSteps?.length ? (
								<section id='next-steps' className='scroll-mt-24'>
									<h2 className='bbh-bartle-regular flex items-center gap-3 text-xl font-semibold tracking-tight text-white sm:text-2xl'>
										<span
											className='h-px w-8 bg-orange-500/60'
											aria-hidden='true'
										/>
										<span>Next steps</span>
									</h2>
									<ul className='mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-white/70'>
										{caseStudy.nextSteps.map((item) => (
											<li key={item}>{item}</li>
										))}
									</ul>
								</section>
							) : null}

							<section id='tech-stack' className='scroll-mt-24'>
								<h2 className='bbh-bartle-regular flex items-center gap-3 text-xl font-semibold tracking-tight text-white sm:text-2xl'>
									<span
										className='h-px w-8 bg-orange-500/60'
										aria-hidden='true'
									/>
									<span>Tech stack</span>
								</h2>
								<div className='mt-4 flex flex-wrap gap-2'>
									{project.tech.map((t) => (
										<span
											key={t}
											className='rounded bg-white/5 px-2 py-1 text-xs text-white/70'
										>
											{t}
										</span>
									))}
								</div>
							</section>
						</div>
					</article>
				</section>
			</main>

			<div className='relative'>
				<Footer />
			</div>
		</div>
	);
}
