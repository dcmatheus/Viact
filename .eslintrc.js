module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    'cypress/globals': true
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
    'plugin:cypress/recommended',
    'plugin:prettier/recommended',
    '.eslintrc-auto-import.json',
    'plugin:storybook/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  ignorePatterns: ['auto-imports.d.ts'],
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'import',
    'jsx-a11y',
    'cypress',
    'prettier'
  ],
  rules: {
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
      }
    ],
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'react/function-component-definition': [
      1,
      {
        namedComponents: [
          'function-declaration',
          'function-expression',
          'arrow-function'
        ]
      }
    ],
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0
  }
}
