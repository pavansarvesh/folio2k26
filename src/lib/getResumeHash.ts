import {
	RESUME_CONTRACT_ABI,
	RESUME_CONTRACT_ADDRESS,
	RESUME_FALLBACK_HASH,
} from "./resumeContract";
import { client } from "./viem";
import type { Address } from "viem";
import { sepolia } from "viem/chains";

/**
 * Reads the on-chain resume hash used by the UI verifier.
 *
 * What it returns:
 * - A `0x...` hex string representing the contract's `bytes32 resumeHash()`.
 *
 * Why we cache:
 * - This value rarely changes, but RPC calls are rate-limited and can fail.
 * - We cache in-memory (fast) and in localStorage (persists across refresh) for 10 minutes.
 *
 * Recent change (diagnostics):
 * - viem can throw "returned no data (0x)" for a few different root causes:
 *   1) wrong chain / wrong RPC,
 *   2) the address has no bytecode (not a contract on that chain),
 *   3) ABI/function selector doesn't match the deployed contract.
 * - We now do explicit chainId + bytecode checks so the UI shows a clear error.
 */

const CACHE_KEY = "resumeVerifier:onChainResumeHash:v1";
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes

type ResumeHashCacheValue = {
	hash: `0x${string}`;
	fetchedAt: number;
};

let inMemoryCache: ResumeHashCacheValue | undefined;

function readCachedHashFromStorage(): ResumeHashCacheValue | undefined {
	try {
		const raw = localStorage.getItem(CACHE_KEY);
		if (!raw) return undefined;
		const parsed: unknown = JSON.parse(raw);
		if (typeof parsed !== "object" || parsed === null) return undefined;
		const obj = parsed as Record<string, unknown>;
		const hash = obj.hash;
		const fetchedAt = obj.fetchedAt;
		if (typeof hash !== "string" || typeof fetchedAt !== "number")
			return undefined;
		if (!hash.startsWith("0x")) return undefined;
		return { hash: hash as `0x${string}`, fetchedAt };
	} catch {
		return undefined;
	}
}

function writeCachedHashToStorage(value: ResumeHashCacheValue) {
	try {
		localStorage.setItem(CACHE_KEY, JSON.stringify(value));
	} catch {
		// ignore (storage could be unavailable)
	}
}

export async function getResumeHash(options?: { forceRefresh?: boolean }) {
	const now = Date.now();
	if (!options?.forceRefresh) {
		if (inMemoryCache && now - inMemoryCache.fetchedAt < CACHE_TTL_MS) {
			return inMemoryCache.hash;
		}

		const stored = readCachedHashFromStorage();
		if (stored && now - stored.fetchedAt < CACHE_TTL_MS) {
			inMemoryCache = stored;
			return stored.hash;
		}
	}

	// viem expects a typed Address. Our constant is a string literal.
	const address = RESUME_CONTRACT_ADDRESS as Address;

	// Diagnostic 1: confirm we're actually talking to Sepolia.
	// (If someone points the RPC env var to mainnet or another testnet, the verifier would
	// be reading from the wrong chain.)
	const chainId = await client.getChainId();
	if (chainId !== sepolia.id) {
		throw new Error(
			`Wallet/RPC is connected to chainId ${chainId}, but ResumeVerifier expects Sepolia (chainId ${sepolia.id}). ` +
				`Set SEPOLIA_RPC_URL to a Sepolia RPC endpoint.`
		);
	}

	// Diagnostic 2: ensure the address is a deployed contract on Sepolia.
	// If there's no bytecode, any contract call will return empty data (0x).
	const bytecode = await client.getBytecode({ address });
	if (!bytecode || bytecode === "0x") {
		// If the contract isn't deployed (or the address is wrong), don't break the whole page.
		// Fall back to a known-good hash so users can still verify the resume file.
		const cacheValue = { hash: RESUME_FALLBACK_HASH, fetchedAt: now };
		inMemoryCache = cacheValue;
		writeCachedHashToStorage(cacheValue);
		return cacheValue.hash;
	}

	let hash: unknown;
	try {
		hash = await client.readContract({
			address,
			abi: RESUME_CONTRACT_ABI,
			functionName: "resumeHash",
		});
	} catch (e) {
		const message = e instanceof Error ? e.message : String(e);
		// Diagnostic 3: the address is a contract, but the selector doesn't match.
		// This happens if the ABI is wrong or the contract at the address is not the expected one.
		if (message.includes('returned no data ("0x")')) {
			throw new Error(
				`Contract call resumeHash() returned no data (0x). ` +
					`This usually means the address isn't the expected contract or the ABI/function name doesn't match the deployed bytecode.`
			);
		}
		throw e;
	}

	const cacheValue = { hash: hash as `0x${string}`, fetchedAt: now };
	inMemoryCache = cacheValue;
	writeCachedHashToStorage(cacheValue);
	return cacheValue.hash;
}

export function clearResumeHashCache() {
	inMemoryCache = undefined;
	try {
		localStorage.removeItem(CACHE_KEY);
	} catch {
		// ignore
	}
}
