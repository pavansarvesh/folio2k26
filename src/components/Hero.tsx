import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<section className='relative min-h-[70vh] overflow-hidden sm:min-h-[80vh]'>
			{/* background */}
			<div className='pointer-events-none absolute inset-0'>
				<div className='absolute inset-0 bg-neutral-950' />
				<div className='absolute inset-0 opacity-95 [background-image:radial-gradient(rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:18px_18px]' />
				<div className='absolute inset-0 bg-linear-to-b from-transparent via-neutral-950/10 to-neutral-950/35' />
			</div>

			<div className='relative mx-auto flex min-h-[65vh] max-w-6xl flex-col px-6 py-16 sm:min-h-[75vh] sm:py-20'>
				<div className='flex flex-1 flex-col justify-center'>
					<div className='inline-flex items-center gap-3 text-xs tracking-widest text-white/70'>
						<span className='h-px w-10 bg-orange-500/60' />
						<span>
							STUDENT{" "}
							<span className='text-orange-500/60' aria-hidden='true'>
								/
							</span>{" "}
							DEVELOPER{" "}
							<span className='text-orange-500/60' aria-hidden='true'>
								/
							</span>{" "}
							DESIGNER
						</span>
					</div>

					<h1 className='bbh-bartle-regular mt-6 max-w-5xl text-4xl font-medium leading-[1.02] tracking-tight text-white sm:text-7xl'>
						Pavan Sarvesh
					</h1>

					<p className='mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg'>
						Undergrad @Amrita Vishwa Vidyapeetham Bangalore / Member @Team
						bi0sblr
					</p>
				</div>

				<div className='mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end'>
					<Link
						to='/projects'
						className='inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-orange-600 sm:w-auto'
					>
						VIEW PROJECTS
					</Link>
					<Link
						to='/socials'
						className='inline-flex w-full items-center justify-center rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/15 sm:w-auto'
					>
						MY SOCIALS
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Hero;
