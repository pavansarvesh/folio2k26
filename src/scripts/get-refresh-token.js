import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
});

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID || "YOUR_CLIENT_ID";
const CLIENT_SECRET =
  process.env.SPOTIFY_CLIENT_SECRET || "YOUR_CLIENT_SECRET";

// Paste the authorization code you get from:
// https://pavansarvesh.me/callback?code=XXXX
const CODE = "";

const REDIRECT_URI = "https://pavansarvesh.me/callback";

async function exchangeCodeForTokens() {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code: CODE,
      redirect_uri: REDIRECT_URI,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("Spotify Error:");
    console.error(data);
    return;
  }

  console.log("\n✅ Access Token:\n");
  console.log(data.access_token);

  console.log("\n✅ Refresh Token:\n");
  console.log(data.refresh_token);

  console.log("\nReplace your .env with:\n");
  console.log(`SPOTIFY_REFRESH_TOKEN=${data.refresh_token}`);
}

exchangeCodeForTokens();