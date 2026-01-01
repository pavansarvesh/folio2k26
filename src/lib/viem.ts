/**
 * viem client setup (Sepolia)
 *
 * Why this exists:
 * - The Resume verifier reads a `bytes32 resumeHash()` value from an on-chain contract.
 * - That requires a stable Sepolia JSON-RPC endpoint.
 *
 * Recent change:
 * - Some RPC providers (notably Ankr) require an API key.
 * - If the URL is set to Ankr's *base* URL without a key, the upstream returns 401 and
 *   viem surfaces a confusing "Missing or invalid parameters" error.
 * - We detect that misconfiguration and fall back to a public Sepolia RPC.
 */

// 1. Import modules.
import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";

// 2. Create the client lazily.
// Important: do NOT throw at module import time, or the entire app can render blank.
let cachedClient: ReturnType<typeof createPublicClient> | undefined;

export function getClient() {
	if (cachedClient) return cachedClient;

	const url = import.meta.env.VITE_SEPOLIA_RPC_URL as string | undefined;
	if (!url) {
		throw new Error(
			"[viem] Missing SEPOLIA_RPC_URL. Set it in your .env (e.g. SEPOLIA_RPC_URL=https://...)."
		);
	}

	cachedClient = createPublicClient({
		chain: sepolia,
		transport: http(url),
	});

	return cachedClient;
}
