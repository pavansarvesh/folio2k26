import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
	_req: VercelRequest,
	res: VercelResponse
) {
	try {
		const apiKey = process.env.WAKATIME_API_KEY;

		if (!apiKey) {
			return res.status(500).json({ error: "Missing WAKATIME_API_KEY" });
		}

		const response = await fetch(
			"https://wakatime.com/api/v1/users/current/stats/last_7_days",
			{
				headers: {
					Authorization:
						"Basic " + Buffer.from(`${apiKey}:`).toString("base64"),
				},
			}
		);

		const data = await response.json();
		return res.status(response.ok ? 200 : response.status).json(data);
	} catch {
		return res.status(500).json({ error: "Server Error" });
	}
}
