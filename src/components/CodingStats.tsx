import { useEffect, useState } from "react";

type Language = {
	name: string;
	percent: number;
	text: string;
};

type WakaTimeResponse = {
	data: {
		human_readable_total: string;
		languages: Language[];
	};
};

type CachedWakaTime = {
	value: WakaTimeResponse | null;
	expiresAt: number;
};

let wakatimeCache: CachedWakaTime | null = null;

export default function CodingStats() {
	const [stats, setStats] = useState<WakaTimeResponse | null>(() => {
		const now = Date.now();
		if (wakatimeCache && wakatimeCache.expiresAt > now)
			return wakatimeCache.value;
		return null;
	});
	const [error, setError] = useState(false);

	useEffect(() => {
		const now = Date.now();
		if (wakatimeCache && wakatimeCache.expiresAt > now) return;

		const controller = new AbortController();

		fetch(`/api/wakatime`, { signal: controller.signal })
			.then(async (res) => {
				const data = await res.json().catch(() => null);
				if (!res.ok || !data || typeof data !== "object" || !("data" in data)) {
					setError(true);
					return;
				}
				const value = data as WakaTimeResponse;
				wakatimeCache = { value, expiresAt: Date.now() + 5 * 60_000 };
				setStats(value);
			})
			.catch((err) => {
				if (err?.name === "AbortError") return;
				setError(true);
			});

		return () => controller.abort();
	}, []);

	const human_readable_total = stats?.data.human_readable_total;
	const languages = stats?.data.languages ?? [];

	if (error) {
		return <p className='text-sm text-white/50'>WakaTime unavailable.</p>;
	}

	return (
		<div>
			<div className='flex items-baseline justify-between gap-6'>
				<div className='inline-flex items-center gap-3 text-xs tracking-widest text-white/70'>
					<span className='h-px w-10 bg-orange-500/60' />
					<span>(CODING STATS)</span>
				</div>

				<span className='text-xs text-white/50'>by WakaTime</span>
			</div>

			<div className='mt-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2'>
				<h4 className='bbh-bartle-regular text-sm font-medium text-white/90'>
					Top languages
				</h4>

				<span className='text-xs text-white/50'>
					{human_readable_total ? `Total: ${human_readable_total}` : "Loading…"}
				</span>
			</div>

			<ol className='mt-4 divide-y divide-white/10'>
				{languages.slice(0, 4).map((lang, idx) => {
					const percent = Number.isFinite(lang.percent) ? lang.percent : 0;
					const isTop = idx === 0;

					return (
						<li
							key={lang.name}
							className='flex items-center justify-between gap-6 py-3'
						>
							<div className='flex min-w-0 items-center gap-3'>
								<span className='w-5 text-xs tabular-nums text-white/40'>
									{idx + 1}.
								</span>
								<span
									className={`truncate text-sm ${isTop ? "font-semibold text-white" : "text-white/80"}`}
								>
									{lang.name}
								</span>
							</div>
							<span className='text-sm tabular-nums text-white/60'>
								{percent.toFixed(1)}%
							</span>
						</li>
					);
				})}
			</ol>
		</div>
	);
}
