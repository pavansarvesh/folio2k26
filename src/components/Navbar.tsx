import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className='sticky top-0 z-50 border-b border-white/10 bg-neutral-950'>
			<div className='relative mx-auto flex items-center justify-between px-6 py-4 text-sm sm:px-10 lg:px-20'>
				<a href='/'>
					<h1 className='bbh-bartle-regular max-w-5xl text-xl font-medium leading-[1.02] tracking-tight text-white transition-colors duration-200 ease-out sm:text-xl hover:text-orange-500'>
						PS
					</h1>
				</a>

				<nav className='absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 sm:flex'>
					<Link to='/about' className='text-white/80 hover:text-white'>
						ABOUT
					</Link>
					<Link to='/projects' className='text-white/80 hover:text-white'>
						PROJECTS
					</Link>
					<Link to='/blog' className='text-white/80 hover:text-white'>
						BLOG
					</Link>
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
					<a
						href='/PavanResume.pdf'
						download
						className='hidden rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white hover:bg-white/15 sm:inline-flex'
					>
						DOWNLOAD RESUME
					</a>
					<Link
						to='/socials'
						className='hidden rounded-full bg-white px-4 py-2 text-xs font-medium text-neutral-900 hover:bg-white/90 sm:inline-flex'
					>
						SOCIALS
					</Link>
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
						<Link
							to='/about'
							className='rounded-xl px-3 py-2 text-white/80 hover:bg-white/5 hover:text-white'
							onClick={() => setMobileMenuOpen(false)}
						>
							ABOUT
						</Link>
						<Link
							to='/projects'
							className='rounded-xl px-3 py-2 text-white/80 hover:bg-white/5 hover:text-white'
							onClick={() => setMobileMenuOpen(false)}
						>
							PROJECTS
						</Link>
						<Link
							to='/blog'
							className='rounded-xl px-3 py-2 text-white/80 hover:bg-white/5 hover:text-white'
							onClick={() => setMobileMenuOpen(false)}
						>
							BLOG
						</Link>
						<Link
							to='/socials'
							className='rounded-xl px-3 py-2 text-white/80 hover:bg-white/5 hover:text-white'
							onClick={() => setMobileMenuOpen(false)}
						>
							SOCIALS
						</Link>
						<a
							href='/PavanResume.pdf'
							download
							className='rounded-xl px-3 py-2 text-white/80 hover:bg-white/5 hover:text-white'
							onClick={() => setMobileMenuOpen(false)}
						>
							DOWNLOAD RESUME
						</a>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
