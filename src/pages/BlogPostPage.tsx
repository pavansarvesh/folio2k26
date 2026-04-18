import { useEffect, useMemo, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { blogs } from "../../.velite";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import slugify from "../lib/slugify";
import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import css from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import plaintext from "highlight.js/lib/languages/plaintext";
import python from "highlight.js/lib/languages/python";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import TableOfContents from "../components/TableOfContents";

hljs.registerLanguage("bash", bash);
hljs.registerLanguage("sh", bash);
hljs.registerLanguage("css", css);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("js", javascript);
hljs.registerLanguage("json", json);
hljs.registerLanguage("plaintext", plaintext);
hljs.registerLanguage("text", plaintext);
hljs.registerLanguage("python", python);
hljs.registerLanguage("py", python);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("ts", typescript);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("html", xml);

type TocSection = {
	id: string;
	label: string;
};

function formatDate(dateString: string) {
	const date = new Date(dateString);
	if (Number.isNaN(date.getTime())) return dateString;
	return date.toLocaleDateString(undefined, {
		year: "numeric",
		month: "short",
		day: "2-digit",
	});
}

const BlogPostPage = () => {
	const { slug } = useParams<{ slug: string }>();
	const blog = blogs.find((b) => (b.slug ?? slugify(b.title)) === slug);
	const contentRef = useRef<HTMLDivElement | null>(null);

	const meta = useMemo(() => {
		if (!blog) return null;
		return {
			dateText: formatDate(blog.date),
			tags: blog.tags ?? [],
		};
	}, [blog]);

	const { html, tocSections } = useMemo(() => {
		if (!blog?.body) return { html: "", tocSections: [] as TocSection[] };

		// Guard for environments without DOM APIs (e.g. SSR).
		if (typeof window === "undefined" || typeof DOMParser === "undefined") {
			return { html: blog.body, tocSections: [] as TocSection[] };
		}

		const doc = new DOMParser().parseFromString(blog.body, "text/html");

		const existing = new Set<string>();
		doc.querySelectorAll("[id]").forEach((el) => {
			const id = (el as HTMLElement).id;
			if (id) existing.add(id);
		});

		const sections: TocSection[] = [];
		const seen = new Map<string, number>();
		const headings = Array.from(doc.querySelectorAll("h2, h3"));
		for (const heading of headings) {
			const label = (heading.textContent ?? "").trim();
			if (!label) continue;

			const base = slugify(label) || "section";
			const count = (seen.get(base) ?? 0) + 1;
			seen.set(base, count);
			const nextId = count === 1 ? base : `${base}-${count}`;

			if (!existing.has(nextId)) {
				(heading as HTMLElement).id = nextId;
				existing.add(nextId);
			}

			sections.push({ id: nextId, label });
		}

		return { html: doc.body.innerHTML, tocSections: sections };
	}, [blog]);

	useEffect(() => {
		const root = contentRef.current;
		if (!root) return;

		root.querySelectorAll("pre code").forEach((el) => {
			hljs.highlightElement(el as HTMLElement);
		});
	}, [slug, html]);

	if (!blog) {
		return (
			<div
				id='top'
				className='relative min-h-screen overflow-hidden bg-neutral-950 text-white'
			>
				{/* background */}
				<div className='pointer-events-none absolute inset-0'>
					<div className='absolute inset-0 bg-neutral-950' />
					<div className='absolute inset-0 bg-linear-to-b from-transparent via-neutral-950/10 to-neutral-950/35' />
				</div>

				<Navbar />
				<main className='blog-shell relative mx-auto max-w-400 px-8 pb-16 pt-32 lg:px-16'>
					<div className='inline-flex items-center gap-4 font-["JetBrains_Mono",monospace] text-xs tracking-[0.3em] text-[#ff8c42]'>
						<span className='h-0.5 w-12 bg-[#ff8c42]' />
						<span>BLOG</span>
					</div>

					<h1 className='mt-5 text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl'>
						Blog not found
					</h1>

					<p className='mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base'>
						This blog post doesn’t exist (or the link is wrong).
					</p>

					<div className='mt-8 flex flex-wrap items-center gap-3'>
						<Link
							to='/blogs'
							className='inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800'
						>
							Back to blogs
						</Link>
						<Link
							to='/'
							className='inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-orange-600'
						>
							Go home
						</Link>
					</div>
				</main>
				<div className='relative'>
					<Footer />
				</div>
			</div>
		);
	}

	return (
		<div
			id='top'
			className='relative min-h-screen overflow-hidden bg-neutral-950 text-white'
		>
			{/* background */}
			<div className='pointer-events-none absolute inset-0'>
				<div className='absolute inset-0 bg-neutral-950' />
				<div className='absolute inset-0 bg-linear-to-b from-transparent via-neutral-950/10 to-neutral-950/35' />
			</div>

			<Navbar />

			<main className='relative'>
				<div className='blog-shell'>
					<header className='mx-auto max-w-400 px-8 pb-6 pt-32 lg:px-16'>
						<div className='flex flex-col gap-6'>
							<div className='flex items-center justify-between gap-4'>
								<Link
									to='/blogs'
									className='text-xs tracking-widest text-white/70 hover:text-orange-500'
								>
									← BACK TO BLOGS
								</Link>
							</div>

							<div className='inline-flex items-center gap-4 font-["JetBrains_Mono",monospace] text-xs tracking-[0.3em] text-[#ff8c42]'>
								<span className='h-0.5 w-12 bg-[#ff8c42]' />
								<span className='text-orange-500/80'>BLOG</span>
							</div>

							<div className='space-y-3'>
								<h1 className='bbh-bartle-regular text-4xl font-medium leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl'>
									{blog.title}
								</h1>

								{meta ? (
									<div className='flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-white/60'>
										<span className='text-white/70'>{meta.dateText}</span>
										{meta.tags.length ? (
											<>
												<span className='text-white/30' aria-hidden='true'>
													•
												</span>
												{meta.tags.map((tag) => (
													<span
														key={tag}
														className='rounded bg-white/5 px-2 py-1'
													>
														{tag}
													</span>
												))}
											</>
										) : null}
									</div>
								) : null}
							</div>

							{blog.description ? (
								<p className='max-w-3xl text-base leading-7 text-white/70 sm:text-lg'>
									{blog.description}
								</p>
							) : null}
						</div>
					</header>

					<section className='mx-auto max-w-400 px-8 pb-14 lg:px-16 sm:pb-16'>
						<div className='grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start'>
							<article className='min-w-0 border-t border-white/10 pt-8'>
								<div
									className='blog-prose text-white/80'
									ref={contentRef}
									dangerouslySetInnerHTML={{ __html: html }}
								/>
							</article>

							{tocSections.length ? (
								<aside className='hidden lg:block'>
									<div className='sticky top-24 rounded-2xl border border-orange-500/15 bg-neutral-900/40 p-6 ring-1 ring-orange-500/10'>
										<TableOfContents sections={tocSections} />
									</div>
								</aside>
							) : null}
						</div>
					</section>
				</div>
			</main>

			<div className='relative'>
				<Footer />
			</div>
		</div>
	);
};

export default BlogPostPage;
