import React, { PureComponent } from 'react';
import T from 'prop-types';

class TimeZoneAbbr extends PureComponent {
	static propTypes = {
		abbr: T.oneOf([
			'CDT',
			'CST',
			'EDT',
			'EST',
			'GMT',
			'MDT',
			'MST',
			'PDT',
			'PST'
		]).isRequired,
		name: T.oneOf([
			'Central',
			'Eastern',
			'Greenwich',
			'Mountain',
			'Pacific'
		]).isRequired,
		offset: T.oneOf([
			'+0000',
			'-0400',
			'-0500',
			'-0600',
			'-0700',
			'-0800'
		]).isRequired,
		type: T.oneOf([
			'Daylight',
			'Mean',
			'Standard'
		]).isRequired
	};

	render() {
		const { abbr, name, offset, type } = this.props;
		const title = `${name} ${type} Time (GMT${offset})`;

		return (
			<abbr title={ title }>{ abbr }</abbr>
		);
	}
}

export default TimeZoneAbbr;
