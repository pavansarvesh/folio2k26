const addr = "0x0ee507997fc1bd2078712e8088c508a971204889";

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
