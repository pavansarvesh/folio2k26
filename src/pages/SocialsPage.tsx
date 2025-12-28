import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SOCIAL = {
	gmail: "pavansarvesh31@gmail.com",
	github: "https://github.com/pavansarvesh",
	linkedin: "https://www.linkedin.com/in/pavansarvesh/",
	// Optional: add your invite/profile URL to show Discord.
	discord: "https://discordapp.com/users/758199430662586369",
	x: "https://x.com/pavansarveshr",
};

type IconProps = {
	className?: string;
};

function XIcon({ className }: IconProps) {
	return (
		<svg viewBox='0 0 24 24' aria-hidden='true' className={className}>
			<path
				fill='currentColor'
				d='M18.244 2H21l-6.02 6.882L22.5 22h-6.17l-4.83-7.1L5.29 22H2.5l6.44-7.36L1.5 2h6.33l4.37 6.33L18.244 2Zm-1.08 18.16h1.53L7.02 3.74H5.38l11.784 16.42Z'
			/>
		</svg>
	);
}

function GithubIcon({ className }: IconProps) {
	return (
		<svg viewBox='0 0 22 23' aria-hidden='true' className={className}>
			<path
				fill='none'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
				d='M8 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-7 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 18.13V22'
			/>
		</svg>
	);
}

function LinkedInIcon({ className }: IconProps) {
	return (
		<svg viewBox='0 0 24 24' aria-hidden='true' className={className}>
			<path
				fill='currentColor'
				stroke='currentColor'
				strokeWidth='0.8'
				strokeLinejoin='round'
				d='M7.5006104,9C7.5003662,9,7.5001831,9,7.5,9h-4C3.223999,8.9998169,3.0001831,9.2234497,3,9.4993896C3,9.4996338,3,9.4998169,3,9.5v12c-0.0001831,0.276001,0.2234497,0.4998169,0.4993896,0.5C3.4996338,22,3.4998169,22,3.5,22h4c0.276001,0.0001831,0.4998169-0.2234497,0.5-0.4994507C8,21.5003662,8,21.5001831,8,21.5v-12C8.0001831,9.223999,7.7765503,9.0001831,7.5006104,9z M7,21H4V10h3V21z M18,9c-1.0848389,0.000061-2.1393433,0.3580933-3,1.0185547V9.5c0.0001831-0.276001-0.2234497-0.4998169-0.4993896-0.5C14.5003662,9,14.5001831,9,14.5,9h-4c-0.276001-0.0001831-0.4998169,0.2234497-0.5,0.4993896C10,9.4996338,10,9.4998169,10,9.5v12c-0.0001831,0.276001,0.2234497,0.4998169,0.4994507,0.5c0.0001831,0,0.0003662,0,0.0005493,0h4c0.276001,0.0001831,0.4998169-0.2234497,0.5-0.4994507c0-0.0001831,0-0.0003662,0-0.0005493V16c0-0.8284302,0.6715698-1.5,1.5-1.5S18,15.1715698,18,16v5.5c-0.0001831,0.276001,0.2234497,0.4998169,0.4994507,0.5c0.0001831,0,0.0003662,0,0.0005493,0h4c0.276001,0.0001831,0.4998169-0.2234497,0.5-0.4994507c0-0.0001831,0-0.0003662,0-0.0005493V14C22.9967651,11.2399292,20.7600708,9.0032349,18,9z M22,21h-3v-5c0-1.3807373-1.1192627-2.5-2.5-2.5S14,14.6192627,14,16v5h-3V10h3v1.203125c0,0.2124634,0.1343994,0.4016724,0.335022,0.4716797c0.2001343,0.0721436,0.4240112,0.0079956,0.5556641-0.1591797c1.3625488-1.7268066,3.8669434-2.0220337,5.59375-0.6594238C21.4462891,11.6152344,22.0053101,12.7747192,22,14V21z M5.867981,2.0018311C5.7503662,1.9935913,5.6323242,1.992981,5.5146484,2C4.0053711,1.8969116,2.6983032,3.0368652,2.5952148,4.5461426c-0.0041504,0.06073-0.0062256,0.121521-0.0063477,0.182373c-0.0130005,1.49646,1.1895752,2.7200928,2.6860352,2.7330933c0.0610962,0.0005493,0.1221313-0.0010376,0.1831055-0.0046387h0.0283203c1.5064087,0.1054077,2.8129883-1.0303345,2.918396-2.5367432S7.3743896,2.1072388,5.867981,2.0018311z M5.8334351,6.4598389C5.7179565,6.470459,5.6016235,6.4695435,5.4863281,6.4569702H5.4580078C4.5018921,6.5304565,3.6672974,5.8150024,3.593811,4.8588867C3.5203247,3.902832,4.2357788,3.0681763,5.1918945,2.9946899C5.2994385,2.9864502,5.4074707,2.9882202,5.5146484,3C6.4700317,2.9119873,7.315918,3.6151123,7.4039917,4.5704956C7.4920044,5.5259399,6.7888794,6.3718262,5.8334351,6.4598389z'
			/>
		</svg>
	);
}

