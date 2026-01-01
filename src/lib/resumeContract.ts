export const RESUME_CONTRACT_ADDRESS =
	"0xAC0F76BB0AB6B80B6506E425e4f1053fe6940cAa";

/**
 * Fallback hash used by the Resume verifier when the on-chain contract cannot be read.
 *
 * Why this exists:
 * - If the configured `RESUME_CONTRACT_ADDRESS` is not deployed on Sepolia (no bytecode),
 *   an on-chain read will fail.
 * - Instead of breaking the Resume page in production, we fall back to this value so
 *   users can still verify the downloaded resume file.
 *
 * Note:
 * - Prefer using the on-chain contract when it is deployed, because it provides a public,
 *   tamper-evident source of truth.
 */
export const RESUME_FALLBACK_HASH =
	"0xbd994c0db0beff1323f90f222e24f778ba1b520e085cdedb2d51ab2a058f0306" as const;

export const RESUME_CONTRACT_ABI = [
	{
		inputs: [],
		name: "resumeHash",
		outputs: [{ type: "bytes32" }],
		stateMutability: "view",
		type: "function",
	},
] as const;
