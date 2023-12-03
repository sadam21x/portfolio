import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
      backgroundImage: {
        'home-header': "url('/assets/header-bg.png')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: ['fantasy'],
  },
}

export default config
