import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
const config = defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://server:3000",
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [react()],
});

export default config;
