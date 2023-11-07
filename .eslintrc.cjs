module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    // 'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:react-hooks/recommended',
    require.resolve('eslint-config-airbnb'),
    require.resolve('eslint-config-airbnb/hooks'),
    require.resolve('eslint-config-airbnb-typescript')
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    // 'react-refresh/only-export-components': [
    //   'warn',
    //   { allowConstantExport: true },
    // ],
    'react/function-component-definition': 0,
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 0,
    // '@typescript-eslint/dot-notation': 0,
    '@typescript-eslint/comma-dangle': 0,
    'object-curly-newline': 0,
    'no-console': 0,
    'react/jsx-wrap-multilines': 0,
    '@typescript-eslint/no-unused-expressions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'react-hooks/exhaustive-deps': 1,
  },
  settings: {
    react: {
      'version': 'detect'
    }
  },
  parserOptions: {
    "project": ['./tsconfig.json'],
  }
}
