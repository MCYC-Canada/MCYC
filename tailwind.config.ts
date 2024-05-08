import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'themed-blue': '#0C1935',
        'line-brown': "#780000",
        'gray-white' : "#F3F3F3",
      },
    },
    fontFamily: {

    },
  },
  plugins: [],
}
export default config
