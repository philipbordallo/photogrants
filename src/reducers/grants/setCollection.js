import getCurrencySymbol from 'currency-symbol-map';
import moment from 'moment';

import { deadlineSort } from 'utilities/sorts';

function setRow({ organization: { nickname }, name, date, fee, awards }) {
	const title = {
		orgName: nickname,
		name
	};
	const cost = `${getCurrencySymbol(fee.currency)}${fee.amount}`;
	const topAward = {
		amount: `${getCurrencySymbol(awards[0].currency)}${awards[0].amount.toLocaleString()}`,
		mentorship: awards[0].mentorship,
		show: awards[0].show,
		residency: awards[0].residency
	};
	const deadline = moment(date.deadline, 'MMMM D YYYY').format('MMM D');

	return [
		title,
		cost,
		topAward,
		deadline
	];
}

function setCollection(data) {
	return data.map(item => ({
		...item,
		show: 'overview',
		expanded: false,
		row: setRow(item)
	})).sort(deadlineSort);
}

export default setCollection;
