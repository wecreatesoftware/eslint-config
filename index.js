module.exports = {
	"env": {
		"browser": true,
		"es6": true,
		"node": true
	},
	"extends": "airbnb",
	"rules": {
		"indent": [
			2,
			4
		],
		"object-curly-spacing": [
			2,
			"always"
		],
		"object-curly-newline": "off",
		"no-multiple-empty-lines": [
			2,
			{
				"max": 1,
				"maxEOF": 1,
				"maxBOF": 0
			}
		],
		"quotes": [
			2,
			"double",
			"avoid-escape"
		],
		"prefer-const": 1,
		"react/jsx-curly-spacing": [
			2,
			"always"
		],
		"react/jsx-indent": [
			2,
			4
		],
		"semi": [
			"error",
			"never"
		],
		"comma-dangle": "off",
		"import/no-extraneous-dependencies": "off",
		"max-len": "off",
		"react/forbid-prop-types": "off"
	}
}