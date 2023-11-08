module.exports = {
  "root": true,
  "env": {
    "browser": true, 
    "es2020": true 
  },
  
  "extends": [
    "eslint: recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended"
  ],
  
  "ignorePatterns": ["dist", ".eslintrc.cjs"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {"jsx": true },
    //"ecmaVersion": "latest",
    "sourceType": "module"
  },

  "plugins": [ "react", "react-refresh", "import-helpers", "jsx-a11y", "import", /*"prettier",*/ "@typescript-eslint"],
  
  "rules": { "react-refresh/only-export-components": [ "warn", { "allowConstantExport": true }],
    "no-else-return": "warn",
    "no-console": [ "warn", { "allow": [ "warn", "error" ] } ],
    "space-before-function-paren": "off",
    "@typescript-eslint/no-unused-vars": [ "warn", { "argsIgnorePattern": "^_" }],
    "@typescript-eslint/no-explicit-any": "off",
    "multiline-ternary": "off",
    "semi": "off",
    "import-helpers/order-imports": [ "warn",
      { "newlinesBetween": "always", "alphabetize": { "order": "asc", "ignoreCase": true  },
        "groups": [ "/^react/", "module", "/^@src/", "/^~//", [ "parent", "sibling", "index" ]]
      }
    ]  
  }
}
