import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:5001", // local backend
          changeOrigin: true,
        },
      },
    },
    define: {
      _API_URL_: JSON.stringify(
        isProd
          ? "https://notes-list-three.vercel.app/api" // backend on Vercel
          : "/api" // local proxy
      ),
    },
  };
});