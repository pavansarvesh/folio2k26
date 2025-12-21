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
			details: string;
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

export const runtime = "nodejs";

export default async function handler(): Promise<Response> {
	try {
		const spotify_clientID = process.env.SPOTIFY_CLIENT_ID;
		const spotify_clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
		const spotify_refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

		if (!spotify_clientID || !spotify_clientSecret || !spotify_refreshToken) {
			return new Response(
				JSON.stringify({ error: "Missing Spotify environment variables" }),
				{
					status: 500,
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
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
			const err = await tokenRes.text();
			return new Response(
				JSON.stringify({ error: "Token refresh failed", details: err }),
				{
					status: 500,
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
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
			const err = await recentRes.text();
			return new Response(
				JSON.stringify({ error: "Spotify API failed", details: err }),
				{
					status: 500,
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
		}

		const data = (await recentRes.json()) as SpotifyRecentlyPlayedResponse;
		const track = data.items?.[0]?.track;
		if (!track) {
			return new Response(
				JSON.stringify({ error: "No recently played track" }),
				{
					status: 200,
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
		}

		// Send clean Response
		const res: SpotifyApiResponse = {
			name: track.name,
			artists: track.artists.map((a: SpotifyArtist) => a.name),
			album: track.album.name,
			image: track.album.images[1]?.url,
			url: track.external_urls.spotify,
		};
		return new Response(JSON.stringify(res), {
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		});
	} catch {
		return new Response(JSON.stringify({ error: "Server Error" }), {
			status: 500,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}
}
