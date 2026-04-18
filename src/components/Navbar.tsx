import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const rootRef = useRef<HTMLElement | null>(null);

	useLayoutEffect(() => {
		if (!rootRef.current) {
			return;
		}

		const ctx = gsap.context(() => {
			gsap.fromTo(
				".nav-anim",
				{ opacity: 0, y: -28 },
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: "power3.out",
					stagger: 0.1,
					delay: 0.12,
				},
			);
		}, rootRef);

		return () => ctx.revert();
	}, []);

	const desktopLinkClass = ({ isActive }: { isActive: boolean }) =>
		[
			"font-['JetBrains_Mono'] text-sm uppercase tracking-[0.06em] transition-colors duration-200",
			isActive ? "text-[#ff8c42]" : "text-white/60 hover:text-[#ff8c42]",
		].join(" ");

	const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
		isActive
			? "rounded-xl bg-white/5 px-3 py-2 font-['JetBrains_Mono'] text-[#ff8c42]"
			: "rounded-xl px-3 py-2 font-['JetBrains_Mono'] text-white/75 hover:bg-white/5 hover:text-[#ff8c42]";

	return (
		<header
			ref={rootRef}
			className='fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0d0d0d]/80 backdrop-blur-xl'
		>
			<div className='relative mx-auto flex w-full max-w-400 items-center justify-between px-8 py-6 lg:px-0'>
				<a href='/'>
					<div className="nav-anim font-['Playfair_Display',serif] text-3xl font-black leading-none tracking-tight text-white">
						PS
					</div>
				</a>

				<nav className='ml-auto hidden items-center justify-end gap-12 sm:flex'>
					<NavLink
						to='/projects'
						className={(props) => `nav-anim ${desktopLinkClass(props)}`}
					>
						Work
					</NavLink>
					<NavLink
						to='/about'
						end
						className={(props) => `nav-anim ${desktopLinkClass(props)}`}
					>
						About
					</NavLink>
					<NavLink
						to='/socials'
						className={(props) => `nav-anim ${desktopLinkClass(props)}`}
					>
						Contact
					</NavLink>
					<NavLink
						to='/resume'
						className="nav-anim rounded-md bg-[#ff8c42] px-4 py-2 font-['Inter'] text-sm font-semibold text-black transition-colors hover:bg-[#fb923c]"
					>
						Resume
					</NavLink>
				</nav>

				<div className='flex items-center gap-3'>
					<button
						type='button'
						className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 font-['JetBrains_Mono'] text-xs font-medium text-white hover:bg-white/10 sm:hidden"
						aria-expanded={mobileMenuOpen}
						aria-controls='mobile-nav'
						onClick={() => setMobileMenuOpen((prev) => !prev)}
					>
						MENU
					</button>
				</div>

				<div
					id='mobile-nav'
					className={
						mobileMenuOpen
							? "absolute left-0 right-0 top-full mt-3 rounded-2xl border border-white/10 bg-[#0d0d0d]/95 p-4 backdrop-blur sm:hidden"
							: "hidden"
					}
				>
					<div className='grid gap-2 text-sm'>
						<NavLink
							to='/projects'
							className={mobileLinkClass}
							onClick={() => setMobileMenuOpen(false)}
						>
							Work
						</NavLink>
						<NavLink
							to='/about'
							end
							className={mobileLinkClass}
							onClick={() => setMobileMenuOpen(false)}
						>
							About
						</NavLink>
						<NavLink
							to='/socials'
							className={mobileLinkClass}
							onClick={() => setMobileMenuOpen(false)}
						>
							Contact
						</NavLink>
						<NavLink
							to='/resume'
							className="rounded-xl bg-[#ff8c42] px-3 py-2 font-['Inter'] font-semibold text-black hover:bg-[#fb923c]"
							onClick={() => setMobileMenuOpen(false)}
						>
							Resume
						</NavLink>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
