import { ThemeDefinition } from 'vuetify';

const PurpleTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#5D87FF',
    secondary: '#49BEFF',
    info: '#539BFF',
    success: '#13DEB9',
    accent: '#FFAB91',
    warning: '#FFAE1F',
    error: '#FA896B',
    muted: '#5a6a85',
  },
};

const LightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#ebebeb',
    surface: '#ffffff',
    primary: '#5D87FF',
    secondary: '#26A69A',
    error: '#C10015',
    info: '#31CCEC',
    success: '#21BA45',
    warning: '#FFAE1F',
  },
};
export { LightTheme, PurpleTheme };
