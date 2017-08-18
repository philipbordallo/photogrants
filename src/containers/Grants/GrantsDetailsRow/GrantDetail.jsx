import React, { PureComponent } from 'react';
import T from 'prop-types';

import Classes from './styles';


class GrantDetail extends PureComponent {
	static propTypes = {
		title: T.string.isRequired,
		children: T.node,
		type: T.oneOf([
			'list',
			'text'
		]),
		visible: T.bool
	};

	static defaultProps = {
		children: '',
		type: 'text',
		visible: true
	};

	renderContent() {
		const { children, type } = this.props;

		if (type === 'text') {
			return (
				<p className={ Classes.text }>
					{ children }
				</p>
			);
		}
		else if (type === 'list') {
			return (
				<ul className={ Classes.list }>
					{ children }
				</ul>
			);
		}


		return null;
	}

	render() {
		const { title, visible } = this.props;

		if (visible) {
			return (
				<div className={ Classes.detail }>
					<h4 className={ Classes.title }>{ title }</h4>
					{ this.renderContent() }
				</div>
			);
		}

		return null;
	}
}

export default GrantDetail;
