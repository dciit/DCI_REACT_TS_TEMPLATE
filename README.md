1) npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
2) npx tailwindcss init -p
 
3) เอาใส่ใน tailwind.config.js
  
- export default {
      content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
 
 
4) ใส่ใน src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
 
5) npm run dev
