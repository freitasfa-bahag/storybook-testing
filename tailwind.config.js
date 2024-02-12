// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('tailwindcss').Config} */
const path = require('path')

const tailwindConfig = require('@bahag/sf-storybook/css-config/tailwind-configs/core-tailwind-config')

module.exports = {
  ...tailwindConfig,
  content: [
    ...tailwindConfig.content,
    path.join(path.dirname(require.resolve('@bahag/sf-storybook')), '**/*.js')
  ]
}