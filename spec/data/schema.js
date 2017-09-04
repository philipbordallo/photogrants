import T from './types';

export default {
	...T.object,
	properties: {
		"active": T.boolean,
		"type": T.string,
		"slug": T.string,
		"organization": {
			...T.object,
			properties: {
				"name": T.string,
				"nickname": T.string,
				"url": T.string
			},
			required: ["name", "nickname", "url"]
		},
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
				"callToSubmit": T.string,
				"deadline": T.string
			},
			required: ["callToSubmit", "deadline"]
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
					},
					required: ["from", "to"]
				},
				"gender": T.genderRange,
				"students": T.boolean,
				"other": T.string
			},
			required: ["age", "gender", "students", "other"]
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
	required: [ "active", "type", "slug", "organization", "name", "url", "applicationUrl", "yearsActive", "date", "description", "eligibility", "fee", "awards"]
};
