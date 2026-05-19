/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 20px 80px rgba(99, 102, 241, 0.12)',
        glow: '0 0 0 1px rgba(255,255,255,0.6), 0 24px 80px rgba(99, 102, 241, 0.16)',
      },
      colors: {
        callaro: {
          primary: '#4F46E5',
          secondary: '#7C3AED',
          accent: '#06B6D4',
          bg: '#F8FAFC',
          card: 'rgba(255,255,255,0.78)',
        },
      },
      backgroundImage: {
        'premium-mesh':
          'radial-gradient(circle at top left, rgba(251,191,36,0.20), transparent 28%), radial-gradient(circle at top right, rgba(125,211,252,0.14), transparent 26%), radial-gradient(circle at bottom left, rgba(196,181,253,0.16), transparent 28%), linear-gradient(180deg, rgba(248,250,252,1) 0%, rgba(245,247,255,1) 100%)',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-14px) translateX(8px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '33%': { transform: 'translate3d(18px, -16px, 0) scale(1.04)' },
          '66%': { transform: 'translate3d(-14px, 10px, 0) scale(0.98)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(0px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(0px) rotate(-360deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.22, transform: 'scale(0.9)' },
          '50%': { opacity: 0.72, transform: 'scale(1.1)' },
        },
        borderFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.55, transform: 'scale(1)' },
          '50%': { opacity: 0.9, transform: 'scale(1.08)' },
        },
      },
      animation: {
        float: 'float 9s ease-in-out infinite',
        drift: 'drift 18s ease-in-out infinite',
        orbit: 'orbit 42s linear infinite',
        twinkle: 'twinkle 6.5s ease-in-out infinite',
        borderFlow: 'borderFlow 10s linear infinite',
        shimmer: 'shimmer 12s linear infinite',
        pulseGlow: 'pulseGlow 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
