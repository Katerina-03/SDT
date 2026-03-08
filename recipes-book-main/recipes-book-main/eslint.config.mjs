import globals from "globals";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}, rules: {
    "prefer-const": "error",
    "no-unused-vars": "off",
    "no-unused-expressions": "error"
  }},
  {languageOptions: { globals: globals.browser }},
];