function GmailIcon({ className }: IconProps) {
	return (
		<svg viewBox='0 0 24 24' aria-hidden='true' className={className}>
			<path
				fill='none'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
				d='M6.111 18.994H4.788C4.192 19.047 3 18.753 3 17.15V7.741c0-2.225 2.3-1.982 3.46-1.116l5.528 4.032 5.644-4.169C18.98 5.418 21 6.169 21 8.448v8.314c0 .888-.237 2.232-2.02 2.232h-2.091v-6.788l-4.9 3.645-4.878-3.645v4.513'
			/>
		</svg>
	);
}

function DiscordIcon({ className }: IconProps) {
	return (
		<svg viewBox='0 0 128 128' aria-hidden='true' className={className}>
			<path
				fill='currentColor'
				stroke='currentColor'
				strokeWidth='3'
				strokeLinejoin='round'
				d='M45.23 57.2c-6.16 0-11.17 5.6-11.17 12.48s5 12.47 11.17 12.47 11.16-5.59 11.16-12.47S51.38 57.2 45.23 57.2Zm0 21c-4 0-7.17-3.8-7.17-8.47s3.21-8.48 7.17-8.48 7.16 3.8 7.16 8.48-3.21 8.42-7.16 8.42Z'
			/>
			<path
				fill='currentColor'
				stroke='currentColor'
				strokeWidth='3'
				strokeLinejoin='round'
				d='M121.83 59.58a156.78 156.78 0 0 0-11.52-31 2.1 2.1 0 0 0-.71-.77 87.08 87.08 0 0 0-15.23-7.17C84.55 17.07 79.91 17 79.72 17a2 2 0 0 0-2 1.72l-.6 4.17a133.14 133.14 0 0 0-26.28 0l-.6-4.17a2 2 0 0 0-2-1.72c-.19 0-4.83 0-14.65 3.61a87.08 87.08 0 0 0-15.19 7.2 2.1 2.1 0 0 0-.71.77 156.72 156.72 0 0 0-11.52 31C1 80.46 0 90.91 0 91.34a2 2 0 0 0 .49 1.5 55.2 55.2 0 0 0 18.2 12.74A76.32 76.32 0 0 0 38.48 111a2 2 0 0 0 1.92-1l5.4-9.25a105.08 105.08 0 0 0 18.2 1.49 105.08 105.08 0 0 0 18.2-1.51l5.4 9.27a2 2 0 0 0 1.72 1h.2a76.32 76.32 0 0 0 19.78-5.38 55.2 55.2 0 0 0 18.2-12.74 2 2 0 0 0 .49-1.5c.01-.47-.94-10.92-6.16-31.8Zm-14.06 42.31a76.76 76.76 0 0 1-17.39 4.92l-4.08-7c4.68-1.24 14.42-4.46 21.83-11.2a2 2 0 1 0-2.69-3c-9 8.23-22.46 10.84-22.6 10.87h-.06A96.59 96.59 0 0 1 64 98.24a96.59 96.59 0 0 1-18.78-1.7h-.06c-.14 0-13.55-2.64-22.6-10.87a2 2 0 1 0-2.69 3c7.41 6.74 17.15 10 21.83 11.2l-4.08 7a76.08 76.08 0 0 1-17.39-4.92A52.24 52.24 0 0 1 4.08 90.8c.33-2.91 1.68-13.07 6-30.24A156.25 156.25 0 0 1 21 30.92a88.17 88.17 0 0 1 14-6.52 61.35 61.35 0 0 1 11.58-3.19l.35 2.39c-4 1-13.85 3.86-21.65 9.53a2 2 0 1 0 2.36 3.23c8.82-6.41 21-9.06 21.86-9.25a118.4 118.4 0 0 1 14.5-.84 117.64 117.64 0 0 1 14.51.84c.91.19 13 2.83 21.86 9.25a2 2 0 1 0 2.36-3.23c-7.8-5.67-17.61-8.52-21.65-9.53l.35-2.39A61.75 61.75 0 0 1 93 24.4a88.17 88.17 0 0 1 14 6.52 156.25 156.25 0 0 1 11 29.64c4.29 17.17 5.64 27.33 6 30.24a52.24 52.24 0 0 1-16.23 11.09Z'
			/>
			<path
				fill='currentColor'
				stroke='currentColor'
				strokeWidth='3'
				strokeLinejoin='round'
				d='M82.77 57.2c-6.15 0-11.16 5.6-11.16 12.48s5 12.47 11.16 12.47 11.17-5.59 11.17-12.47S88.93 57.2 82.77 57.2Zm0 21c-4 0-7.16-3.8-7.16-8.47s3.21-8.48 7.16-8.48 7.17 3.8 7.17 8.48-3.21 8.42-7.17 8.42Z'
			/>
		</svg>
	);
}

