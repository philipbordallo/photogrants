import React from 'react';
import T from 'prop-types';


function TimeZoneAbbr(props) {
  const {
    abbr, name, offset, type,
  } = props;
  const title = `${name} ${type} Time (GMT${offset})`;

  return (
    <abbr title={ title }>{ abbr }</abbr>
  );
}

TimeZoneAbbr.propTypes = {
  abbr: T.oneOf([
    'CDT',
    'CST',
    'EDT',
    'EST',
    'GMT',
    'MDT',
    'MST',
    'PDT',
    'PST',
  ]).isRequired,
  name: T.oneOf([
    'Central',
    'Eastern',
    'Greenwich',
    'Mountain',
    'Pacific',
  ]).isRequired,
  offset: T.oneOf([
    '+0000',
    '-0400',
    '-0500',
    '-0600',
    '-0700',
    '-0800',
  ]).isRequired,
  type: T.oneOf([
    'Daylight',
    'Mean',
    'Standard',
  ]).isRequired,
};

export default TimeZoneAbbr;
