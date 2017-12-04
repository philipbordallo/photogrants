import React, { PureComponent } from 'react';
import T from 'prop-types';

import noop from 'utilities/noop';

import Classes from './styles';

class Button extends PureComponent {
	static propTypes = {
		children: T.string.isRequired,
		className: T.string,
		onClick: T.func,
		target: T.string,
		href: T.string,
		type: T.oneOf([
			'primary',
			'secondary'
		]).isRequired
	};

	static defaultProps = {
		className: '',
		target: '',
		onClick: noop,
		href: ''
	};

	render() {
		const { children, className, href, target, type, onClick } = this.props;

		let buttonClasses = Classes[type];
		if (className) buttonClasses += ` ${className}`;

		if (href) {
			return (
				<a href={ href } onClick={ onClick } target={ target } className={ buttonClasses }>
					{ children }
				</a>
			);
		}

		return (
			<button className={ buttonClasses } onClick={ onClick }>
				{ children }
			</button>
		);
	}
}

export default Button;
