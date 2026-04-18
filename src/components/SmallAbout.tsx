import { Link } from "react-router-dom";

type SmallAboutProps = {
	showKnowMore?: boolean;
};

const SmallAbout = ({ showKnowMore = false }: SmallAboutProps) => {
	return (
		<section
			id='about'
			className='relative mx-auto mt-2 flex max-w-400 flex-col px-8 pb-10 pt-14 lg:px-16'
		>
			<div className='inline-flex items-center gap-4 font-["JetBrains_Mono",monospace] text-xs tracking-[0.3em] text-[#ff8c42]'>
				<span className='h-0.5 w-12 bg-[#ff8c42]' />
				<span>ABOUT</span>
			</div>

			<h2 className='bbh-bartle-regular mt-6 max-w-5xl text-3xl font-medium leading-[1.02] tracking-tight text-white sm:text-5xl'>
				ABOUT
			</h2>

			<p className='mt-5 max-w-2xl text-base leading-8 text-white/70 sm:mt-6 sm:text-lg'>
				I’m an Electronics and Computer Engineering student passionate about
				Web3 and blockchain. My main focus is backend and smart contract
				development, with a strong interest in building complete DApps
				end-to-end.
			</p>

			{showKnowMore ? (
				<Link
					to='/about'
					className='mt-7 inline-flex w-fit items-center gap-2 text-sm text-white/70 transition-colors duration-200 ease-out hover:text-[#ff8c42] sm:mt-8'
				>
					Know more {"->"}
				</Link>
			) : null}
		</section>
	);
};

export default SmallAbout;
