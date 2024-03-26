/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const daisyui = {
  themes: ["light", "dark", "cupcake"],
};
export const plugins = [require("daisyui")];

