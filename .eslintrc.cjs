module.exports = {
   root: true,
   env: { browser: true, es2020: true },
   extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react-hooks/recommended",
   ],
   ignorePatterns: ["dist", ".eslintrc.cjs"],
   parser: "@typescript-eslint/parser",
   plugins: ["react-refresh"],
   rules: {
      indent: ["warn", 3, { SwitchCase: 1 }],
      "linebreak-style": ["warn", "unix"],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
         "warn",
         { allowConstantExport: true },
      ],
   },
};
