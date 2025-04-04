module.exports = {
  // ... otras configuraciones
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        typing: 'typing 2s steps(30) 1s forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        }
      }
    }
  }
}