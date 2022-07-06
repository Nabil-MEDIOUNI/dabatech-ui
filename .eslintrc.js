module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'react-app',
    'plugin:react-hooks/recommended',
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:mdx/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
      createClass: 'createReactClass',
      pragma: 'React',
      fragment: 'Fragment',
    },
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'eslint-plugin-prettier'],

  /* ******************************* FORMATTING ******************************* */
  rules: {
    indent: 0,
    'linebreak-style': 0,
    quotes: [2, 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'max-len': ['warn', { code: 120 }],
    'object-curly-spacing': 0,
    'object-curly-newline': 0,
    'operator-linebreak': 0,
    'implicit-arrow-linebreak': 0,
    'function-paren-newline': 0,

    /* ******************************* JAVASCRIPT ******************************* */
    camelcase: 'warn',
    'arrow-parens': ['warn', 'always'],
    'arrow-body-style': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'warn',
    'no-unused-vars': 'error',
    'class-methods-use-this': 'warn',
    'prefer-destructuring': 'warn',
    'prefer-const': 'warn',
    'no-shadow': 'warn',
    'no-empty': 'warn',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'warn',
    'wrap-iife': 0,

    /* ******************************* JSX / REACT ****************************** */
    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'mdx'] }],
    'react/display-name': 'off',
    'react/jsx-props-no-spreading': 0,
    'react/jsx-curly-newline': 0,
    'react/jsx-wrap-multilines': 0,
    // @TODO: Renable test and follow this rule
    'react-hooks/exhaustive-deps': 0,
    // @TODO: Temporarily disabled
    'react/jsx-no-bind': 0,

    /* ****************************** DEPENDENCIES ****************************** */
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
