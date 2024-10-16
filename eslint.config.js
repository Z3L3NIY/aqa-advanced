import globals from "globals";
import pluginJs from "@eslint/js";

export default [
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	{
		rules: {
			eqeqeq: "warn",
			"no-unused-vars": "error",
			"no-undef": "warn",
		},
	},
];
