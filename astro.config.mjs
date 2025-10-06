import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	vite: {
		server: {
			watch: {
				usePolling: true,
			},
		},
	},
	site: "https://mintaka.co",
	i18n: {
		defaultLocale: "en",
		locales: ["en", "es"],
	},
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		sitemap(),
		icon(),
	],
});
