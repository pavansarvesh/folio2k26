export const runtime = "nodejs";

export default async function handler(): Promise<Response> {
	try {
		const apiKey = process.env.WAKATIME_API_KEY;

		if (!apiKey) {
			return Response.json(
				{ error: "Missing WAKATIME_API_KEY" },
				{ status: 500 }
			);
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

		return Response.json(data, {
			status: response.ok ? 200 : response.status,
		});
	} catch {
		return Response.json({ error: "Server Error" }, { status: 500 });
	}
}
