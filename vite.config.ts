import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   https: {
  //     key: "./e-commerce-privateKey.key",
  //     cert: "./e-commerce.crt",
  //   },
  // },
  plugins: [react()],
});
