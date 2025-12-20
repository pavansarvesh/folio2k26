const LogosMarquee = () => {
	const logos = [
  "/logo/javascript.svg",
  "/logo/ts.png",
  "/logo/nodejs.svg",
  "/logo/prisma.svg",
  "/logo/reactjs.svg",
  "/logo/solidity.svg",
  "/logo/figma.svg",
  "/logo/python.svg",
  "/logo/foundry.png",
  "/logo/rust.svg",
  "/logo/postgresql.svg",
]

	// Make one full "lap" long enough to avoid empty space on wide screens.
	const lap = Array.from({ length: 6 }, () => logos).flat()

  return (
		<div className="marquee relative w-full pt-15">
			<div className="marquee-track flex items-center gap-16">
				{lap.concat(lap).map((logo, i) => (
					<img
						key={i}
						src={logo}
						alt=""
						className="h-14 w-auto shrink-0 object-contain opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
					/>
				))}
			</div>
			<div className="marquee-track marquee-track--reverse flex items-center gap-16 pt-10">
				{lap.concat(lap).map((logo, i) => (
					<img
						key={i}
						src={logo}
						alt=""
						className="h-14 w-auto shrink-0 object-contain opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
					/>
				))}
			</div>
		</div>
  )
}

export default LogosMarquee