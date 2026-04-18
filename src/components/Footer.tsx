import { Link } from "react-router-dom";

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className='border-t border-white/10'>
			<div className='mx-auto max-w-400 px-8 py-8 text-sm lg:px-16 max-[639px]:py-5 max-[639px]:text-[10px]'>
				<div className='flex flex-col gap-4 max-[639px]:gap-3'>
					<div className='flex flex-row items-center justify-between gap-4 max-[639px]:flex-col max-[639px]:items-start max-[639px]:gap-3'>
						<div className='text-white/70'>
							<span className='text-[#ff8c42]/90'>© {year} Pavan Sarvesh</span>{" "}
							·{" "}
							<a
								href='https://vite.dev'
								target='_blank'
								rel='noreferrer'
								className='text-white/70 underline-offset-4 hover:text-[#ff8c42] hover:underline'
							>
								Built with Vite
							</a>
						</div>

						<div className='flex flex-wrap items-center gap-6 max-[639px]:w-full max-[639px]:justify-between max-[639px]:gap-3'>
							<Link
								to='/about'
								className='whitespace-nowrap text-white/70 underline-offset-4 hover:text-[#ff8c42] hover:underline'
							>
								About
							</Link>
							<Link
								to='/projects'
								className='whitespace-nowrap text-white/70 underline-offset-4 hover:text-[#ff8c42] hover:underline'
							>
								Projects
							</Link>
							<Link
								to='/socials'
								className='whitespace-nowrap text-white/70 underline-offset-4 hover:text-[#ff8c42] hover:underline'
							>
								Socials
							</Link>
							<a
								href='#top'
								className='whitespace-nowrap text-white/70 underline-offset-4 hover:text-[#ff8c42] hover:underline'
							>
								Back to top
							</a>
						</div>
					</div>

					<div className='flex items-center gap-4 font-["JetBrains_Mono",monospace] text-[11px] uppercase tracking-widest text-white/60 max-[639px]:w-full max-[639px]:justify-between max-[639px]:text-[10px]'>
						<div className='flex flex-wrap items-center gap-x-3 gap-y-2 max-[639px]:flex-1 max-[639px]:justify-between max-[639px]:gap-3 max-[639px]:whitespace-nowrap'>
							<a
								href='https://amrita.town'
								target='_blank'
								rel='noreferrer'
								className='transition hover:text-[#ff8c42]'
							>
								amrita.town
							</a>
							<span className='text-[#ff8c42]/60' aria-hidden='true'>
								/
							</span>
							<a
								href='https://amrita.town/prev'
								target='_blank'
								rel='noreferrer'
								className='transition hover:text-[#ff8c42]'
							>
								← prev
							</a>
							<span className='text-[#ff8c42]/60' aria-hidden='true'>
								/
							</span>
							<a
								href='https://amrita.town/random'
								target='_blank'
								rel='noreferrer'
								className='transition hover:text-[#ff8c42]'
							>
								⚄ random
							</a>
							<span className='text-[#ff8c42]/60' aria-hidden='true'>
								/
							</span>
							<a
								href='https://amrita.town/next'
								target='_blank'
								rel='noreferrer'
								className='transition hover:text-[#ff8c42]'
							>
								next →
							</a>
						</div>

						<span
							className='hidden h-px flex-1 bg-[#ff8c42]/40 sm:block'
							aria-hidden='true'
						/>
					</div>
				</div>
			</div>
		</footer>
	);
}
