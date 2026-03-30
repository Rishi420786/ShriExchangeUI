import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#0a0f1f',
        panel: '#121a2f',
        border: '#263152',
        accent: '#22d3ee'
      }
    }
  },
  plugins: []
};

export default config;
