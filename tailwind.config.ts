import type { Config } from "tailwindcss";

export default {
	content: ["./index.html", "./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Roboto Mono", "monospace"],
				mono: ["Roboto Mono", "monospace"],
			},
			keyframes: {
				marquee: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-50%)" },
				},
			},
			animation: {
				marquee: "marquee 20s linear infinite",
			},
		},
	},
	plugins: [],
} satisfies Config;
