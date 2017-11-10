import React, { PureComponent } from 'react';
import T from 'prop-types';


class FilterInputItem extends PureComponent {
	static propTypes = {
		meta: T.string.isRequired,
		onChange: T.func.isRequired,
		placeholder: T.string,
		inputType: T.oneOf([
			'text',
			'number'
		])
	};

	static defaultProps = {
		placeholder: null,
		inputType: 'text'
	};

	constructor() {
		super();

		this.state = {
			value: ''
		};

		this.handleChange = this.handleChange.bind(this);
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState !== this.state) {
			this.filterAction();
		}
	}

	filterAction() {
		const { onChange, meta } = this.props;
		const { value } = this.state;

		onChange({
			maxLength: 1,
			name: meta,
			value
		});
	}

	handleChange(event) {
		const { inputType } = this.props;
		const { value } = event.target;

		if (inputType === 'number') {
			const isLessThan4Numbers = /\d/.test(value) && value.length < 4;
			const isInsideNumberConstraints = Number(value) >= 1 && Number(value) <= 150;

			if ((isLessThan4Numbers && isInsideNumberConstraints) || value === '') {
				this.setState({ value });
			}
		}
		else {
			this.setState({ value });
		}
	}

	render() {
		const { placeholder, meta } = this.props;
		const { value } = this.state;
		return (
			<input
				type="text"
				placeholder={ placeholder }
				data-meta={ meta }
				onChange={ this.handleChange }
				value={ value }
			/>
		);
	}
}

export default FilterInputItem;
