import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	// Allow client-side access to selected non-VITE env vars.
	esbuild: {
		drop: ["console", "debugger"],
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					react: ["react", "react-dom"],
					router: ["react-router-dom"],
				},
			},
		},
	},
	server: {
		proxy: {
			"/api": {
				target: "http://localhost:3001",
				changeOrigin: true,
			},
		},
	},
});
