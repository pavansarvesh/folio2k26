import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function NotFoundPage() {
	return (
		<div
			id='top'
			className='relative min-h-screen overflow-hidden bg-[#0d0d0d] text-white'
		>
			<div className='pointer-events-none absolute inset-0'>
				<div className='absolute -right-24 top-10 h-110 w-110 rounded-full border border-[#ff8c42]/12 sm:h-150 sm:w-150' />
				<div className='absolute -left-12 bottom-10 h-55 w-55 rounded-full border border-[#ff8c42]/10 sm:h-90 sm:w-90' />
				<div className='absolute left-[48%] top-[35%] h-2.5 w-2.5 rounded-full bg-[#ff8c42]' />
			</div>

			<Navbar />

			<main className='relative mx-auto flex min-h-[85vh] max-w-400 flex-col justify-center px-8 pb-16 pt-32 lg:px-16'>
				<div className='inline-flex items-center gap-4 font-["JetBrains_Mono",monospace] text-xs tracking-[0.3em] text-[#ff8c42]'>
					<span className='h-0.5 w-12 bg-[#ff8c42]' />
					<span>PAGE NOT FOUND</span>
				</div>

				<div className='mt-8 font-["Playfair_Display",serif] text-[clamp(4.2rem,12vw,12rem)] font-black uppercase leading-[0.85] tracking-tight text-white'>
					<div className='relative inline-block'>
						404
						<span className='absolute -right-3 top-[28%] h-2.5 w-2.5 rounded-full bg-[#ff8c42]' />
					</div>
					<div className='sm:ml-20'>MISSING</div>
				</div>

				<p className='mt-6 max-w-xl font-["Inter",sans-serif] text-base leading-8 text-white/70 sm:text-lg'>
					This page is out of bounds. Let’s get you back to the main build and
					keep exploring.
				</p>

				<div className='mt-10 flex flex-wrap items-center gap-3'>
					<Link
						to='/'
						className='inline-flex items-center justify-center rounded-md border border-[#ff8c42] bg-[#ff8c42] px-6 py-3 font-["Inter",sans-serif] text-sm font-semibold text-black transition-colors hover:bg-white'
					>
						Go Home
					</Link>
					<Link
						to='/contacts'
						className='inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 font-["Inter",sans-serif] text-sm font-semibold text-white transition-colors hover:border-[#ff8c42]/60 hover:bg-[#ff8c42]/10 hover:text-[#ff8c42]'
					>
						Contacts
					</Link>
				</div>
			</main>

			<div className='relative'>
				<Footer />
			</div>
		</div>
	);
}
