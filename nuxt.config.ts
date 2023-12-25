export default {
  modules: ["@unocss/nuxt",	"@vite-pwa/nuxt"],
  unocss: {
    uno: true,
    attributify: true,
    icons: true,
    components: false,
    webFonts: true,
  },
  pwa: {
	registerType: 'autoUpdate',
	name: 'hn',
	short_name: 'hn',
	theme_color: '#ffffff',
  },
  client: {
	installPrompt: true,
	periodicSyncForUpdates: 20,
  },
  module: [
	"@vueuse/nuxt"
  ]
};
