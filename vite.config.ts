import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig(({ mode }) => {
  // Config uses the .env.[environment] file from ./config folder
  const env = loadEnv(mode, "./config", "");
  // Config uses VITE_PORT from the .env.[environment] file
  const PORT = Number(env.VITE_PORT) || 3000;
  const prefixToRemove = `/${env.VITE_END_POINT || ""}`;

  return {
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@pages": path.resolve(__dirname, "src/pages"),
      },
    },
    server: {
      port: PORT,
      proxy: {
        [prefixToRemove]: {
          target: env.VITE_API_URL,
          changeOrigin: true,
          secure: true,
          rewrite: (path) => path.replace(new RegExp(`^${prefixToRemove}`), ""),
        },
      },
    },
    define: {
      "process.env.VITE_END_POINT": JSON.stringify(env.VITE_END_POINT),
    },
    plugins: [react(), tsconfigPaths()],
  };
});
