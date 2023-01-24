module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "plugins": ["prettier"],
    "extends": ["eslint:recommended",
        "prettier"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "ignorePatterns": ["webpack.config.js", "dist/main.js"],
    "rules": {
        "no-console": "off",
        "no-var": "warn",
        "semi": "warn",
        "indent": "warn",
        "no-multi-spaces": "warn",
        "space-in-parens": "warn",
        "no-multiple-empty-lines": "warn",
        "prefer-const": "warn",
        "no-use-before-define": "warn"
    }
};