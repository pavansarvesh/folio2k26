export default async function handler(req: Request): Promise<Response> {
	try {
		void req;

		const apiKey = process.env.WAKATIME_API_KEY;

		if (!apiKey) {
			return new Response(
				JSON.stringify({ error: "Missing WAKATIME_API_KEY" }),
				{ status: 500 }
			);
		}

		const response = await fetch(
			"https://wakatime.com/api/v1/users/current/stats/last_7_days",
			{
				headers: {
					Authorization: "Basic " + Buffer.from(apiKey).toString("base64"),
				},
			}
		);

		const data = await response.json();

		return new Response(JSON.stringify(data), {
			status: response.ok ? 200 : response.status,
			headers: {
				"Content-Type": "application/json",
			},
		});
	} catch {
		return new Response(JSON.stringify({ error: "Server Error" }), {
			status: 500,
		});
	}
}
