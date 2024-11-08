module.exports = {
   parser: "@typescript-eslint/parser", // Use the TypeScript parser
   parserOptions: {
      ecmaVersion: 2020, // Allow ECMAScript 2020 features
      sourceType: "module", // Allow the use of import/export syntax
      ecmaFeatures: {
         jsx: false, // Disable JSX parsing (since you're using Node)
      },
   },
   extends: [
      "eslint:recommended", // Enable recommended rules from ESLint
      "plugin:@typescript-eslint/recommended", // Enable recommended rules for TypeScript
      "plugin:node/recommended", // Enable Node.js recommended rules
   ],
   plugins: ["@typescript-eslint", "node"], // Add the TypeScript and Node.js plugins
   env: {
      node: true, // Enable Node.js global variables
      es2020: true, // Enable ES2020 globals
   },
   rules: {
      // Example rules that you can modify as per your preferences
      "no-console": "warn", // Warn about console statements
      "no-unused-vars": "warn", // Warn about unused variables
      "no-undef": "error", // Ensure all variables are defined
      "no-trailing-spaces": "warn", // Warn about trailing spaces
      semi: ["error", "always"], // Enforce semicolons
      quotes: ["error", "double"], // Enforce double quotes for strings
      "@typescript-eslint/explicit-module-boundary-types": "off", // Turn off explicit return types for functions in modules
      "@typescript-eslint/no-explicit-any": "warn", // Warn about usage of `any` type
      "node/no-extraneous-require": "warn", // Warn about requiring extraneous modules
      "node/no-unpublished-require": "warn", // Warn about requiring unpublished modules
      "node/callback-return": "warn", // Warn about callbacks not returning
      "node/handle-callback-err": "warn", // Warn about errors not being handled
      "node/no-deprecated-api": "error", // Ensure no deprecated Node.js APIs are used
   },
};
