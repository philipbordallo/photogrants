import moment from 'moment';

function getDeadlineDate(date, local) {
	const parser = 'MMMM D YYYY HH:mm Z';
	const deadline = (local) ? moment(date, parser) : moment.parseZone(date, parser);
	const hasNoTime = (
		deadline.hours() === 0 &&
		deadline.minutes() === 0 &&
		deadline.seconds() === 0
	);
	const formatter = hasNoTime ? 'MMMM D' : 'MMMM D h:mm a';

	return deadline.format(formatter);
}

export default getDeadlineDate;
