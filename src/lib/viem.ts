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

// 2. Set up your client with desired chain & transport.
// `SEPOLIA_RPC_URL` can be set in `.env` for your preferred provider.
const DEFAULT_SEPOLIA_RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com";
const ANKR_SEPOLIA_BASE_URL = "https://rpc.ankr.com/eth_sepolia";

const envSepoliaRpcUrl = import.meta.env.SEPOLIA_RPC_URL as string | undefined;

const sepoliaRpcUrl = (() => {
	if (!envSepoliaRpcUrl) return DEFAULT_SEPOLIA_RPC_URL;

	// Ankr requires an API key appended as a path segment, e.g.
	// https://rpc.ankr.com/eth_sepolia/<YOUR_API_KEY>
	// If the env var is set to the base URL only, viem will surface a confusing
	// "Missing or invalid parameters" error when the upstream returns 401.
	if (
		envSepoliaRpcUrl === ANKR_SEPOLIA_BASE_URL ||
		envSepoliaRpcUrl === `${ANKR_SEPOLIA_BASE_URL}/`
	) {
		console.warn(
			"[viem] SEPOLIA_RPC_URL is set to Ankr's base Sepolia URL without an API key. " +
				"Falling back to PublicNode. Use: https://rpc.ankr.com/eth_sepolia/<YOUR_API_KEY>"
		);
		return DEFAULT_SEPOLIA_RPC_URL;
	}

	return envSepoliaRpcUrl;
})();

export const client = createPublicClient({
	chain: sepolia,
	transport: http(sepoliaRpcUrl),
});
