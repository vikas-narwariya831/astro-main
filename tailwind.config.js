const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				'purple-gradient': 'linear-gradient(to right, #7F00FF , #210E5B)',
				'purple-gradient-verticle': 'linear-gradient(to bottom, #210E5B , #7F00FF)',
				'golden-gradient': 'linear-gradient(to right, #ECC440, #FFFA8A)',
				'light-purple-gradient': 'linear-gradient(to bottom, #F0EBFF , #FBF7FF, #FFFFFA)'
			},
			colors: {
				primary: {
					DEFAULT: 'var(--primary)',
					foreground: 'var(--primary-foreground)'
				},
				secondary: {
					DEFAULT: 'var(--secondary)',
					foreground: 'var(--secondary-foreground)'
				},
				background: 'var(--background)',
				foreground: 'var(--foreground)',

				cream: 'var(--cream)',
				golden: 'var(--golden)',

				card: {
					DEFAULT: 'var(--card)',
					foreground: 'var(--card-foreground)'
				},
				popover: {
					DEFAULT: 'var(--popover)',
					foreground: 'var(--popover-foreground)'
				},
				muted: {
					DEFAULT: 'var(--muted)',
					foreground: 'var(--muted-foreground)'
				},
				accent: {
					DEFAULT: 'var(--accent)',
					foreground: 'var(--accent-foreground)'
				},
				destructive: {
					DEFAULT: 'var(--destructive)',
					foreground: 'var(--destructive-foreground)'
				},
				border: 'var(--border)',
				input: 'var(--input)',
				ring: 'var(--ring)',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			fontFamily: {
				poppins: ['var(--poppins)'],
				'georgia-regular': ['var(--georgia-regular)'],
				'georgia-bold': ['var(--georgia-bold)'],
				'lemon-milk-medium': ['var(--lemon-milk-medium)'],
				'georgia-italic': ['var(--georgia-italic)']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'caret-blink': {
					'0%,70%,100%': {
						opacity: '1'
					},
					'20%,50%': {
						opacity: '0'
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'caret-blink': 'caret-blink 1.25s ease-out infinite',
			}
		}
	},
	plugins: [
		plugin(function ({ addComponents, theme }) {
			addComponents({
				'.btn-primary': {
					backgroundImage: 'linear-gradient(to right, #7F00FF, #210E5B)', // Gradient background
					borderRadius: '5px',
					color: '#fff',
					transition: 'background-color 0.3s ease',
					fontSize: '16px',
					fontWeight: 500,
					padding: '0px 20px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '40px',
					fontFamily: 'poppins',
					'&:hover': {
						backgroundImage: 'linear-gradient(to right, #7F00FF, #210E5B)', // Gradient on hover
					},
				},
			});
		}),
		require("tailwindcss-animate")
	],
};
