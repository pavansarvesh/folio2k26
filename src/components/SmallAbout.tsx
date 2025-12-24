import { Link } from "react-router-dom";

type SmallAboutProps = {
	showKnowMore?: boolean;
};

const SmallAbout = ({ showKnowMore = false }: SmallAboutProps) => {
	return (
		<section
			id='about'
			className='relative mx-auto mt-2 flex max-w-6xl flex-col px-6 pt-12 pb-8 sm:mt-4 sm:pt-20 sm:pb-12'
		>
			<div className='inline-flex items-center gap-3 text-xs tracking-widest text-white/70'>
				<span className='h-px w-10 bg-orange-500/60' />
				<span>ABOUT</span>
			</div>

			<h2 className='bbh-bartle-regular mt-6 max-w-5xl text-3xl font-medium leading-[1.02] tracking-tight text-white sm:text-5xl'>
				ABOUT
			</h2>

			<p className='mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:mt-6 sm:text-lg'>
				I’m an Electronics and Computer Engineering student passionate about
				Web3 and blockchain. My main focus is backend and smart contract
				development, with a strong interest in building complete DApps
				end-to-end.
			</p>

			{showKnowMore ? (
				<Link
					to='/about'
					className='mt-6 inline-flex w-fit text-sm text-white/70 transition-colors duration-200 ease-out hover:text-orange-500 sm:mt-8'
				>
					(know more)
				</Link>
			) : null}
		</section>
	);
};

export default SmallAbout;
