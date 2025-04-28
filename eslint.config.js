import { defineConfig } from 'eslint/config';
import eslintPluginTs from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default defineConfig([
	{
		files: ['src/**/*.ts'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: './tsconfig.json',
				sourceType: 'module',
				ecmaVersion: 'latest',
			},
		},
		plugins: {
			'@typescript-eslint': eslintPluginTs,
		},
		rules: {
			semi: 'error',
			'no-unused-vars': 'warn',
			camelcase: 'warn',
			quotes: ['error', 'single'],
			'prefer-const': 'error',
		},
	},
]);
