import { getClient } from "./viem";
import { RESUME_CONTRACT_ADDRESS, RESUME_CONTRACT_ABI } from "./resumeContract";

import type { Address } from "viem";
import { sepolia } from "viem/chains";

export async function getOnChainResumeHash() {
	const client = getClient();
	const address = RESUME_CONTRACT_ADDRESS as Address;

	// Sanity check: ensure RPC is Sepolia
	const chainId = await client.getChainId();
	if (chainId !== sepolia.id) {
		throw new Error(
			`RPC is on chainId ${chainId}, expected Sepolia (${sepolia.id}).`
		);
	}

	// Let viem handle everything else
	return (await client.readContract({
		address,
		abi: RESUME_CONTRACT_ABI,
		functionName: "resumeHash",
	})) as `0x${string}`;
}
