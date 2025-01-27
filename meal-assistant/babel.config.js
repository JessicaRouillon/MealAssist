module.exports = {
  presets: [
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    'react-native-reanimated/plugin',
    [
      "module:react-native-dotenv", {
        "moduleName": "@env",
        "path": ".env",
        "safe": false,
        "allowUndefined": true,
        "verbose": false
      }
    ],
  ],
};
