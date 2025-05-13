import moment from 'moment';

export const getFilteredEvents = (events, filter) => {
  const now = moment();
  if (filter === 'past') {
    return events.filter(ev => moment(ev.start).isBefore(now));
  } else if (filter === 'upcoming') {
    return events.filter(ev => moment(ev.start).isSameOrAfter(now));
  }
  return events;
};
