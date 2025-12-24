const LogosMarquee = () => {
	const logos = [
		"/marqueeLogo/javascript.svg",
		"/marqueeLogo/ts.png",
		"/marqueeLogo/nodejs.svg",
		"/marqueeLogo/prisma.svg",
		"/marqueeLogo/reactjs.svg",
		"/marqueeLogo/solidity.svg",
		"/marqueeLogo/figma.svg",
		"/marqueeLogo/python.svg",
		"/marqueeLogo/foundry.png",
		"/marqueeLogo/rust.svg",
		"/marqueeLogo/postgresql.svg",
	];

	// Make one full "lap" long enough to avoid empty space on wide screens.
	const lap = Array.from({ length: 6 }, () => logos).flat();

	return (
		<section className='marquee relative mb-12 w-full border-y border-white/10 py-12 sm:mb-16 sm:py-16'>
			<div className='marquee-track flex items-center gap-10 sm:gap-16'>
				{lap.concat(lap).map((logo, i) => (
					<img
						key={i}
						src={logo}
						alt=''
						className='h-10 w-auto shrink-0 object-contain opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-14'
						loading={i < 10 ? "eager" : "lazy"}
						decoding='async'
						fetchPriority='low'
					/>
				))}
			</div>
			<div className='marquee-track marquee-track--reverse flex items-center gap-10 pt-8 sm:gap-16 sm:pt-10'>
				{lap.concat(lap).map((logo, i) => (
					<img
						key={i}
						src={logo}
						alt=''
						className='h-10 w-auto shrink-0 object-contain opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-14'
						loading={i < 10 ? "eager" : "lazy"}
						decoding='async'
						fetchPriority='low'
					/>
				))}
			</div>
		</section>
	);
};

export default LogosMarquee;
