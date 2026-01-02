import { getClient } from "./viem";
import { RESUME_CONTRACT_ADDRESS, RESUME_CONTRACT_ABI } from "./resumeContract";

import type { Address, PublicClient } from "viem";
import { sepolia } from "viem/chains";

type LogReaderClient = Pick<PublicClient, "getBlockNumber" | "getLogs">;

export type OnChainResumeHashResult = {
	resumeHash: `0x${string}`;
	blockNumber: bigint;
	txHash: `0x${string}`;
	timestamp: number;
	date: Date;
};

export async function getOnChainResumeHash(): Promise<OnChainResumeHashResult> {
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
	const resumeHash = (await client.readContract({
		address,
		abi: RESUME_CONTRACT_ABI,
		functionName: "resumeHash",
	})) as `0x${string}`;

	// Fetch latest ResumeUpdated event
	const latestLog = await getLatestResumeUpdateLog(client, address);

	//Fetch block to derive time stamp

	const block = await client.getBlock({
		blockNumber: latestLog.blockNumber,
	});

	const timestamp = Number(block.timestamp);
	const date = new Date(timestamp * 1000);

	return {
		resumeHash,
		blockNumber: latestLog.blockNumber,
		txHash: latestLog.transactionHash,
		timestamp,
		date,
	};
}

async function getLatestResumeUpdateLog(
	client: LogReaderClient,
	address: Address
) {
	const latestBlock = await client.getBlockNumber();
	const STEP = 50_000n;

	for (let from = latestBlock; from > 0n; from -= STEP) {
		const to = from;
		const start = from > STEP ? from - STEP : 0n;

		const logs = await client.getLogs({
			address,
			event: {
				type: "event",
				name: "ResumeUpdated",
				inputs: [{ name: "newHash", type: "bytes32", indexed: false }],
			},
			fromBlock: start,
			toBlock: to,
		});

		if (logs.length > 0) {
			return logs[logs.length - 1];
		}
	}

	throw new Error("No ResumeUpdated events found.");
}
