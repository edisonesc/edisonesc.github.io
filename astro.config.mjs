// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
	site: "https://edisonesc.github.io",
	trailingSlash: "ignore",
	integrations: [sitemap({ filter: (page) => !page.endsWith("/og/") && !page.endsWith("/404/") })],
	vite: { plugins: [tailwindcss()] },
	// Minimal Serif: Cormorant Garamond for display (light italic is the signature), Inter for body/UI.
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Cormorant Garamond",
			cssVariable: "--font-cormorant",
			weights: [300, 400, 500],
			styles: ["normal", "italic"],
			fallbacks: ["Georgia", "serif"],
		},
		{
			provider: fontProviders.google(),
			name: "Inter",
			cssVariable: "--font-inter",
			weights: [400, 500],
			styles: ["normal"],
			fallbacks: ["system-ui", "sans-serif"],
		},
	],
});
