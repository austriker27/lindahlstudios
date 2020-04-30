const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
        color: {
            'brand-blue': '#0097ff',
        },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        // mono: ['DankMono', ...defaultTheme.fontFamily.mono],
        mono: ['Fira Mono', ...defaultTheme.fontFamily.mono]
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ],
}
