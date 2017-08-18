import T from './types';

export default {
	...T.object,
	properties: {
		"active": T.boolean,
		"type": T.string,
		"slug": T.string,
		"name": T.string,
		"url": T.string,
		"applicationUrl": T.string,
		"yearsActive": {
			...T.array,
			items: T.integer
		},
		"date": {
			...T.object,
			properties: {
				"call": T.string,
				"deadline": T.string
			},
			required: ["call", "deadline"]
		},
		"description": T.string,
		"eligibility": {
			...T.object,
			properties: {
				"age": {
					...T.object,
					properties: {
						"from": {
							anyOf: [
								T.integer,
								T.null
							]
						},
						"to": {
							anyOf: [
								T.integer,
								T.null
							]
						}
					}
				},
				"gender": T.genderRange,
				"students": T.boolean,
				"description": T.string
			},
			required: ["age", "gender", "students", "description"]
		},
		"fee": {
			...T.object,
			properties: {
				"amount": T.number,
				"currency": T.currency
			},
			required: ["amount", "currency"]
		},
		"awards": {
			...T.array,
			items: {
				...T.object,
				properties: {
					"given": T.number,
					"amount": T.number,
					"amountType":  T.amountRange,
					"currency": T.currency,
					"mentorship": T.boolean,
					"show": T.boolean,
					"residency": T.boolean
				},
				required: ["given", "amount", "amountType", "currency", "mentorship", "show", "residency"]
			}
		}
	},
	required: [ "active", "type", "slug", "name", "url", "applicationUrl", "yearsActive", "date", "description", "eligibility", "fee", "awards"]
};
