import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { education } from "../data/education";
import { experiences } from "../data/experience";
import TableOfContents from "../components/TableOfContents";
import SKILLS from "../data/skills";



// const CERTIFICATIONS: Array<{
//   title: string
//   date: string
//   meta?: string
//   href?: string
// }> = [
//   {
//     title: "Workshop On Cyber Security And Hacking",
//     date: "Nov 2023",
//   },
//   {
//     title: "Python (Basic) Certificate",
//     date: "Jun 2023",
//     meta: "Certificate ID 927101ACD6AD",
//   },
// ]

const AboutPage = () => {
  const renderTextWithLinks = (text: string) => {
    const parts = text.split(/(https?:\/\/\S+)/g)
    return parts.map((part, index) => {
      if (/^https?:\/\/\S+$/.test(part)) {
        return (
          <a
            key={`link-${index}`}
            href={part}
            target="_blank"
            rel="noreferrer"
            className="text-orange-500/90 underline-offset-4 hover:underline"
          >
            {part}
          </a>
        )
      }

      return <span key={`text-${index}`}>{part}</span>
    })
  }

  const renderDescription = (description: string) => {
    const normalized = description.replace(/\r\n/g, "\n").trim()
    if (!normalized) return null

    const linesFromNewlines = normalized
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)

    const linesFromDashes = normalized
      .split(/\s+-\s+/g)
      .map((line) => line.trim())
      .filter(Boolean)

    const lines = linesFromNewlines.length > 1 ? linesFromNewlines : linesFromDashes

    if (lines.length <= 1) {
      return renderTextWithLinks(normalized)
    }

    return (
      <ul className="space-y-2">
        {lines.map((line, index) => {
          const cleaned = line.replace(/^[-•]\s*/, "")
          return (
            <li key={`${index}-${cleaned.slice(0, 16)}`} className="flex gap-2">
              <span className="mt-1 text-white/40" aria-hidden="true">
                •
              </span>
              <span className="min-w-0">{renderTextWithLinks(cleaned)}</span>
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-9">
            <section id="introduction">
              <div className="inline-flex items-center gap-3 text-xs tracking-widest text-white/70">
                <span className="h-px w-10 bg-orange-500/60" />
                <span>ABOUT</span>
              </div>

              <h1 className="bbh-bartle-regular mt-6 text-5xl font-medium leading-[1.02] tracking-tight text-white sm:text-6xl">
                About ME
              </h1>

              <p className="mt-6 text-base leading-7 text-white/70 sm:text-lg">
                I’m an Electronics and Computer Engineering student at Amrita Vishwa Vidyapeetham, Bangalore, focused on building
                reliable systems and products end-to-end. My core focus is backend and smart contract development—designing clean
                APIs, solid data models, and secure on-chain logic. I also enjoy building polished frontends when it helps ship a
                complete product.
              </p>
            </section>

            {/* <section className="mt-12" id="certifications">
              <h2 className="text-sm font-medium tracking-widest text-orange-500/80">CERTIFICATIONS</h2>
              <div className="mt-4 grid gap-3">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={`${cert.title}-${cert.date}`}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div className="min-w-0">
                        <div className="truncate text-base font-semibold text-white">
                          {cert.title}
                        </div>
                        {cert.meta ? (
                          <div className="mt-1 text-xs text-white/60">{cert.meta}</div>
                        ) : null}
                      </div>

                      <div className="flex items-center gap-3 text-xs text-white/60">
                        <span>{cert.date}</span>
                        <span className="text-white/30" aria-hidden="true">
                          |
                        </span>
                        {cert.href ? (
                          <a
                            href={cert.href}
                            target="_blank"
                            rel="noreferrer"
                            className="underline-offset-4 hover:text-orange-500 hover:underline"
                          >
                            View Certificate
                          </a>
                        ) : (
                          <span className="text-white/40">View Certificate</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section> */}

            <section className="mt-12" id="education">
              <h2 className="text-sm font-medium tracking-widest text-orange-500/80">EDUCATION</h2>
              <div className="mt-4 grid gap-4">
                {education.map((edu) => (
                  <div
                    key={`${edu.slug}`}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <div className="text-base font-semibold text-white">
                          {edu.course}
                        </div>
                          <div className="mt-1 text-sm text-white/70">
                            <span>{edu.institute},</span>{" "}
                            <span className="font-mono text-white/60">{edu.location}</span>
                          </div>
                      </div>
                      <div className="shrink-0 whitespace-nowrap text-right text-xs font-mono tabular-nums text-white/60 sm:min-w-42">
                        {edu.startDate} - {edu.endDate}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12" id="experience">
              <h2 className="text-sm font-medium tracking-widest text-orange-500/80">EXPERIENCE</h2>
              <div className="mt-4 grid gap-4">
                {experiences.map((experience) =>(
                  <div
                  key={`${experience.slug}`}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <div className="text-base font-semibold text-white">
                        {experience.expTitle}
                      </div>
                      <div className="mt-1 text-sm text-white/70">
                        <span className="truncate">{experience.company}</span>
                        {experience.location ? (
                          <>
                            <span className="font-mono text-white/60">, {experience.location}</span>
                          </>
                        ) : null}
                      </div>
                      <div className="mt-3 text-sm text-white/70">
                        {renderDescription(experience.description)}
                      </div>
                    </div>
                    <div className="shrink-0 whitespace-nowrap text-right text-xs font-mono tabular-nums text-white/60 sm:min-w-42">
                      {experience.startDate} - {experience.endDate}
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </section>

            <section className="mt-12" id="skills">
              <h2 className="text-sm font-medium tracking-widest text-orange-500/80">SKILLS</h2>

              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="mt-2 grid gap-3">
                  {SKILLS.map(({ category, items }) => (
                    <div key={category} className="rounded-xl border border-white/10 bg-neutral-950/40 p-4">
                      <div className="text-xs font-medium tracking-widest text-white/80">{category}</div>
                      <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/70">
                        {items.map((item) => (
                          <span key={item} className="rounded bg-white/5 px-2 py-1">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
          <aside className="hidden md:col-span-3 md:block md:self-start md:justify-self-end md:w-full md:max-w-xs">
            <TableOfContents />
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage