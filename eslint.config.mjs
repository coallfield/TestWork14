import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: ['.next/', 'node_modules/'],
  },
  ...compat.config({

    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    rules: {
      'quotes': ['error', 'single'],
      'indent': ['error', 'tab'],
    },

  }),



];

export default eslintConfig;
