// https://nuxt.com/docs/api/configuration/nuxt-config
import { createVuetify, ThemeDefinition } from 'vuetify';
const myCustomLightTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#ebebeb',
    surface: '#FFFFFF',
    primary: '#1976d2',
    secondary: '#26A69A',
    error: '#C10015',
    info: '#31CCEC',
    success: '#21BA45',
    warning: '#F2C037',
  },
};
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  // devtools: {
  //   enabled: true,
  // },
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'myCustomLightTheme',
        themes: {
          myCustomLightTheme,
        },
      },
    },
  },
  modules: [
    '@pinia/nuxt',
    '@invictus.codes/nuxt-vuetify',
    '@vueuse/nuxt',
    '@vue-macros/nuxt',
  ],
});
