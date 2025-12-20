const About = () => {
  return (
    <section id="about" className="relative mx-auto flex min-h-[60vh] max-w-6xl flex-col px-6 py-16 sm:py-20">
      <div className="inline-flex items-center gap-3 text-xs tracking-widest text-white/70">
        <span className="h-[1px] w-10 bg-orange-500/60" />
        <span>ABOUT</span>
      </div>

      <h2 className="bbh-bartle-regular mt-6 max-w-5xl text-5xl font-medium leading-[1.02] tracking-tight text-white sm:text-5xl">
        ABOUT
      </h2>

      <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
        I’m a student developer focused on building clean, modern interfaces and learning solid fundamentals.
        I enjoy React + TypeScript, UI design, and shipping small projects end-to-end.
      </p>
    </section>
  )
}

export default About