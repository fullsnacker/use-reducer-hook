module.exports = {
	settings: {
		react: {
			version: 'detect'
		}
	},
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'eslint-config-prettier'
	],
	overrides: [
		{
			env: {
				node: true
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script'
			}
		}
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 0,
		'no-unused-vars': 0
		// 'no-unused-vars': 'error'
		// 'no-unused-vars': 0
		// 'no-unused-vars': ['warn', { varsIgnorePattern: '__' }]
	}
};
