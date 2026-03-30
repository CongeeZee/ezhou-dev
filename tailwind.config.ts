import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['Menlo', 'Monaco', 'monospace'],
      },
      colors: {
        background: '#0a0a0a',
        foreground: '#f0f0f0',
      },
      backgroundColor: {
        dark: '#0a0a0a',
      },
      textColor: {
        muted: '#b0b0b0',
      },
      borderColor: {
        subtle: 'rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'subtle-pulse': 'subtlePulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        slideUp: {
          from: {
            transform: 'translateY(20px)',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        subtlePulse: {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.6',
          },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#f0f0f0',
            a: {
              color: '#ffffff',
              textDecoration: 'underline',
              '&:hover': {
                color: '#e0e0e0',
              },
            },
            strong: {
              color: '#ffffff',
            },
            h1: {
              color: '#ffffff',
              fontWeight: '700',
            },
            h2: {
              color: '#ffffff',
              fontWeight: '700',
            },
            h3: {
              color: '#ffffff',
              fontWeight: '600',
            },
            h4: {
              color: '#ffffff',
            },
            code: {
              color: '#e0e0e0',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              padding: '0.125rem 0.25rem',
              borderRadius: '0.25rem',
              fontFamily: 'Menlo, Monaco, monospace',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '0.375rem',
            },
            blockquote: {
              borderLeftColor: 'rgba(255, 255, 255, 0.2)',
              color: '#b0b0b0',
            },
            hr: {
              borderColor: 'rgba(255, 255, 255, 0.1)',
            },
            td: {
              borderColor: 'rgba(255, 255, 255, 0.1)',
            },
            th: {
              borderColor: 'rgba(255, 255, 255, 0.1)',
              color: '#ffffff',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
