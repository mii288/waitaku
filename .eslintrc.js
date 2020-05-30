module.exports = {
  globals: {
    __PATH_PREFIX__: true,
    "cypress/globals": true
  },
  extends: [
    "react-app",
    "plugin:cypress/recommended"
  ],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}