import { useEffect, useMemo, useState } from "react";
import { getOnChainResumeHash } from "../lib/getResumeHash";
import { RESUME_CONTRACT_ADDRESS } from "../lib/resumeContract";

type VerificationStatus =
	| "loading"
	| "awaiting_file"
	| "ready"
	| "verifying"
	| "verified"
	| "mismatch"
	| "error";

function toHex0x(buffer: ArrayBuffer): `0x${string}` {
	const bytes = new Uint8Array(buffer);
	let hex = "0x";
	for (const byte of bytes) {
		hex += byte.toString(16).padStart(2, "0");
	}
	return hex as `0x${string}`;
}

async function sha256File(file: File): Promise<`0x${string}`> {
	const arrayBuffer = await file.arrayBuffer();
	const digest = await crypto.subtle.digest("SHA-256", arrayBuffer);
	return toHex0x(digest);
}

function badgeStyles(status: VerificationStatus): string {
	switch (status) {
		case "verified":
			return "border-emerald-500/30 bg-emerald-500/10 text-emerald-300";
		case "mismatch":
			return "border-rose-500/30 bg-rose-500/10 text-rose-300";
		case "error":
			return "border-rose-500/30 bg-rose-500/10 text-rose-300";
		case "verifying":
			return "border-orange-500/30 bg-orange-500/10 text-orange-200";
		case "ready":
			return "border-white/15 bg-white/5 text-white/70";
		case "awaiting_file":
			return "border-white/10 bg-white/5 text-white/60";
		case "loading":
		default:
			return "border-white/10 bg-white/5 text-white/60";
	}
}

function badgeLabel(status: VerificationStatus): string {
	switch (status) {
		case "loading":
			return "Loading";
		case "awaiting_file":
			return "Select a PDF";
		case "ready":
			return "Ready";
		case "verifying":
			return "Verifying";
		case "verified":
			return "Verified";
		case "mismatch":
			return "Mismatch";
		case "error":
			return "Error";
		default:
			return "";
	}
}

export default function ResumeVerifier() {
	const [onChainHash, setOnChainHash] = useState<`0x${string}` | null>(null);
	const [file, setFile] = useState<File | null>(null);
	const [uploadedHash, setUploadedHash] = useState<`0x${string}` | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);
	const [verifying, setVerifying] = useState(false);
	const [verified, setVerified] = useState<boolean | null>(null);

	useEffect(() => {
		let mounted = true;

		async function load() {
			try {
				const h = await getOnChainResumeHash();
				if (mounted) setOnChainHash(h);
			} catch (e: unknown) {
				if (mounted) {
					setError(e instanceof Error ? e.message : String(e));
				}
			} finally {
				if (mounted) setLoading(false);
			}
		}

		load();
		return () => {
			mounted = false;
		};
	}, []);

	const status: VerificationStatus = useMemo(() => {
		if (loading) return "loading";
		if (error) return "error";
		if (!file) return "awaiting_file";
		if (verifying) return "verifying";
		if (verified === true) return "verified";
		if (verified === false) return "mismatch";
		return "ready";
	}, [error, file, loading, verified, verifying]);

	async function onVerify() {
		setError(null);
		setVerified(null);
		setUploadedHash(null);

		if (!file) {
			setError("Please choose a PDF first.");
			return;
		}
		if (!onChainHash) {
			setError("On-chain hash not available.");
			return;
		}

		setVerifying(true);
		try {
			const localHash = await sha256File(file);
			setUploadedHash(localHash);
			setVerified(localHash.toLowerCase() === onChainHash.toLowerCase());
		} catch (e: unknown) {
			setError(e instanceof Error ? e.message : String(e));
		} finally {
			setVerifying(false);
		}
	}

	return (
		<div className='w-full rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 sm:p-6'>
			<div className='flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3'>
				<div className='min-w-0'>
					<h3 className='text-base font-semibold text-white'>
						Resume Verifier
					</h3>
					<p className='mt-1 text-sm text-white/60'>
						Choose the downloaded PDF, then click verify.
					</p>
				</div>
				<div className='flex w-full items-center justify-between gap-3 sm:w-auto sm:flex-col sm:items-end sm:justify-start sm:gap-2'>
					<span
						className={`order-1 inline-flex w-fit shrink-0 items-center rounded-full border px-3 py-1 text-xs font-medium sm:order-2 ${badgeStyles(
							status
						)}`}
					>
						{badgeLabel(status)}
					</span>
					<a
						href={`https://sepolia.etherscan.io/address/${RESUME_CONTRACT_ADDRESS}`}
						target='_blank'
						rel='noreferrer'
						className='order-2 whitespace-nowrap text-xs font-medium text-white/60 underline decoration-white/20 underline-offset-4 hover:text-orange-500 hover:decoration-orange-500 sm:order-1'
					>
						View on Etherscan
					</a>
				</div>
			</div>

			<div className='mt-5 flex flex-col gap-3 sm:flex-row sm:items-center'>
				<label className='flex w-full min-w-0 flex-col gap-2 overflow-hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/70 sm:flex-1 sm:flex-row sm:items-center sm:gap-3'>
					<span className='shrink-0 text-white/60'>PDF</span>
					<input
						type='file'
						accept='application/pdf'
						className='w-full min-w-0 text-xs text-white file:mr-4 file:rounded-full file:border-0 file:bg-white/10 file:px-4 file:py-2 file:text-xs file:font-medium file:text-white hover:file:bg-white/15'
						onChange={(e) => {
							const next = e.target.files?.[0] ?? null;
							setFile(next);
							setError(null);
							setVerified(null);
							setUploadedHash(null);
						}}
					/>
				</label>

				<button
					type='button'
					onClick={onVerify}
					disabled={loading || verifying || !file || !onChainHash}
					className='inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto'
				>
					{verifying ? "Verifying…" : "Verify"}
				</button>
			</div>

			{error ? (
				<div className='mt-4 rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-sm text-rose-200'>
					<p className='font-medium'>Resume verification failed</p>
					<p className='mt-1 whitespace-pre-wrap text-rose-200/90'>{error}</p>
				</div>
			) : null}

			<div className='mt-5 space-y-3'>
				<div>
					<p className='text-xs tracking-widest text-white/50'>ON-CHAIN HASH</p>
					<p className='mt-1 break-all rounded-xl border border-white/10 bg-black/20 p-3 font-mono text-xs text-white/70'>
						{onChainHash ?? "—"}
					</p>
				</div>

				<div>
					<p className='text-xs tracking-widest text-white/50'>
						UPLOADED FILE HASH
					</p>
					<p className='mt-1 break-all rounded-xl border border-white/10 bg-black/20 p-3 font-mono text-xs text-white/70'>
						{uploadedHash ?? "—"}
					</p>
				</div>
			</div>
		</div>
	);
}
