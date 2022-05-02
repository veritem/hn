module.exports = {
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended"],
  parser: "vue-eslint-parser",
  extends: ["@nuxtjs/eslint-config-typescript"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  rules: {
    "vue/no-unused-vars": "error",
  },
};
