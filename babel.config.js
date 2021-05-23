module.exports = {
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    '@babel/plugin-proposal-optional-chaining',
    [
      'module-resolver',
      {
        alias: {
          assets: './app/assets',
          gate: './app/gate',
          helpers: './app/helpers',
          hooks: './app/view/hooks',
          i18n: './app/i18n',
          routes: './app/routes',
          store: './app/store',
          view: './app/view',
          context: './app/context',
          tests: ['./tests/'],
          "@components": "./src/components",
        },
        root: ['./app'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      },
    ],
  ],
};
