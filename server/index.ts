import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/api/wakatime", async (_req, res) => {
	try {
		const apiKey = process.env.WAKATIME_API_KEY;

		if (!apiKey) {
			return res.status(500).json({ error: "Missing WAKATIME_API_KEY" });
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
		return res.status(response.ok ? 200 : response.status).json(data);
	} catch{
		res.status(500).json({ error: "Server Error" });
	}
});

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
