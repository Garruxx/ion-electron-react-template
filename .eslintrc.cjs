module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
	],
	ignorePatterns: ['dist', 'dist-electron', '.eslintrc.cjs','**/*index.ts'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
	},
}
