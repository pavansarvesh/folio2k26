const sections = [
    { id: "introduction", label: "Introduction" },
    { id: "methodology", label: "Methodology" },
    { id: "toolkit", label: "Toolkit" },
    { id: "techStack", label: "Tech Stack" },
    { id: "beyondTech", label: "Beyond Tech" },
]

export default function TableOfContents() {
    return (
        <nav className="w-full ">
            <div className="w-full">
                <p className="text-xs font-medium tracking-widest text-white/70">
                    TABLE OF CONTENTS
                </p>

                <ul className="mt-4 space-y-2 border-l border-white/10 pl-4 text-sm">
                    {sections.map((section) => (
                        <li key={section.id}>
                            <a
                                href={`#${section.id}`}
                                className="block text-white/60 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/30"
                            >
                                {section.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}