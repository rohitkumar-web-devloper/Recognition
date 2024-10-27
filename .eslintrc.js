module.exports = {
  root: true,
  parser: '@babel/eslint-parser', // Use the Babel parser for React Native
  extends: [
    'eslint:recommended', // Use recommended ESLint rules
    'plugin:react/recommended', // Use recommended React rules
    'plugin:react-native/all', // Use recommended React Native rules
    // 'plugin:react-native/jsx-runtime',
  ],
  plugins: ['react', 'react-native'],
  rules: {
    // Add or override rules here
    'react-native/no-color-literals': 0, // Example: Disable the 'no-color-literals' rule
    'react-native/no-inline-styles': 'off',
    'no-dupe-keys': 'off',
    'react/no-unescaped-entities': ['off', { forbid: ["'"] }],
    'no-undef': 'off',
    'react/prop-types': ['off'],
    'eslint-disable react-native/split-platform-components': 'off',
    'eslint-disable no-case-declarations ': 'off',
    'eslint-disable react/jsx-key ': 'off',
  },
  settings: {
    react: {
      version: 'detect', // Specify the React version (e.g., '16.13.1')
    },
  },
};
