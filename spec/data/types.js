export default {
	boolean: {
		"type": "boolean",
	},
	string: {
		"type": "string"
	},
	array: {
		"type": "array"
	},
	object: {
		"type": "object"
	},
	integer: {
		"type": "integer"
	},
	null: {
		"type": "null"
	},
	number: {
		"type": "number"
	},
	genderRange: {
		"type": "string",
		"enum": [
			"men",
			"women",
			"nonbinary",
			"all"
		]
	},
	amountRange: {
		"type": "string",
		"enum": [
			"exact",
			"upto"
		]
	},
	currency: {
		"type": "string",
		"enum": [
			"USD"
		]
	}
};
