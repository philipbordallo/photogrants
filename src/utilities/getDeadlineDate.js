import moment from 'moment';

function getDeadlineDate(date, local) {
  const parser = 'MMMM D YYYY HH:mm Z';
  const deadline = local
    ? moment(date, parser)
    : moment.parseZone(date, parser);

  const hasNoHours = deadline.hours() === 0;
  const hasNoMinutes = deadline.minutes() === 0;
  const hasNoSeconds = deadline.seconds() === 0;

  const formatter = hasNoHours && hasNoMinutes && hasNoSeconds
    ? 'MMMM D'
    : 'MMMM D h:mm a';

  return deadline.format(formatter);
}

export default getDeadlineDate;
