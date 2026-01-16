import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const desktopLinkClass = ({ isActive }: { isActive: boolean }) =>
		isActive ? "text-orange-500" : "text-white/80 hover:text-white";

	const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
		isActive
			? "rounded-xl bg-white/5 px-3 py-2 text-orange-500"
			: "rounded-xl px-3 py-2 text-white/80 hover:bg-white/5 hover:text-white";

	const socialsPillClass = ({ isActive }: { isActive: boolean }) =>
		isActive
			? "hidden rounded-full bg-orange-500 px-4 py-2 text-xs font-medium text-white sm:inline-flex"
			: "hidden rounded-full bg-white px-4 py-2 text-xs font-medium text-neutral-900 hover:bg-white/90 sm:inline-flex";

	return (
		<header className='sticky top-0 z-50 border-b border-white/10 bg-neutral-950'>
			<div className='relative mx-auto flex items-center justify-between px-6 py-4 text-sm sm:px-10 lg:px-20'>
				<a href='/'>
					<h1 className='bbh-bartle-regular max-w-5xl text-xl font-medium leading-[1.02] tracking-tight text-white transition-colors duration-200 ease-out sm:text-xl hover:text-orange-500'>
						PS
					</h1>
				</a>

				<nav className='absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 sm:flex'>
					<NavLink to='/about' end className={desktopLinkClass}>
						ABOUT
					</NavLink>
					<NavLink to='/projects' className={desktopLinkClass}>
						PROJECTS
					</NavLink>
					<NavLink to='/blogs' className={desktopLinkClass}>
						BLOGS
					</NavLink>
				</nav>

				<div className='flex items-center gap-3'>
					<button
						type='button'
						className='inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white hover:bg-white/15 sm:hidden'
						aria-expanded={mobileMenuOpen}
						aria-controls='mobile-nav'
						onClick={() => setMobileMenuOpen((prev) => !prev)}
					>
						MENU
					</button>
					<NavLink
						to='/resume'
						className='hidden rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white hover:bg-white/15 sm:inline-flex'
					>
						RESUME
					</NavLink>
					<NavLink to='/socials' end className={socialsPillClass}>
						SOCIALS
					</NavLink>
				</div>

				<div
					id='mobile-nav'
					className={
						mobileMenuOpen
							? "absolute left-6 right-6 top-full mt-3 rounded-2xl border border-white/10 bg-neutral-950/95 p-4 backdrop-blur sm:hidden"
							: "hidden"
					}
				>
					<div className='grid gap-2 text-sm'>
						<NavLink
							to='/about'
							end
							className={mobileLinkClass}
							onClick={() => setMobileMenuOpen(false)}
						>
							ABOUT
						</NavLink>
						<NavLink
							to='/projects'
							className={mobileLinkClass}
							onClick={() => setMobileMenuOpen(false)}
						>
							PROJECTS
						</NavLink>
						<NavLink
							to='/blogs'
							className={mobileLinkClass}
							onClick={() => setMobileMenuOpen(false)}
						>
							BLOGS
						</NavLink>
						<NavLink
							to='/socials'
							end
							className={mobileLinkClass}
							onClick={() => setMobileMenuOpen(false)}
						>
							SOCIALS
						</NavLink>
						<NavLink
							to='/resume'
							className='rounded-xl px-3 py-2 text-white/80 hover:bg-white/5 hover:text-white'
							onClick={() => setMobileMenuOpen(false)}
						>
							RESUME
						</NavLink>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
