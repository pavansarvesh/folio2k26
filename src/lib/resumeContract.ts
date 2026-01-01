const addr = "0x15618ea8F56D96dbB05e11f6Fa36E8423724A453";

if (!addr) {
	throw new Error(
		"VITE_RESUME_CONTRACT_ADDRESS is not defined. Check your frontend .env file and restart the dev server."
	);
}

export const RESUME_CONTRACT_ADDRESS = addr as `0x${string}`;

export const RESUME_CONTRACT_ABI = [
	{
		name: "resumeHash",
		type: "function",
		stateMutability: "view",
		inputs: [],
		outputs: [{ type: "bytes32" }],
	},
] as const;
