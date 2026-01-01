import { useEffect, useMemo, useRef, useState } from "react";

import { clearResumeHashCache, getResumeHash } from "../lib/getResumeHash";
import { RESUME_CONTRACT_ADDRESS } from "../lib/resumeContract";

type Status = "idle" | "loading" | "verified" | "invalid" | "error";

async function hashFileSha256(file: File): Promise<`0x${string}`> {
	// We hash locally in the browser so the user never uploads the file to a server.
	// The result is compared to the on-chain `bytes32 resumeHash()` value.
	const buffer = await file.arrayBuffer();
	const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
	const hex = Array.from(new Uint8Array(hashBuffer))
		.map((b) => b.toString(16).padStart(2, "0"))
		.join("");
	return `0x${hex}` as const as `0x${string}`;
}

export function ResumeVerifier() {
	// `onChainHash` is fetched from Sepolia via viem.
	const [onChainHash, setOnChainHash] = useState<`0x${string}` | null>(null);
	// `status` drives the badge and the helper text.
	const [status, setStatus] = useState<Status>("idle");
	// `fileHash` is computed from the user's uploaded PDF (SHA-256).
	const [fileHash, setFileHash] = useState<`0x${string}` | null>(null);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	// If the user uploads a file before the on-chain hash loads, we keep the hash here and
	// finish verification once `onChainHash` arrives.
	const pendingLocalHashRef = useRef<`0x${string}` | null>(null);

	const explorerAddressUrl = useMemo(
		() => `https://sepolia.etherscan.io/address/${RESUME_CONTRACT_ADDRESS}`,
		[]
	);

	useEffect(() => {
		let cancelled = false;
		// Load on-chain hash once on mount.
		getResumeHash()
			.then((h) => {
				if (cancelled) return;
				setOnChainHash(h);
				const pending = pendingLocalHashRef.current;
				if (pending) {
					setStatus(
						pending.toLowerCase() === h.toLowerCase() ? "verified" : "invalid"
					);
					pendingLocalHashRef.current = null;
				}
			})
			.catch((e) => {
				if (cancelled) return;
				setStatus("error");
				setErrorMessage(
					e instanceof Error ? e.message : "Failed to load on-chain hash."
				);
			});

		return () => {
			cancelled = true;
		};
	}, []);

	async function handleFile(file: File) {
		try {
			setStatus("loading");
			setFileHash(null);
			setErrorMessage(null);
			pendingLocalHashRef.current = null;

			if (file.type && file.type !== "application/pdf") {
				setStatus("error");
				setErrorMessage("Please upload a PDF file.");
				return;
			}

			// Cache the computed file hash in sessionStorage so re-selecting the same file in
			// the same tab doesn't re-hash the PDF (which can be slow on large files).
			const cacheKey = `resumeVerifier:fileHash:sha256:v1:${file.name}:${file.size}:${file.lastModified}`;
			try {
				const cached = sessionStorage.getItem(cacheKey);
				if (cached && cached.startsWith("0x")) {
					const localHash = cached as `0x${string}`;
					setFileHash(localHash);
					pendingLocalHashRef.current = localHash;
					if (onChainHash) {
						setStatus(
							localHash.toLowerCase() === onChainHash.toLowerCase()
								? "verified"
								: "invalid"
						);
						pendingLocalHashRef.current = null;
					}
					return;
				}
			} catch {
				// ignore
			}

			const localHash = await hashFileSha256(file);
			setFileHash(localHash);
			pendingLocalHashRef.current = localHash;
			try {
				sessionStorage.setItem(cacheKey, localHash);
			} catch {
				// ignore
			}

			if (onChainHash) {
				setStatus(
					localHash.toLowerCase() === onChainHash.toLowerCase()
						? "verified"
						: "invalid"
				);
				pendingLocalHashRef.current = null;
			}
		} catch {
			setStatus("error");
			setErrorMessage("Something went wrong while hashing or verifying.");
		}
	}

	const badge = useMemo(() => {
		switch (status) {
			case "verified":
				return (
					<span className='inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300'>
						Verified
					</span>
				);
			case "invalid":
				return (
					<span className='inline-flex items-center rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-xs font-medium text-rose-300'>
						Not Verified
					</span>
				);
			case "loading":
				return (
					<span className='inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70'>
						Verifying…
					</span>
				);
			case "error":
				return (
					<span className='inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300'>
						Error
					</span>
				);
			default:
				return (
					<span className='inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70'>
						Not checked
					</span>
				);
		}
	}, [status]);

	return (
		<section className='rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 sm:p-6'>
			<div className='flex items-start justify-between gap-4'>
				<div>
					<h3 className='text-sm font-medium text-white'>
						Resume Verification
					</h3>
					<p className='mt-1 text-sm text-white/60'>
						Verify that this resume matches the on-chain record.
					</p>
				</div>
				{badge}
			</div>

			<div className='mt-5 grid gap-4'>
				<div>
					<div className='flex items-center justify-between gap-3'>
						<p className='text-sm text-white/70'>On-chain resume hash</p>
						<a
							href={explorerAddressUrl}
							target='_blank'
							rel='noreferrer'
							className='text-xs text-white/60 underline-offset-4 hover:text-orange-500 hover:underline'
						>
							View on block explorer
						</a>
					</div>
					<div className='mt-2 rounded-xl border border-neutral-800 bg-neutral-950/60 p-3'>
						<code className='block break-all text-xs text-white/80'>
							{onChainHash ?? "Loading…"}
						</code>
						<div className='mt-3 flex items-center justify-end'>
							<button
								type='button'
								className='rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/15'
								onClick={() => {
									clearResumeHashCache();
									setErrorMessage(null);
									if (fileHash) {
										pendingLocalHashRef.current = fileHash;
										setStatus("loading");
									}
									getResumeHash({ forceRefresh: true })
										.then((h) => {
											setOnChainHash(h);
											const pending = pendingLocalHashRef.current;
											if (pending) {
												setStatus(
													pending.toLowerCase() === h.toLowerCase()
														? "verified"
														: "invalid"
												);
												pendingLocalHashRef.current = null;
											}
										})
										.catch((e) => {
											setStatus("error");
											setErrorMessage(
												e instanceof Error
													? e.message
													: "Failed to refresh on-chain hash."
											);
										});
								}}
							>
								Refresh
							</button>
						</div>
					</div>
				</div>

				<div>
					<input
						type='file'
						accept='application/pdf'
						className='mt-1 block w-full text-sm text-white file:mr-4 file:rounded-md file:border-0 file:bg-white/10 file:px-4 file:py-2 file:text-white hover:file:bg-white/20'
						onChange={(e) => {
							if (e.target.files?.[0]) {
								void handleFile(e.target.files[0]);
							}
						}}
					/>

					<div className='mt-4 min-h-6 text-sm'>
						{status === "idle" ? (
							<span className='text-white/50'>
								Upload your resume to verify
							</span>
						) : null}
						{status === "loading" ? (
							<span className='text-white/60'>
								{!onChainHash && fileHash
									? "Waiting for on-chain hash…"
									: "Verifying…"}
							</span>
						) : null}
						{status === "verified" ? (
							<span className='text-emerald-300'>
								✔ Resume verified on-chain
							</span>
						) : null}
						{status === "invalid" ? (
							<span className='text-rose-300'>
								✖ Resume does not match on-chain record
							</span>
						) : null}
						{status === "error" ? (
							<span className='text-rose-300'>
								{errorMessage ?? "Something went wrong"}
							</span>
						) : null}
					</div>

					{fileHash ? (
						<div className='mt-3 rounded-xl border border-neutral-800 bg-neutral-950/60 p-3'>
							<p className='text-sm text-white/70'>Computed PDF hash</p>
							<code className='mt-2 block break-all text-xs text-white/80'>
								{fileHash}
							</code>
						</div>
					) : null}
				</div>
			</div>
		</section>
	);
}
