import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig(({ mode }) => {
	// Config uses the .env.[environment] file from ./config folder
	const env = loadEnv(mode, "./config", "");
	// Config uses VITE_PORT from the .env.[environment] file
	const PORT = Number(env.VITE_PORT) || 3000;

	return {
		resolve: {
			alias: {
				"@components": path.resolve(__dirname, "src/components"),
				"@pages": path.resolve(__dirname, "src/pages"),
			},
		},
		server: {
			port: PORT,
		},
		define: {
			"process.env.VITE_API_URL": JSON.stringify(env.VITE_API_URL),
		},
		plugins: [react(), tsconfigPaths()],
	};
});
