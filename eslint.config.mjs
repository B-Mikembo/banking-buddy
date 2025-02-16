import typescriptEslint from "@typescript-eslint/eslint-plugin";
import vue from "eslint-plugin-vue";
import _import from "eslint-plugin-import";
import { fixupPluginRules } from "@eslint/compat";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/tests*", "**/dist*"],
}, ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-essential",
), {
    plugins: {
        "@typescript-eslint": typescriptEslint,
        vue,
        import: fixupPluginRules(_import),
    },

    languageOptions: {
        globals: {
            ...globals.browser,
        },

        ecmaVersion: "latest",
        sourceType: "module",

        parserOptions: {
            parser: "@typescript-eslint/parser",
        },
    },

    rules: {
        "vue/multi-word-component-names": "off",
        "no-console": "error",

        "no-multiple-empty-lines": ["error", {
            max: 1,
            maxEOF: 0,
            maxBOF: 0,
        }],

        "import/order": ["error", {
            groups: [["builtin", "external"], "internal", ["parent", "sibling", "index"]],

            alphabetize: {
                order: "asc",
                caseInsensitive: true,
            },
        }],
    },
}];