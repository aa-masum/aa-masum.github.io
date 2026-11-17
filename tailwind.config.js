module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { paper: '#EAF0F4', ink: '#12203A', cobalt: '#2547F5', signal: '#FFC21A', rule: '#B9C6D3' },
      fontFamily: { display: ['var(--font-display)', 'sans-serif'], body: ['var(--font-body)', 'sans-serif'] },
    },
  },
  plugins: [],
};
