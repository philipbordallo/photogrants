export default {
	boolean: {
		type: "boolean",
	},
	string: {
		type: "string"
	},
	array: {
		type: "array"
	},
	object: {
		type: "object"
	},
	integer: {
		type: "integer"
	},
	null: {
		type: "null"
	},
	number: {
		type: "number"
	},
	studentRange: {
		type: "string",
		enum: [
			"ineligible",
			"only",
			"accepted"
		]
	},
	genderRange: {
		type: "string",
		enum: [
			"men",
			"women",
			"nonbinary",
			"all"
		]
	},
	amountRange: {
		type: "string",
		enum: [
			"exact",
			"upto"
		]
	},
	currency: {
		type: "string",
		enum: [
			"USD",
			"GBP"
		]
	}
};
