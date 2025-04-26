import { defineConfig } from 'eslint/config';

export default defineConfig([
	{
		files: ['src/**/*.ts'],
		rules: {
			semi: 'error',
			'no-unused-vars': 'warn',
			camelcase: 'warn',
			quotes: ['error', 'single'],
			'prefer-const': 'error',
		},
	},
]);
