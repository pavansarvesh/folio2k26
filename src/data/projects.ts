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
		tech: ["Artificial Intelligence (AI)", "Jupyter", "TensorFlow", "NumPy", "Optical Character Recognition (OCR)", "Pandas" ," Python"],
		links: {
			github:
				"https://github.com/pavansarvesh/FreshnessDetector-QuantityCounter",
		},
		featured: false,
	},
];
