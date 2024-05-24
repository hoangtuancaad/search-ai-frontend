import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";

export default [
    {
        files: ["src/**/*.{js,jsx,mjs,cjs,ts,tsx}"],

        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: { ...globals.browser },
        },

        rules: {
            semi: ["warn", "always"],
            quotes: ["warn", "double"],

            "no-unused-vars": "error",
            // "no-undef": "error",
        },

        ignores: ["**/node_modules/**", "**/dist/**", "**/public/**", "**src/**/*.scss"],
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...fixupConfigRules(pluginReactConfig),
];
