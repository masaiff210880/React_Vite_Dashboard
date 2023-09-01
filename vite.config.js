import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    hmr: false,
    host: "0.0.0.0", // Bind the server to all available network interfaces
  },
});