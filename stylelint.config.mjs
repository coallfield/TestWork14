/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard-scss", "stylelint-config-prettier-scss"],
  rules: {
    "selector-class-pattern": "^[a-z][a-zA-Z0-9]+$"
  }
};