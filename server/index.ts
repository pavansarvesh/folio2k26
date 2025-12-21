import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/api/wakatime", async (_req, res) => {
	try {
		const wakatime_apiKey = process.env.WAKATIME_API_KEY;

		if (!wakatime_apiKey) {
			return res.status(500).json({ error: "Missing WAKATIME_API_KEY" });
		}

		const response = await fetch(
			"https://wakatime.com/api/v1/users/current/stats/last_7_days",
			{
				headers: {
					Authorization:
						"Basic " + Buffer.from(wakatime_apiKey).toString("base64"),
				},
			}
		);

		const data = await response.json();
		return res.status(response.ok ? 200 : response.status).json(data);
	} catch {
		res.status(500).json({ error: "Server Error" });
	}
});

app.get("/api/spotify", async (_req, res) => {
	try {
		const spotify_clientID = process.env.SPOTIFY_CLIENT_ID;
		const spotify_clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
		const spotify_refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

		if (!spotify_clientID || !spotify_clientSecret || !spotify_refreshToken) {
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
				refresh_token: spotify_refreshToken!,
			}),
		});

		if (!tokenRes.ok) {
			const err = await tokenRes.text();
			return res.status(500).json({
				error: "Token refresh failed",
				details: err,
			});
		}

		const { access_token } = await tokenRes.json();

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
			return res.status(500).json({
				error: "Spotify API failed",
				details: err,
			});
		}

		const data = await recentRes.json();
		const track = data.items?.[0]?.track;
		if (!track) {
			return res.status(200).json({
				error: "No recently played track",
			});
		}

		// Send clean Response
		return res.json({
			name: track.name,
			artists: track.artists.map((a: any) => a.name),
			album: track.album.name,
			image: track.album.images[1]?.url,
			url: track.external_urls.spotify,
		});
	} catch {
		res.status(500).json({ error: "Server Error" });
	}
});

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
