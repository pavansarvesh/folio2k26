import { defineConfig, s } from "velite";

function slugify(input: string) {
	return input
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");
}

export default defineConfig({
	collections: {
		blogs: {
			name: "Blog",
			pattern: "blog/**/*.md",
			schema: s
				.object({
					title: s.string(),
					description: s.string().optional(),
					date: s.string(),
					tags: s.array(s.string()).optional(),
					body: s.markdown(),
				})
				.transform((data) => ({
					...data,
					slug: slugify(data.title),
				})),
		},
	},
});
