export default function LoadingScreen() {
	return (
		<div className='relative min-h-screen overflow-hidden bg-[#0d0d0d] text-white'>
			<div className='pointer-events-none absolute inset-0'>
				<div className='absolute -right-24 top-10 h-110 w-110 rounded-full border border-[#ff8c42]/12 sm:h-150 sm:w-150' />
				<div className='absolute -left-12 bottom-10 h-55 w-55 rounded-full border border-[#ff8c42]/10 sm:h-90 sm:w-90' />
				<div className='absolute left-[52%] top-[30%] h-2.5 w-2.5 rounded-full bg-[#ff8c42]' />
			</div>

			<div className='relative mx-auto flex min-h-screen w-full max-w-400 flex-col justify-center px-8 lg:px-16'>
				<div className='inline-flex items-center gap-4 font-["JetBrains_Mono",monospace] text-xs tracking-[0.3em] text-[#ff8c42]'>
					<span className='h-0.5 w-12 bg-[#ff8c42]' />
					<span>LOADING</span>
				</div>

				<div className='mt-8 font-["Playfair_Display",serif] text-[clamp(3.5rem,10vw,9rem)] font-black uppercase leading-[0.86] tracking-tight text-white'>
					<span className='block'>PAVAN</span>
					<span className='block sm:ml-24'>SARVESH</span>
				</div>

				<div className='mt-8 flex items-center gap-2'>
					<span className='h-1.5 w-10 rounded-full bg-[#ff8c42] animate-pulse' />
					<span className='h-1.5 w-8 rounded-full bg-white/35 animate-pulse [animation-delay:150ms]' />
					<span className='h-1.5 w-6 rounded-full bg-white/20 animate-pulse [animation-delay:300ms]' />
				</div>

				<p className='mt-5 font-["Inter",sans-serif] text-sm text-white/60 sm:text-base'>
					Building exceptional digital experiences...
				</p>
			</div>
		</div>
	);
}
