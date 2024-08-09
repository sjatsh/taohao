const resolve = require('node:path').resolve

const tw = resolve(__dirname, 'tailwind.config.js')
const project = resolve(__dirname, 'tsconfig.json')

module.exports = {
  root: true,
  extends: ['@padge/eslint-config/next.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
    tailwindcss: {
      // These are the default values but feel free to customize
      callees: ['cn', 'tv'],
      config: tw,
    },
    next: {
      rootDir: __dirname,
    },
  },
  rules: {
    camlecase: 'off',
  },
}
