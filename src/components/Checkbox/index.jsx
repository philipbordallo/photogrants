import React, { PureComponent } from 'react';
import T from 'prop-types';

import Classes from './styles';

class Checkbox extends PureComponent {
	static propTypes = {
		checked: T.bool
	};

	static defaultProps = {
		checked: false
	};

	render() {
		const { checked } = this.props;
		const rootClassName = checked ? Classes.rootChecked : Classes.root;

		return (
			<span className={ rootClassName } />
		);
	}
}

export default Checkbox;
