import React, { PureComponent } from 'react';
import T from 'prop-types';

class TimeZoneAbbr extends PureComponent {
	static propTypes = {
		abbr: T.oneOf([
			'EST',
			'EDT',
			'CST',
			'CDT',
			'MST',
			'MDT',
			'PST',
			'PDT'
		]).isRequired,
		name: T.oneOf([
			'Eastern',
			'Central',
			'Mountain',
			'Pacific'
		]).isRequired,
		offset: T.oneOf([
			'-0400',
			'-0500',
			'-0600',
			'-0700',
			'-0800'
		]).isRequired,
		type: T.oneOf([
			'Daylight',
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
