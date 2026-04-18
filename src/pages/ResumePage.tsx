import { useEffect, useMemo, useState } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ResumeVerifier from "../components/ResumeVerifier";

import { getOnChainResumeHash } from "../lib/getResumeHash";
import type { OnChainResumeHashResult } from "../lib/getResumeHash";
import { RESUME_CONTRACT_ADDRESS } from "../lib/resumeContract";

const RESUME_PATH = "/Pavan-Resume-mar-23-update.pdf";

const ResumePage = () => {
	const [onChainData, setOnChainData] =
		useState<OnChainResumeHashResult | null>(null);
	const [onChainLoading, setOnChainLoading] = useState(true);
	const [onChainError, setOnChainError] = useState<string | null>(null);

	function formatOnChainDate(date: Date): string {
		return date.toLocaleString(undefined, {
			year: "numeric",
			month: "short",
			day: "numeric",
			hour: "numeric",
			minute: "2-digit",
			timeZoneName: "short",
		});
	}

	useEffect(() => {
		let mounted = true;
		async function load() {
			try {
				const data = await getOnChainResumeHash();
				if (mounted) setOnChainData(data);
			} catch (e: unknown) {
				if (mounted)
					setOnChainError(e instanceof Error ? e.message : String(e));
			} finally {
				if (mounted) setOnChainLoading(false);
			}
		}

		load();
		return () => {
			mounted = false;
		};
	}, []);

	const onChainBadgeText = useMemo(() => {
		if (onChainLoading) return "Fetching on-chain update…";
		if (onChainError) return "On-chain update unavailable";
		if (!onChainData) return "On-chain update unavailable";
		return `Resume updated on-chain: ${formatOnChainDate(
			onChainData.date,
		)} (block ${onChainData.blockNumber.toString()})`;
	}, [onChainData, onChainError, onChainLoading]);

	const onChainBadgeClassName = useMemo(() => {
		if (onChainLoading) {
			return "border-white/10 bg-white/5 text-white/70";
		}
		if (onChainError || !onChainData) {
			return "border-rose-500/30 bg-rose-500/10 text-rose-200";
		}
		return "border-[#ff8c42]/30 bg-[#ff8c42]/10 text-[#ff8c42]";
	}, [onChainData, onChainError, onChainLoading]);

	return (
		<div className='min-h-screen bg-neutral-950 text-white'>
			<Navbar />
			<main className='mx-auto w-full max-w-400 px-8 pb-16 pt-32 lg:px-16'>
				<div className='inline-flex items-center gap-4 font-["JetBrains_Mono",monospace] text-xs tracking-[0.3em] text-[#ff8c42]'>
					<span className='h-0.5 w-12 bg-[#ff8c42]' />
					<span>RESUME</span>
				</div>

				<h1 className='bbh-bartle-regular mt-6 text-4xl font-medium leading-[1.02] tracking-tight text-white sm:text-5xl'>
					Resume
				</h1>
				<p className='mt-4 max-w-3xl text-sm leading-7 text-white/70 sm:text-base'>
					Download the latest RESUME and verify it against the on-chain hash.
				</p>

				<div className='mt-5'>
					<span
						className={`inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-2xl border px-4 py-2 text-xs font-medium leading-5 whitespace-normal wrap-break-word sm:rounded-full ${onChainBadgeClassName}`}
					>
						<span>{onChainBadgeText}</span>
						<a
							href={`https://sepolia.etherscan.io/address/${RESUME_CONTRACT_ADDRESS}`}
							target='_blank'
							rel='noreferrer'
							className='whitespace-nowrap underline decoration-white/20 underline-offset-4 hover:text-[#ff8c42] hover:decoration-[#ff8c42]'
						>
							View on Etherscan
						</a>
					</span>
				</div>

				<div className='mt-8 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 sm:p-6'>
					<div className='grid gap-4 sm:grid-cols-2'>
						<div>
							<h2 className='text-base font-semibold text-white'>
								How it works
							</h2>
							<p className='mt-2 text-sm leading-7 text-white/60'>
								We compute a SHA-256 hash of the RESUME you upload and compare
								it to the bytes32 hash stored SEPOLIA Chain.
							</p>
						</div>
						<div>
							<h2 className='text-base font-semibold text-white'>Steps</h2>
							<ol className='mt-2 list-decimal space-y-1 pl-5 text-sm text-white/60'>
								<li>Download the RESUME below.</li>
								<li>Upload the RESUME in the verifier.</li>
								<li>See “Verified” if the hashes match.</li>
							</ol>
						</div>
					</div>
				</div>

				<div className='mt-10 grid gap-6 lg:grid-cols-12 lg:items-start'>
					<section className='lg:col-span-5'>
						<div className='rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 sm:p-6'>
							<div className='flex items-center justify-between gap-3'>
								<div className='min-w-0'>
									<h2 className='text-base font-semibold text-white'>
										Download
									</h2>
								</div>
								<span className='inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70'>
									PDF
								</span>
							</div>

							<div className='mt-5 flex flex-col gap-3 sm:flex-row sm:items-center'>
								<a
									href={RESUME_PATH}
									download
									className='inline-flex w-full items-center justify-center rounded-full bg-[#ff8c42] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#ff8c42] sm:w-auto'
								>
									Download Resume
								</a>
								<a
									href={RESUME_PATH}
									target='_blank'
									rel='noreferrer'
									className='inline-flex w-full items-center justify-center rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/15 sm:w-auto'
								>
									Open Resume
								</a>
							</div>
						</div>
					</section>
					<section className='lg:col-span-7'>
						<ResumeVerifier onChainData={onChainData} />
					</section>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default ResumePage;
