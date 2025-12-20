export type Project = {
	slug: string;
	title: string;
	tagline: string;
	description: string;
	tech: string[];
	links: {
		github?: string;
		demo?: string;
		caseStudy?: string;
	};
	featured: boolean;
};

export const projects: Project[] = [
	{
		slug: "bi0sdev-site",
		title: "Bi0sDEV Site",
		tagline: "Secure Development • Innovation • Excellence",
		description: "Official Site of bi0sDEV, Infra team of 'bi0sblr'",
		tech: ["NextJS", "Figma", "Git", "Vercel"],
		links: {
			demo: "https://bi0sdev-site.vercel.app/",
		},
		featured: true,
	},
	{
		slug: "freshness-detector-and-quantity-counter",
		title: "Freshness detector and quantity counter",
		tagline: "Cryptographic primitives inspired by neural dynamics",
		description:
			"This AI model detects the real-time freshness of the fruit or vegetable and detects the shelf-life of the produce. The output is later given in a tabular format with Item name, Quantity and the total items of any product(including non-edible items) real-time",
		tech: [
			"Artificial Intelligence (AI)",
			"Jupyter",
			"TensorFlow",
			"NumPy",
			"Optical Character Recognition (OCR)",
			"Pandas",
			" Python",
		],
		links: {
			github:
				"https://github.com/pavansarvesh/FreshnessDetector-QuantityCounter",
		},
		featured: false,
	},
	{
		slug: "chat-application-using-sockets",
		title: "Chat application using Sockets",
		tagline: "Cryptographic primitives inspired by neural dynamics",
		description:
			"This project is about creating a simple chat server and client using TCP/IP sockets in C. The client and server can communicate with each other by sending and receiving messages. The project aims to enable multiple users to interact simultaneously.",
		tech: [
			"C/C++",
			"Ubuntu",
			"Networking",
			"Data Structures",
			"Linux",
			"Sockets",
		],
		links: {
			github: "https://github.com/pavansarvesh/Chat-Application",
		},
		featured: false,
	},
];
