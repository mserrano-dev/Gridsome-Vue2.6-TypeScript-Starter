module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.jsx',
    ]
  },
  theme: {
    screens: {
      'sm': '320px', // iphone4 = 320x480
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  variants: {},
  plugins: [],
}