import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // proxy: {
    //   '/testiris': {
    //     target: 'http://localhost:52773',
    //     changeOrigin: true,
    //   },
    // },
    proxy: {
      "/martinez": {
        target: "http://20.55.75.209:52773",
        changeOrigin: true,
      },
    },
  },
});
