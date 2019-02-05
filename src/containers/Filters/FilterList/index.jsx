import React, { PureComponent } from 'react';
import T from 'prop-types';

import { FILTERS_PROPTYPES, VALUES_PROPTYPES } from 'containers/Filters/propTypes';

import FilterSelectItem from './FilterSelectItem';
import FilterInputItem from './FilterInputItem';

import Classes from './styles';


class FilterList extends PureComponent {
  static propTypes = {
    onFilterAction: T.func.isRequired,
    title: T.string.isRequired,
    meta: T.string.isRequired,
    filters: FILTERS_PROPTYPES.isRequired,
    selectedValues: VALUES_PROPTYPES.isRequired,
    type: T.oneOf([
      'select',
      'input'
    ])
  };

  static defaultProps = {
    type: 'select'
  };

  constructor() {
    super();

    this.renderItem = this.renderItem.bind(this);
  }

  renderItem({ name, value }, index) {
    const { onFilterAction, meta, filters, selectedValues, type } = this.props;

    if (type === 'select') {
      const selected = selectedValues.some(selectedValue => selectedValue === value);

      return (
        <FilterSelectItem
          key={ index }
          maxLength={ filters.length }
          meta={ meta }
          onClick={ onFilterAction }
          selected={ selected }
          value={ value }
        >
          { name }
        </FilterSelectItem>
      );
    }
    else if (type === 'input') {
      return (
        <FilterInputItem
          key={ index }
          inputType="number"
          meta={ meta }
          onChange={ onFilterAction }
          placeholder="All"
        />
      );
    }

    return null;
  }

  render() {
    const { title, filters } = this.props;

    return (
      <div className={ Classes.root }>
        <h2 className={ Classes.title }>{ title }</h2>
        <ul>
          { filters.map(this.renderItem) }
        </ul>
      </div>
    );
  }
}

export default FilterList;
