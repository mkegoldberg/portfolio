module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:vue/base",
		"plugin:vue/essential",
		"plugin:vue/strongly-recommended",
		"plugin:vue/recommended",
		"plugin:jest/recommended"
	],

	rules: {
    	"vue/html-indent": [
    		"error",
    		4,
			{
				attribute: 1,
				closeBracket: 0,
				alignAttributesVertically: true,
				ignores: []
			}
		],

		"vue/html-closing-bracket-newline": [
			"error",
			{
				singleline: "never",
				multiline: "always"
			}
		],

		// "vue/component-name-in-template-casing": [
		// 	"error",
		// 	"PascalCase",
		// 	{
		// 		ignores: [
		// 			"nuxt",
		// 			"nuxt-link",
		// 			"no-ssr",
		// 			"clazy-load",
		// 			"v-touch",
		// 			"transition",
		// 			"component",
		// 			"portal",
		// 			"portal-target"
		// 		]
		// 	}
		// ],

		"vue/no-v-html": ["disable"]
	},

	parserOptions: {
		parser: "babel-eslint",
		ecmaVersion: 2017,
		sourceType: "module"
	},

	globals: {
		$nuxt: false,
		process: false,
		module: false,
		__dirname: false,
		TweenLite: false,
		Power2: false
	}
};

