module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "@react-native-community",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    quotes: ["error", "double"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          ".android.jsx",
          ".ios.jsx",
          ".android.tsx",
          ".ios.tsx",
        ],
      },
    },
  },
};
