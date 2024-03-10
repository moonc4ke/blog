import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme';

export const content = [
  './public/*.html',
  './app/helpers/**/*.rb',
  './app/javascript/**/*.js',
  './app/views/**/*.{erb,haml,html,slim}',
];
export const theme = {
  extend: {
    fontFamily: {
      sans: ['Inter var', ..._fontFamily.sans],
    },
    colors: {
      rosePine: {
        base: "#faf4ed",
        surface: "#fffaf3",
        overlay: "#f2e9e1",
        muted: "#9893a5",
        subtle: "#797593",
        text: "#575279",
        love: "#b4637a",
        gold: "#ea9d34",
        rose: "#d7827e",
        pine: "#286983",
        foam: "#56949f",
        iris: "#907aa9",
        highlightLow: "#f4ede8",
        highlightMed: "#dfdad9",
        highlightHigh: "#cecacd",
      },
    },
  },
};
export const plugins = [
  require('@tailwindcss/forms'),
  require('@tailwindcss/aspect-ratio'),
  require('@tailwindcss/typography'),
  require('@tailwindcss/container-queries'),
];
