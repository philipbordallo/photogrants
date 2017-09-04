import moment from 'moment';

const TIME_ZONES = [
	{
		name: 'Eastern',
		standard: { offset: '-0500', abbr: 'EST' },
		daylight: { offset: '-0400', abbr: 'EDT' }
	},
	{
		name: 'Central',
		standard: { offset: '-0600', abbr: 'CST' },
		daylight: { offset: '-0500', abbr: 'CDT' }
	},
	{
		name: 'Mountain',
		standard: { offset: '-0700', abbr: 'MST' },
		daylight: { offset: '-0600', abbr: 'MDT' }
	},
	{
		name: 'Pacific',
		standard: { offset: '-0800', abbr: 'PST' },
		daylight: { offset: '-0700', abbr: 'PDT' }
	}
];
const ARRAY_OFFSET = -5; // Eastern Standard Time

function getTimeZone(date) {
	const deadline = moment.parseZone(date, 'MMMM D YYYY HH:mm Z');
	const deadlineLocal = deadline.clone().local();
	const diff = deadline.utcOffset() - deadlineLocal.utcOffset();
	const isDST = deadlineLocal.add(diff, 'minutes').isDST();

	const offset = (deadline.utcOffset() / -60) + (isDST ? 1 : 0) + ARRAY_OFFSET;
	const type = isDST ? 'Daylight' : 'Standard';
	const lowerType = type.toLowerCase();

	if (TIME_ZONES[offset]) {
		return {
			name: TIME_ZONES[offset].name,
			abbr: TIME_ZONES[offset][lowerType].abbr,
			offset: TIME_ZONES[offset][lowerType].offset,
			type
		};
	}

	return null;
}

export default getTimeZone;
export {
	TIME_ZONES
};
