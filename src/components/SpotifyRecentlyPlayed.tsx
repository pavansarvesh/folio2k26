import { useEffect, useState } from "react";

type Track = {
  name: string;
  artists: string[];
  album: string;
  image: string;
  url: string;
};

const SPOTIFY_PROFILE_URL = "https://open.spotify.com/user/31gei7c57di3xjoy7zqzgqx6bnpy?si=3bf3390242af48ca";

export default function SpotifyRecentlyPlayed() {
  const [track, setTrack] = useState<Track | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const apiBase = import.meta.env.DEV ? "http://localhost:3001" : ""
    fetch(`${apiBase}/api/spotify`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
      })
      .then(setTrack)
      .catch(() => setError(true));
  }, []);

  if (error) {
    return <p className="text-sm text-neutral-500">Spotify unavailable.</p>;
  }

  if (!track) {
    return <p className="text-sm text-neutral-500">Loading…</p>;
  }

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-4">
        <div className="flex items-start gap-4">
          <img src={track.image} alt={track.name} className="h-14 w-14 rounded-lg" />

          <div className="min-w-0">
            <p className="bbh-bartle-regular truncate text-base font-semibold text-white">
              {track.name}
            </p>
            <p className="truncate text-sm text-neutral-300">{track.artists.join(", ")}</p>
            <p className="truncate text-xs text-neutral-500">Album • {track.album}</p>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <div className={SPOTIFY_PROFILE_URL ? "grid grid-cols-2 gap-2" : "grid grid-cols-1"}>
          <a
            href={track.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900/40 px-3 py-2 text-xs font-semibold text-neutral-200 transition hover:bg-neutral-800/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-600 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
            aria-label={`Open ${track.name} on Spotify`}
          >
            <img src="/logo/Spotify.png" alt="Spotify" className="h-4 w-4" />
            Open On Spotify
          </a>

          {SPOTIFY_PROFILE_URL ? (
            <a
              href={SPOTIFY_PROFILE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900/40 px-3 py-2 text-xs font-semibold text-neutral-200 transition hover:bg-neutral-800/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-600 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              aria-label="Follow me on Spotify"
            >
              <img src="/logo/Spotify.png" alt="Spotify" className="h-4 w-4" />
              Follow me
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
