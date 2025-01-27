module.exports = {
  presets: [
    'metro-react-native-babel-preset'
  ],
  plugins: [
    'react-native-reanimated/plugin',
    [
      "module:react-native-dotenv", {
        // "moduleName": "@env",
        "moduleName": "expo-env",
        "path": ".env",
        "safe": false,
        "allowUndefined": true,
        "verbose": false
      }
    ],
  ],
};
