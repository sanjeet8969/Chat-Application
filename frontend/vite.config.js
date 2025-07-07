import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
		proxy: {
			"/api": {
				target: "https://chat-application-1-93f9.onrender.com/",
				// target:"https://chat-application-df3r.onrender.com"
			},
		},
	},
});
