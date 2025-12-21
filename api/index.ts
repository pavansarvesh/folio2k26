export default function handler(): Response {
	return Response.json({
		status: "ok",
		message: "API is running",
	});
}
