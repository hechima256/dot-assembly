import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				primary: {
					"50": "#f0fdfc",
					"100": "#ccfbf6",
					"200": "#99f6ec",
					"300": "#5eeadb",
					"400": "#2dd4c2",
					"500": "#14b8a6",
					"600": "#0d9485",
					"700": "#0f766b",
					"800": "#115e56",
					"900": "#134e48",
					"950": "#042f2a",
				},
				secondary: {
					"50": "#fff1f3",
					"100": "#ffe1e4",
					"200": "#ffc8ce",
					"300": "#ffa1ab",
					"400": "#fe6b7b",
					"500": "#f73c51",
					"600": "#e41e34",
					"700": "#b81426",
					"800": "#9f1524",
					"900": "#831925",
					"950": "#48070e",
				},
			},
		},
	},
	plugins: [],
};
export default config;
