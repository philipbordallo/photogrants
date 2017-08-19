import React, { PureComponent } from 'react';
import T from 'prop-types';

import Classes from './styles';

class Button extends PureComponent {
	static propTypes = {
		children: T.string.isRequired,
		className: T.string,
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
		href: ''
	};

	render() {
		const { children, className, href, target, type } = this.props;

		let buttonClasses = Classes[type];
		if (className) buttonClasses += ` ${className}`;

		if (href) {
			return (
				<a href={ href } target={ target } className={ buttonClasses }>
					{ children }
				</a>
			);
		}

		return (
			<button className={ buttonClasses }>
				{ children }
			</button>
		);
	}
}

export default Button;
