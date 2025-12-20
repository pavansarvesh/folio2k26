export default function Connect() {
  return (
    <section id="connect" className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="inline-flex items-center gap-3 text-xs tracking-widest text-white/70">
        <span className="h-[1px] w-10 bg-orange-500/60" />
        <span>CONNECT</span>
      </div>

      <h2 className="bbh-bartle-regular mt-6 max-w-5xl text-5xl font-medium leading-[1.02] tracking-tight text-white sm:text-5xl">
        Connect
      </h2>

      <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
        Want to collaborate or have an opportunity? Send me a message and I’ll get back to you.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="mailto:your.email@example.com"
          className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-orange-600"
        >
          EMAIL ME
        </a>
        <a
          href="https://github.com/yourname"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/15"
        >
          GITHUB
        </a>
      </div>
    </section>
  )
}
