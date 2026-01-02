export type Tools = {
	id: string;
	category: string;
	tool: Tool[];
};
type Tool = {
	id: string;
	name: string;
	iconPath: string;
	description: string;
	link: string;
};

export const tools: Tools[] = [
	{
		id: "productivity",
		category: "Productivity",
		tool: [
			{
				id: "zen",
				name: "Zen",
				iconPath: "/toolsIcon/zen.png",
				description: "Browser",
				link: "https://zen-browser.app/",
			},
			{
				id: "brave",
				name: "Brave",
				iconPath: "/toolsIcon/brave.svg",
				description: "Browser",
				link: "https://brave.com/",
			},
			{
				id: "notion",
				name: "Notion",
				iconPath: "/toolsIcon/notion.png",
				description: "Notes",
				link: "https://www.notion.com/",
			},
			{
				id: "spotify",
				name: "Spotify",
				iconPath: "/toolsIcon/spotify.png",
				description: "Music",
				link: "https://open.spotify.com/",
			},
		],
	},
	{
		id: "development",
		category: "Development",
		tool: [
			{
				id: "vs-code",
				name: "Visual Studio Code",
				iconPath: "/toolsIcon/vscode.png",
				description: "IDE",
				link: "https://code.visualstudio.com/",
			},
			{
				id: "docker",
				name: "Docker",
				iconPath: "/toolsIcon/docker.png",
				description: "Containerization Platform",
				link: "https://www.docker.com/",
			},
			{
				id: "git",
				name: "Git",
				iconPath: "/toolsIcon/git.png",
				description: "Version Control",
				link: "https://git-scm.com/",
			},
			{
				id: "github",
				name: "Github",
				iconPath: "/toolsIcon/github.png",
				description: "Repository",
				link: "https://github.com/",
			},
		],
	},
	{
		id: "blockchain-and-web3",
		category: "Blockchain & Web3",
		tool: [
			{
				id: "remix-ide",
				name: "Remix IDE",
				iconPath: "/toolsIcon/remix.png",
				description: "IDE",
				link: "https://remix.live/",
			},
			{
				id: "foundry",
				name: "Foundry",
				iconPath: "/toolsIcon/foundry.png",
				description: "Ethereum Development Framework",
				link: "https://getfoundry.sh/",
			},
			{
				id: "metamask",
				name: "Metamask",
				iconPath: "/toolsIcon/metamask.svg",
				description: "Crypto Wallet",
				link: "https://metamask.io/",
			},
			{
				id: "hardhat",
				name: "Hardhat",
				iconPath: "/toolsIcon/hardhat.svg",
				description: "Ethereum Development Framework",
				link: "https://hardhat.org/",
			},
		],
	},
	{
		id: "my-rig",
		category: "My Rig",
		tool: [
			{
				id: "hp-victus-15",
				name: "HP VICTUS 15 ",
				iconPath: "/toolsIcon/victus.png",
				description: "Laptop",
				link: "https://www.hp.com/in-en/gaming-pc/laptops/2022-victus-15-amd-nvidia.html",
			},
			{
				id: "operating-system",
				name: "Windows 11 ",
				iconPath: "/toolsIcon/windows11.svg",
				description: "Operating System",
				link: "https://www.microsoft.com/en-us/software-download/windows11",
			},
			{
				id: "wsl",
				name: "Ubuntu 24.0 LTS",
				iconPath: "/toolsIcon/ubuntu.png",
				description: "WSL 2",
				link: "https://ubuntu.com/desktop/wsl",
			},
		],
	},
];
