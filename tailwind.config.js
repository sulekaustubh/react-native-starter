/** @type {import('tailwindcss').Config} */
// import App from './components/Login';

module.exports = {
	content: [
		'./App.{js,jsx,ts,tsx}',
		'./<custom directory>/**/*.{js,jsx,ts,tsx}',
		'./components/*.{js,jsx,ts,tsx}',
		'./app/*.{js,jsx,ts,tsx}',
		'./app/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
