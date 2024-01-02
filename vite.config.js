import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { requireTransform } from "vite-plugin-require-transforms";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), requireTransform({})]
});