export default function SocialsPage() {
	const mailtoHref = `mailto:${SOCIAL.gmail}`;

	const links: Array<{ label: string; href: string; icon: React.ReactNode }> = [
		{
			label: "GitHub",
			href: SOCIAL.github,
			icon: <GithubIcon className='h-5 w-5' />,
		},
		{ label: "X", href: SOCIAL.x, icon: <XIcon className='h-5 w-5' /> },
		{
			label: "LinkedIn",
			href: SOCIAL.linkedin,
			icon: <LinkedInIcon className='h-6 w-6' />,
		},
		{
			label: "Gmail",
			href: mailtoHref,
			icon: <GmailIcon className='h-6 w-6' />,
		},
		{
			label: "Discord",
			href: SOCIAL.discord,
			icon: <DiscordIcon className='h-5 w-5' />,
		},
	].filter((l) => Boolean(l.href));

	return (
		<div
			id='top'
			className='relative min-h-screen overflow-hidden bg-neutral-950 text-white'
		>
			{/* background */}
			<div className='pointer-events-none absolute inset-0'>
				<div className='absolute inset-0 bg-neutral-950' />
				<div className='absolute inset-0 bg-linear-to-b from-transparent via-neutral-950/10 to-neutral-950/35' />
			</div>

			<Navbar />

			<main className='relative mx-auto max-w-6xl px-6 py-16 sm:py-20'>
				<div className='inline-flex items-center gap-3 text-xs tracking-widest text-white/70'>
					<span className='h-px w-10 bg-orange-500/60' />
					<span>SOCIAL</span>
				</div>

				<h1 className='bbh-bartle-regular mt-6 max-w-5xl break-words text-4xl font-medium leading-[1.02] tracking-tight text-white sm:text-7xl'>
					Socials
				</h1>

				<p className='mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg'>
					Stay connected and follow my journey on social media for updates,
					projects, and more.
				</p>

				<div className='mt-10 rounded-2xl border border-white/10 bg-white/5 p-6'>
					<div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
						{links.map((link) => (
							<a
								key={link.label}
								href={link.href}
								target={link.href.startsWith("http") ? "_blank" : undefined}
								rel={link.href.startsWith("http") ? "noreferrer" : undefined}
								className='group flex items-center gap-3 rounded-xl border border-white/10 bg-neutral-950/20 px-4 py-4 transition hover:border-orange-500/40 hover:text-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/30'
							>
								<span className='text-white/80 transition group-hover:text-orange-500'>
									{link.icon}
								</span>
								<span className='text-sm font-medium text-white/80 transition group-hover:text-orange-500'>
									{link.label}
								</span>
							</a>
						))}
					</div>
				</div>
			</main>

			<div className='relative'>
				<Footer />
			</div>
		</div>
	);
}
