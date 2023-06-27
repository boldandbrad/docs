# Repo Setup

Create a Vue 3 + Typescript project with Vite.

```zsh
pnpm create vite app-name --template vue-ts
```

Install css dependencies:

```zsh
pnpm install -D tailwindcss postcss autoprefixer
pnpm tailwindcss init -p
```

Configure tailwind template paths:

```js
// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Add tailwind directives to css:

```css
// src/styles.css or src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Make sure css is imported:

```ts
// src/main.(js/ts)
import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
```

Install headless ui and heroicons:

```zsh
pnpm install @headlessui/vue @heroicons/vue
```

Install Inter font (optional):

```html
<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
```

```ts
// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  // ...
```
