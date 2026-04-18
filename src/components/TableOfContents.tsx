import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react";

type TocSection = {
	id: string;
	label: string;
};

const defaultSections: TocSection[] = [
	{ id: "introduction", label: "Introduction" },
	{ id: "education", label: "Education" },
	{ id: "experience", label: "Experience" },
	{ id: "skills", label: "Skills" },
	{ id: "toolkit", label: "Toolkit" },
];

export default function TableOfContents({
	sections = defaultSections,
}: {
	sections?: TocSection[];
}) {
	const ids = useMemo(() => sections.map((s) => s.id), [sections]);
	const [activeId, setActiveId] = useState<string>(() => {
		const hash = typeof window !== "undefined" ? window.location.hash : "";
		return hash ? hash.replace(/^#/, "") : sections[0]?.id || "";
	});
	const listRef = useRef<HTMLUListElement | null>(null);

	useEffect(() => {
		if (typeof window === "undefined") return;
		const onHashChange = () => {
			const next = window.location.hash.replace(/^#/, "");
			if (next) setActiveId(next);
		};
		window.addEventListener("hashchange", onHashChange);
		return () => window.removeEventListener("hashchange", onHashChange);
	}, []);

	useEffect(() => {
		if (typeof window === "undefined") return;

		const targets = ids
			.map((id) => document.getElementById(id))
			.filter((el): el is HTMLElement => Boolean(el));

		if (!targets.length) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort(
						(a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
					);

				const best = visible[0];
				if (best?.target?.id) setActiveId(best.target.id);
			},
			{
				root: null,
				threshold: [0.1, 0.25, 0.5, 0.75],
				rootMargin: "-20% 0px -65% 0px",
			}
		);

		targets.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, [ids]);

	useEffect(() => {
		const list = listRef.current;
		if (!list || !activeId) return;
		if (list.scrollHeight <= list.clientHeight) return;
		const active = list.querySelector<HTMLAnchorElement>(
			`a[data-toc-id="${CSS.escape(activeId)}"]`
		);
		active?.scrollIntoView({ block: "nearest" });
	}, [activeId]);

	const onJump = (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		const el = document.getElementById(id);
		if (!el) return;
		window.history.pushState(null, "", `#${id}`);
		setActiveId(id);
		el.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	return (
		<nav className='w-full '>
			<div className='w-full'>
				<p className='text-xs font-medium tracking-widest text-white/70'>
					TABLE OF CONTENTS
				</p>

				<ul
					ref={listRef}
					className='mt-4 space-y-2 border-l border-white/10 pl-4 text-sm'
				>
					{sections.map((section) => (
						<li key={section.id}>
							<a
								href={`#${section.id}`}
								data-toc-id={section.id}
								onClick={onJump(section.id)}
								aria-current={activeId === section.id ? "location" : undefined}
								className={
									activeId === section.id
										? "block font-medium text-[#ff8c42]/90"
										: "block text-white/60 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8c42]/30"
								}
							>
								{section.label}
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}
