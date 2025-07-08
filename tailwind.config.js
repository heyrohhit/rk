// tailwind.config.js
module.exports = {
    // ...
    extend: {
      animation: {
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'fadeInUp': 'fadeInUp 0.8s ease forwards',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  }
  