import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const isNetlify = process.env.NETLIFY === "true";
const isDev = process.env.NODE_ENV !== "production";

export default defineConfig({
  base: isNetlify || isDev ? "/" : "/cryptostack/",
  plugins: [react(), tailwindcss()],
});
