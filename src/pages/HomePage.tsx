import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { projects } from "../data/projects";
import About from "../components/SmallAbout";
import CodingStats from "../components/CodingStats";
import LogosMarquee from "../components/LogosMarquee";
import FeaturedProjectCard from "../components/FeaturedProjectCard";
import SpotifyRecentlyPlayed from "../components/SpotifyRecentlyPlayed";

const HomePage = () => {
	const featuredProjects = projects
		.filter((project) => project.featured)
		.slice(0, 3);

	return (
		<div
			id='top'
			className='relative min-h-screen overflow-hidden bg-neutral-950 text-white'
		>
			<Navbar />

			<main className='relative'>
				<Hero />
				<div className='hidden sm:block'>
					<LogosMarquee />
				</div>
				<About showKnowMore />

				<section className='mx-auto w-full max-w-400 px-8 py-10 lg:px-16'>
					<div className='mb-5'>
						<h2 className='bbh-bartle-regular text-xl font-semibold tracking-tight text-white sm:text-3xl'>
							Live Stats
						</h2>
					</div>

					<div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6'>
						<div className='flex h-full flex-col rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 transition hover:border-neutral-700 sm:p-6'>
							<div className='mb-4 flex items-center justify-between'>
								<div className='min-w-0'>
									<h3 className='bbh-bartle-regular truncate text-base font-semibold text-white'>
										WakaTime
									</h3>
									<p className='text-xs text-neutral-500'>Coding stats</p>
								</div>
								<span className='text-xs text-neutral-500'>Last 7 days</span>
							</div>
							<div className='flex-1'>
								<CodingStats />
							</div>
						</div>

						<div className='flex h-full flex-col rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 transition hover:border-neutral-700 sm:p-6'>
							<div className='mb-4 flex items-center justify-between'>
								<div className='min-w-0'>
									<div className='flex items-center gap-2'>
										<h3 className='bbh-bartle-regular truncate text-base font-semibold text-white'>
											Spotify
										</h3>
									</div>
									<p className='text-xs text-neutral-500'>Recently played</p>
								</div>
								<span className='text-xs text-neutral-500'>
									Recently played
								</span>
							</div>
							<div className='flex-1'>
								<SpotifyRecentlyPlayed />
							</div>
						</div>
					</div>
				</section>

				<section className='mx-auto w-full max-w-400 px-8 py-10 lg:px-16'>
					<div
						className='mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'
						id='featuredProjects'
					>
						<div className='min-w-0'>
							<h2 className='bbh-bartle-regular text-xl font-semibold tracking-tight text-white sm:text-3xl'>
								Featured Work
							</h2>
						</div>

						<a
							href='/projects'
							className='shrink-0 text-xs text-white/60 underline-offset-4 transition hover:text-[#ff8c42] hover:underline sm:text-sm'
						>
							View all
						</a>
					</div>

					<div className='grid grid-cols-1 gap-6 sm:gap-8'>
						{featuredProjects.map((project) => (
							<FeaturedProjectCard key={project.slug} project={project} />
						))}
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default HomePage;
