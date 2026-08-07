type SpotifyApiResponse =
	| {
			name: string;
			artists: string[];
			album: string;
			image?: string;
			url: string;
	  }
	| {
			error: string;
			details?: string;
	  };

type SpotifyTokenResponse = {
	access_token: string;
};

type SpotifyArtist = {
	name: string;
};

type SpotifyImage = {
	url: string;
};

type SpotifyAlbum = {
	name: string;
	images: SpotifyImage[];
};

type SpotifyTrack = {
	name: string;
	artists: SpotifyArtist[];
	album: SpotifyAlbum;
	external_urls: {
		spotify: string;
	};
};

type SpotifyRecentlyPlayedResponse = {
	items?: Array<{
		track?: SpotifyTrack;
	}>;
};

import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
	_req: VercelRequest,
	res: VercelResponse
) {
	try {
		// Allow Vercel/CDN caching to reduce upstream Spotify calls.
		// Keep it short since "recently played" changes frequently.
		res.setHeader(
			"Cache-Control",
			"public, s-maxage=60, stale-while-revalidate=300"
		);

		const spotify_clientID = process.env.SPOTIFY_CLIENT_ID;
		const spotify_clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
		const spotify_refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

		if (!spotify_clientID || !spotify_clientSecret || !spotify_refreshToken) {
			res.setHeader("Cache-Control", "no-store");
			return res
				.status(500)
				.json({ error: "Missing Spotify environment variables" });
		}
		// Fetch Access Token
		const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization:
					"Basic " +
					Buffer.from(`${spotify_clientID}:${spotify_clientSecret}`).toString(
						"base64"
					),
			},
			body: new URLSearchParams({
				grant_type: "refresh_token",
				refresh_token: spotify_refreshToken,
			}),
		});

		if (!tokenRes.ok) {
			res.setHeader("Cache-Control", "no-store");
			const err = await tokenRes.text();
			return res.status(500).json({
				error: "Token refresh failed",
				details: err,
			});
		}

		const { access_token } = (await tokenRes.json()) as SpotifyTokenResponse;

		// Fetch Recently Played
		const recentRes = await fetch(
			"https://api.spotify.com/v1/me/player/recently-played?limit=1",
			{
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			}
		);

		if (!recentRes.ok) {
			res.setHeader("Cache-Control", "no-store");
			const err = await recentRes.text();
			return res.status(500).json({
				error: "Spotify API failed",
				details: err,
			});
		}

		const data = (await recentRes.json()) as SpotifyRecentlyPlayedResponse;
		const track = data.items?.[0]?.track;
		if (!track) {
			return res.status(200).json({ error: "No recently played track" });
		}

		// Send clean Response
		const payload: SpotifyApiResponse = {
			name: track.name,
			artists: track.artists.map((a: SpotifyArtist) => a.name),
			album: track.album.name,
			image: track.album.images[1]?.url,
			url: track.external_urls.spotify,
		};
		return res.status(200).json(payload);
	} catch (err) {
    console.error(err);

    res.setHeader("Cache-Control", "no-store");
    return res.status(500).json({
        error: "Server Error",
        details: err instanceof Error ? err.message : String(err),
    });
}
}
