import { Link } from "react-router-dom"

const Hero = () => {
	return (
		<section className="relative min-h-[80vh] overflow-hidden">
			{/* background */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-neutral-950" />
				<div className="absolute inset-0 opacity-95 [background-image:radial-gradient(rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:18px_18px]" />
				<div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/10 to-neutral-950/35" />
			</div>

			<div className="relative mx-auto flex min-h-[75vh] max-w-6xl flex-col px-6 py-16 sm:py-20">
				<div className="flex flex-1 flex-col justify-center">
					<div className="inline-flex items-center gap-3 text-xs tracking-widest text-white/70">
						<span className="h-[1px] w-10 bg-orange-500/60" />
						<span>STUDENT / DEVELOPER / DESIGNER</span>
					</div>

					<h1 className="bbh-bartle-regular mt-6 max-w-5xl text-5xl font-medium leading-[1.02] tracking-tight text-white sm:text-7xl">
						Pavan Sarvesh
					</h1>

					<p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
						Undergrad @Amrita Vishwa Vidyapeetham Bangalore / Member @Team bi0sblr
					</p>
				</div>

				<div className="mt-10 flex items-center justify-end gap-3">
					<Link
						to="/projects"
						className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-orange-600"
					>
						VIEW PROJECTS
					</Link>
					<Link
						to="/socials"
						className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/15"
					>
						MY SOCIALS
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Hero
