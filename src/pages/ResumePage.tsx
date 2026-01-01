import { useMemo } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ResumeVerifier } from "../components/ResumeVerifier";

/**
 * Resume page
 *
 * Recent UX changes:
 * - No auto-download on page load (auto-downloads feel sketchy and many browsers block them).
 * - Fill the header gap with a short "How it works" + "Steps" section so users understand
 *   the verification flow before uploading anything.
 */

const RESUME_RESUME_PATH = "/PavanResume.pdf";
const RESUME_LAST_UPDATED_LABEL = "Jan 1, 2026";

const ResumePage = () => {
	// Memoized label to keep the render stable and avoid sprinkling the constant everywhere.
	const updatedLabel = useMemo(() => RESUME_LAST_UPDATED_LABEL, []);

	return (
		<div className='min-h-screen bg-neutral-950 text-white'>
			<Navbar />
			<main className='mx-auto w-full max-w-6xl px-6 py-12 sm:py-16 lg:py-20'>
				<div className='inline-flex items-center gap-3 text-xs tracking-widest text-white/70'>
					<span className='h-px w-10 bg-orange-500/60' />
					<span>RESUME</span>
				</div>

				<h1 className='bbh-bartle-regular mt-6 text-4xl font-medium leading-[1.02] tracking-tight text-white sm:text-5xl'>
					Resume
				</h1>
				<p className='mt-4 max-w-3xl text-sm leading-7 text-white/70 sm:text-base'>
					Download the latest RESUME and verify it against the on-chain hash.
				</p>

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
								<li>Download the RESUME below (updated {updatedLabel}).</li>
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
									<p className='mt-1 text-xs text-neutral-500'>
										Updated {updatedLabel}
									</p>
								</div>
								<span className='inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70'>
									RESUME
								</span>
							</div>

							<div className='mt-5 flex flex-col gap-3 sm:flex-row sm:items-center'>
								<a
									href={RESUME_RESUME_PATH}
									download
									className='inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-orange-600 sm:w-auto'
								>
									Download Resume
								</a>
								<a
									href={RESUME_RESUME_PATH}
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
						<div className='mb-4 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 sm:p-6'>
							<h2 className='text-base font-semibold text-white'>Verify</h2>
							<p className='mt-1 text-sm text-white/60'>
								Upload the downloaded RESUME below to verify its authenticity.
							</p>
						</div>
						<ResumeVerifier />
					</section>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default ResumePage;
