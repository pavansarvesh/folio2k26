export default function LoadingScreen() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-neutral-950" />
        <div className="absolute inset-0 opacity-95 [background-image:radial-gradient(rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/10 to-neutral-950/35" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6">
        <div className="inline-flex items-center gap-3 text-xs tracking-widest text-white/70">
          <span className="h-[1px] w-10 bg-orange-500/60" />
          <span>LOADING</span>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-orange-500" />
          <div className="h-2 w-2 rounded-full bg-white/20" />
          <div className="h-2 w-2 rounded-full bg-white/20" />
        </div>
      </div>
    </div>
  )
}
