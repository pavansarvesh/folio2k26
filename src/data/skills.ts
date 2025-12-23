export type skill = {
	category: string;
	items: string[];
};

const SKILLS: skill[] = [
	{
		category: "Frontend Development",
		items: [
			"NextJS",
			"ReactJS",
			"Vite",
			"Astro",
			"JavaScript (ES6+)",
			"TypeScript",
			"HTML5",
			"CSS3",
			"Tailwind CSS",
		],
	},
	{
		category: "Blockchain & Web3",
		items: ["Solidity ", "viem", "Foundry", "Hardhat"],
	},
	{ category: "UX Design", items: ["Wireframe", "Prototyping", "Mockups"] },
	{ category: "Backend & Databases", items: ["PostgreSQL", "Prisma"] },
	{ category: "Design Tools", items: ["Figma", "Adobe Photoshop"] },
	{ category: "Tools", items: ["Git", "GitHub", "Vercel", "npm/yarn"] },
	{
		category: "AI/ML",
		items: ["Python", "Anaconda", "Jupyter", "TensorFlow", "PyTorch"],
	},
	{
		category: "Other Languages",
		items: [
			"C/C++",
			"Python",
			"Java (Intermediate)",
			"Go (Beginner)",
			"Rust (Beginner)",
		],
	},
];

export default SKILLS;
