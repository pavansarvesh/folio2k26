export type Project = {
	slug: string;
	title: string;
	tagline: string;
	description: string;
	caseStudy?: {
		overview?: string;
		problem?: string;
		solution?: string;
		highlights?: string[];
		learnings?: string[];
		nextSteps?: string[];
	};
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
		slug: "folio2k26",
		title: "Folio 2k26",
		tagline: "My Personal Site",
		description:
			"A fast, responsive portfolio built as a product: clear navigation, consistent sections, and performance-first UI.",
		caseStudy: {
			overview:
				"A fast, responsive portfolio built to showcase projects, stats, and the small details that make a personal site feel alive. The goal was to make everything feel cohesive: the same design language across pages, predictable spacing, and a layout that scales as new content gets added.",
			problem:
				"Most personal sites either feel like a single landing page or get messy as soon as you add more sections. I wanted something that felt like a real product: clean navigation, consistent styling, and pages that load quickly — while keeping the stack simple enough to iterate on weekly.",
			solution:
				"I built the site as a Vite + React SPA and treated each page like a reusable layout: hero, projects grid, and project detail pages all share the same spacing and typography rules. I kept components small and composable, so content changes don’t require layout rewrites.",
			highlights: [
				"SPA routing with clean URLs for projects and sections",
				"Reusable cards/sections to keep the layout consistent",
				"Content stored in structured data for easy updates",
				"Deployed on Vercel for quick iteration",
			],
			learnings: [
				"Small consistency wins compound (spacing, typography, states)",
				"Writing content in structured blocks makes pages easier to evolve",
				"Designing for scanability matters as much as aesthetics",
			],
			nextSteps: [
				"Add richer write-ups per project (media + metrics)",
				"Improve SEO + OpenGraph previews",
				"Add a consistent writing format for case studies",
			],
		},
		tech: ["Vite", "Figma", "Git", "Vercel"],
		links: {
			demo: "/",
		},
		featured: true,
	},
	{
		slug: "learnify",
		title: "Learnify",
		tagline: "A Learning Platform",
		description:
			"A lightweight learning platform focused on clean navigation, readable lesson layouts, and scaling content without UI clutter.",
		caseStudy: {
			overview:
				"A lightweight learning platform focused on clear navigation, readable content blocks, and a UI that stays out of the way. The emphasis is on information hierarchy: users should always know where they are, what they’ve covered, and what’s next.",
			problem:
				"Learning content tends to sprawl: inconsistent formatting, hard-to-scan pages, and navigation that breaks once you add more lessons. The goal was to present content in a structured way and keep the experience fast and approachable as the library grows.",
			solution:
				"I organized the UI around simple sections and reusable layout components (headers, content blocks, callouts). Lessons follow a consistent structure, which keeps the authoring process predictable and the reading experience calm.",
			highlights: [
				"Component-driven UI for repeatable lesson layouts",
				"Clear hierarchy: overview → content → next step",
				"Fast SPA navigation to keep reading flow uninterrupted",
				"Deployed and shared via a public link",
			],
			learnings: [
				"Good information hierarchy beats visual noise",
				"Consistency is a feature in learning UX",
				"Reusable layout primitives make scaling easier",
			],
			nextSteps: [
				"Add search and better content organization",
				"Add an authoring workflow for new lessons",
				"Add progress tracking and a lightweight syllabus view",
			],
		},
		tech: ["NextJS", "Figma", "Git", "Vercel"],
		links: {
			demo: "https://chatnlearn.vercel.app/",
			github: "https://github.com/pavansarvesh/Learnify",
		},
		featured: true,
	},
	{
		slug: "bi0sdev-site",
		title: "Bi0sDEV Site",
		tagline: "Secure Development • Innovation • Excellence",
		description:
			"A public-facing team site built for credibility and maintainability: clear sections, predictable updates, and fast static delivery.",
		caseStudy: {
			overview:
				"A public-facing site for a security-focused development team — designed to be clear, credible, and easy to maintain. The main job of the site is communication: who the team is, what they do, and how to follow updates without needing heavy infrastructure.",
			problem:
				"Team sites often fail in two ways: they look untrustworthy, or they become hard to update. The requirement was a simple, professional presence that communicates mission and work, ships quickly, and doesn’t depend on complex backend systems.",
			solution:
				"I built a Next.js site with straightforward sections and a maintainable structure: simple data-driven content, reusable UI blocks, and a deployment setup that encourages shipping small updates often.",
			highlights: [
				"Fast, static-friendly pages for reliable delivery",
				"Clean layout for team identity and updates",
				"Structure optimized for quick content edits",
			],
			learnings: [
				"Content clarity matters more than effects",
				"Predictable updates build trust",
				"Keep deployment boring and reliable for team sites",
			],
			nextSteps: [
				"Add more technical write-ups",
				"Improve contributor workflow for updates",
				"Add a lightweight changelog/news feed section",
			],
		},
		tech: ["NextJS", "Figma", "Git", "Vercel"],
		links: {
			demo: "https://bi0sdev-site.vercel.app/",
		},
		featured: false,
	},
	{
		slug: "freshness-detector-and-quantity-counter",
		title: "Freshness detector and quantity counter",
		tagline: "Realtime Billing System",
		description:
			"A real-time computer vision pipeline that estimates produce freshness, counts items, and outputs a structured table for ops/billing workflows.",
		caseStudy: {
			overview:
				"A computer-vision pipeline that estimates produce freshness and counts items, then summarizes results in a table for quick operational use. Built for a Flipkart GRID 6.0 problem statement: real-time inputs, consistent output formatting, and a workflow that can plug into billing or inventory operations.",
			problem:
				"Manual freshness checks and item counting don’t scale in a high-throughput environment. The hard part isn’t only prediction accuracy — it’s turning noisy real-time inputs into clean, structured output (item name, quantity, totals) that downstream systems can actually use.",
			solution:
				"I combined a CV model for freshness detection with OCR and deterministic tabular post-processing. The pipeline separates inference from reporting: run predictions, extract structured signals, then format results into a table that’s easy to validate and export.",
			highlights: [
				"Real-time prediction loop designed for live input",
				"OCR + structured table output for downstream usage",
				"Clear separation of model inference vs reporting",
				"Designed around operational output, not just metrics",
			],
			learnings: [
				"End-to-end reliability matters as much as model accuracy",
				"Good output formatting increases usability",
				"Post-processing is where prototypes become products",
			],
			nextSteps: [
				"Add calibration/benchmarking on more datasets",
				"Improve UX around confidence + edge cases",
				"Add better dataset/version tracking for reproducibility",
			],
		},
		tech: [
			"Artificial Intelligence (AI)",
			"Jupyter",
			"TensorFlow",
			"NumPy",
			"Optical Character Recognition (OCR)",
			"Pandas",
			"Python",
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
		tagline: "Multi-client TCP chat in C",
		description:
			"A minimal TCP chat client/server in C, built to learn sockets, concurrency basics, and real-world message handling.",
		caseStudy: {
			overview:
				"A minimal TCP chat system: a server that handles connections and a client that sends/receives messages — built to understand networking fundamentals. The goal was to move from toy examples to something interactive: multiple clients, real message flow, and enough structure to debug issues.",
			problem:
				"I wanted a practical way to learn sockets, message framing, and multi-user communication — beyond just reading docs. Networking bugs can be subtle, so the project needed clear logging and a protocol simple enough to reason about.",
			solution:
				"I implemented a simple client/server protocol over TCP, focused on clarity and correctness, then iterated on concurrency and message handling. The server owns connection management and broadcasting, while the client focuses on input/output flow and resilience to disconnects.",
			highlights: [
				"Client/server split with TCP sockets",
				"Multiple client interaction model",
				"Simple protocol designed for easy debugging",
				"Linux-first dev workflow",
			],
			learnings: [
				"Protocol design matters early",
				"Debugging networks requires good logging",
				"Message framing is the difference between demos and reliability",
			],
			nextSteps: [
				"Add usernames + rooms",
				"Improve message framing and error handling",
				"Add basic tests for protocol parsing",
			],
		},
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
