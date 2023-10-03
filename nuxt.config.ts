import { LightTheme } from './theme/config';

export default defineNuxtConfig({
	ssr: false,
	typescript: {
		shim: false,
	},
	devtools: {
		enabled: true,
	},
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
	},
	imports: {
		dirs: ['stores', 'types'],
	},
	vuetify: {
		vuetifyOptions: {
			theme: {
				defaultTheme: 'LightTheme',
				themes: {
					LightTheme,
				},
			},
		},
	},
	modules: ['@pinia/nuxt', '@invictus.codes/nuxt-vuetify', '@vueuse/nuxt'],
});
