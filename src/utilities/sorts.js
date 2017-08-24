/* eslint import/prefer-default-export:0 */
import moment from 'moment';

export const nameSort = (a, b) => {
	const aNickname = a.organization.nickname ? `${a.organization.nickname} ` : '';
	const bNickname = b.organization.nickname ? `${b.organization.nickname} ` : '';
	const aName = `${aNickname}${a.name}`.toUpperCase();
	const bName = `${bNickname}${b.name}`.toUpperCase();

	if (aName > bName) return 1;
	else if (aName < bName) return -1;
	return 0;
};

export const feeSort = (a, b) => {
	const aFee = a.fee.amount;
	const bFee = b.fee.amount;

	if (aFee > bFee) return -1;
	else if (aFee < bFee) return 1;
	return nameSort(a, b);
};

export const awardSort = (a, b) => {
	const aTop = a.awards[0];
	const bTop = b.awards[0];
	const aAward = aTop.amount + Number(aTop.mentorship) + Number(aTop.show) + Number(aTop.residency);
	const bAward = bTop.amount + Number(bTop.mentorship) + Number(bTop.show) + Number(bTop.residency);

	if (aAward > bAward) return -1;
	else if (aAward < bAward) return 1;
	return nameSort(a, b);
};

export const deadlineSort = (a, b) => {
	const now = moment().dayOfYear();
	const aDay = moment(a.date.deadline, 'MMMM D YYYY').dayOfYear() - now;
	const bDay = moment(b.date.deadline, 'MMMM D YYYY').dayOfYear() - now;

	const aDeadline = (aDay < 0) ? 366 + aDay : aDay;
	const bDeadline = (bDay < 0) ? 366 + bDay : bDay;

	if (aDeadline > bDeadline) return 1;
	else if (aDeadline < bDeadline) return -1;
	return nameSort(a, b);
};
