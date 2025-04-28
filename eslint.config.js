import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
    {ignores: ['dist', 'build', 'node_modules']},
    {
        files: ['**/*.{ts,tsx}', "**/*.config.js"],
        languageOptions: {
            parser: '@typescript-eslint/parser',
            ecmaVersion: 2020,
            sourceType: 'module',
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            prettier,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                {allowConstantExport: true},
            ],
            "prettier/prettier": "error",
            "react/jsx-uses-react": "off",
            "react/react-in-jsx-scope": "off"
        },
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            'plugin:prettier/recommended',
            eslintConfigPrettier
        ],
    },
)
