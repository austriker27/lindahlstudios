const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
      typography: (theme) => ({
        default: {
            css: {
                color: theme('colors.white'),
                a: {
                    color: theme('colors.white'),
                    '&:hover': {
                        opacity: '75%',
                    },
                }
            },
            p: {
                color: theme('colors.white'),
            },
            h1: {
                color: theme('colors.white'),
            },
            h2: {
                color: theme('colors.white'),
            },
            h3: {
                color: theme('colors.white'),
            },
        },
    }),
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
        linearGradientColors: theme => theme('colors'),
        radialGradientColors: theme => theme('colors'),
        conicGradientColors: theme => theme('colors'),
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
      require('tailwindcss-gradients'),
      require('@tailwindcss/typography'),
  ],
}
