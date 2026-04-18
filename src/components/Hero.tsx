import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const Hero = () => {
	const rootRef = useRef<HTMLElement | null>(null);

	useLayoutEffect(() => {
		if (!rootRef.current) {
			return;
		}

		const ctx = gsap.context(() => {
			gsap.set(
				[
					".hero-label",
					".hero-name-1",
					".hero-name-2",
					".hero-dot-1",
					".hero-dot-2",
					".hero-desc",
					".hero-btn",
					".hero-role",
				],
				{ opacity: 0 },
			);

			const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

			tl.fromTo(
				".hero-label",
				{ x: -52, opacity: 0 },
				{ x: 0, opacity: 1, duration: 1 },
			)
				.fromTo(
					".hero-name-1",
					{ y: 150, opacity: 0 },
					{ y: 0, opacity: 1, duration: 1.4 },
					"-=0.55",
				)
				.fromTo(
					".hero-dot-1",
					{ scale: 0, opacity: 0, transformOrigin: "center center" },
					{ scale: 1, opacity: 1, duration: 0.8, ease: "back.out(2)" },
					"-=0.35",
				)
				.fromTo(
					".hero-name-2",
					{ y: 150, opacity: 0 },
					{ y: 0, opacity: 1, duration: 1.4 },
					"-=1.05",
				)
				.fromTo(
					".hero-dot-2",
					{ scale: 0, opacity: 0, transformOrigin: "center center" },
					{ scale: 1, opacity: 0.6, duration: 0.8, ease: "back.out(2)" },
					"-=0.35",
				)
				.fromTo(
					".hero-desc",
					{ y: 30, opacity: 0 },
					{ y: 0, opacity: 1, duration: 1 },
					"-=0.7",
				)
				.fromTo(
					".hero-btn",
					{ y: 26, opacity: 0 },
					{ y: 0, opacity: 1, duration: 0.8, stagger: 0.12 },
					"-=0.55",
				)
				.fromTo(
					".hero-role",
					{ x: 30, opacity: 0 },
					{ x: 0, opacity: 1, duration: 0.8, stagger: 0.12 },
					"-=0.6",
				);

			gsap.to(".hero-orbit-a", {
				rotate: 360,
				duration: 60,
				repeat: -1,
				ease: "none",
				transformOrigin: "50% 50%",
			});

			gsap.to(".hero-orbit-b", {
				rotate: -360,
				duration: 60,
				repeat: -1,
				ease: "none",
				transformOrigin: "50% 50%",
			});
		}, rootRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={rootRef}
			className='relative min-h-screen overflow-hidden border-b border-white/5 bg-[#0d0d0d]'
		>
			<div className='pointer-events-none absolute inset-0'>
				<div className='hero-orbit-a absolute -right-24 top-8 h-125 w-125 rounded-full border border-[#ff8c42]/15 sm:h-170 sm:w-170' />
				<div className='hero-orbit-b absolute -left-10 bottom-10 h-55 w-55 rounded-full border border-[#ff8c42]/12 sm:h-90 sm:w-90' />
			</div>

			<div className='relative mx-auto flex min-h-screen w-full max-w-450 flex-col px-6 pb-16 pt-28 sm:px-8 sm:pt-36 lg:px-16 lg:pt-48'>
				<div className='hero-label mt-2 inline-flex items-center gap-4 font-["JetBrains_Mono",monospace] text-[10px] uppercase tracking-[0.3em] text-[#ff8c42] sm:gap-5 sm:text-sm'>
					<span className='h-0.5 w-16 bg-[#ff8c42]' />
					<span>CREATIVE DEVELOPER</span>
				</div>

				<div className='mt-12 flex flex-1 flex-col lg:mt-20'>
					<div>
						<div className='hero-name-1 relative inline-block font-["Playfair_Display",serif] text-[clamp(3.1rem,16vw,6rem)] font-black uppercase leading-[0.84] tracking-tight text-white sm:text-[clamp(4.4rem,12vw,12.5rem)]'>
							PAVAN
							<span className='hero-dot-1 absolute -right-4 top-[20%] h-2 w-2 rounded-full bg-[#ff8c42] sm:-right-5 sm:h-3 sm:w-3' />
						</div>
						<div className='mt-1 flex items-center gap-4 sm:gap-8 lg:ml-40'>
							<span className='hero-dot-2 h-2 w-2 rounded-full bg-[#ff8c42] sm:h-3 sm:w-3' />
							<div className='hero-name-2 font-["Playfair_Display",serif] text-[clamp(3.1rem,16vw,6rem)] font-black uppercase leading-[0.84] tracking-tight text-white sm:text-[clamp(4.4rem,12vw,12.5rem)]'>
								SARVESH
							</div>
						</div>
					</div>

					<div className='mt-12 grid grid-cols-1 gap-8 lg:mt-32 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end'>
						<div className='max-w-140'>
							<p className='hero-desc max-w-md font-["Inter",sans-serif] text-base leading-relaxed text-white/70 sm:text-lg'>
								Building exceptional digital experiences through code, design,
								and innovation.
							</p>
							<div className='mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4'>
								<Link
									to='/projects'
									className='hero-btn group inline-flex w-full items-center justify-center gap-3 rounded-md border border-[#ff8c42] bg-[#ff8c42] px-6 py-3 font-["Inter",sans-serif] text-sm font-semibold text-black transition-colors duration-200 hover:bg-white hover:text-black sm:w-auto sm:px-7 sm:py-3.5 sm:text-base'
								>
									<span>View Work</span>
									<span className='inline-flex h-5 w-5 items-center justify-center transition-transform duration-200 group-hover:translate-x-1'>
										→
									</span>
								</Link>
								<Link
									to='/socials'
									className='hero-btn inline-flex w-full items-center justify-center rounded-md border border-white/20 px-6 py-3 font-["Inter",sans-serif] text-sm font-semibold text-white transition-colors duration-200 hover:border-[#ff8c42]/60 hover:bg-[#ff8c42]/10 hover:text-[#ff8c42] sm:w-auto sm:px-7 sm:py-3.5 sm:text-base'
								>
									Contact
								</Link>
							</div>
						</div>

						<div className='flex flex-col justify-end pb-2 lg:items-end'>
							<div className='w-full max-w-none space-y-2 border-t border-white/10 pt-5 font-["Inter",sans-serif] text-left text-sm sm:space-y-4 sm:pt-6 sm:text-right sm:text-base lg:max-w-55 lg:text-lg'>
								<div className='hero-role flex items-center justify-start gap-3 text-white/60 sm:justify-end'>
									<span>Student</span>
									<span className='h-1.5 w-1.5 rounded-full bg-white/30' />
								</div>
								<div className='hero-role flex items-center justify-start gap-3 font-semibold text-[#ff8c42] sm:justify-end'>
									<span>Designer</span>
									<span className='h-1.5 w-1.5 rounded-full bg-[#ff8c42]' />
								</div>
								<div className='hero-role flex items-center justify-start gap-3 text-white/60 sm:justify-end'>
									<span>Developer</span>
									<span className='h-1.5 w-1.5 rounded-full bg-white/30' />
								</div>
							</div>
							<p className='hero-role mt-5 border-t border-white/10 pt-4 font-["JetBrains_Mono",monospace] text-[10px] tracking-[0.22em] text-white/40 sm:mt-7 sm:pt-5 sm:text-xs sm:text-right'>
								BANGALORE, IN
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
