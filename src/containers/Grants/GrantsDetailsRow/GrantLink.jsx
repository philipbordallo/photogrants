import React, { PureComponent } from 'react';
import T from 'prop-types';

import Button from 'components/Button';

import Classes from './styles';


const LINK_META = {
	application: {
		buttonType: 'primary',
		copy: 'Submit Application'
	},
	website: {
		buttonType: 'secondary',
		copy: 'Visit Website'
	}
};

class GrantLink extends PureComponent {
	static propTypes = {
		type: T.oneOf([
			'application',
			'website'
		]).isRequired,
		href: T.string,
		fireAnalyticsEvent: T.func.isRequired
	};

	static defaultProps = {
		href: ''
	};

	constructor() {
		super();

		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	handleButtonClick(event) {
		this.props.fireAnalyticsEvent({
			eventCategory: 'Grant Link',
			eventAction: 'click',
			eventLabel: `${event.target.textContent} | ${event.target.href}`
		});
	}

	render() {
		const { type, href } = this.props;

		if (href) {
			return (
				<div className={ Classes.buttonWrapper }>
					<Button
						onClick={ this.handleButtonClick }
						type={ LINK_META[type].buttonType }
						href={ href }
						target="_blank"
					>
						{ LINK_META[type].copy }
					</Button>
				</div>
			);
		}

		return null;
	}
}

export default GrantLink;
