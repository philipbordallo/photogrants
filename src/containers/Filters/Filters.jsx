import React, { Component } from 'react';
import T from 'prop-types';

import setFilterData from 'utilities/setFilterData';

import FilterList from './FilterList';

import { FILTERS_PROPTYPES } from './propTypes';
import { FILTERS_LIST } from './meta';

import Classes from './styles.css';


class Filters extends Component {
  static propTypes = {
    filterTable: T.func.isRequired,
    fireAnalyticsEvent: T.func.isRequired,
    filters: FILTERS_PROPTYPES.isRequired,
  };

  constructor() {
    super();

    this.handleFilterAction = this.handleFilterAction.bind(this);
    this.renderFilterList = this.renderFilterList.bind(this);
  }

  handleFilterAction(filter) {
    const { fireAnalyticsEvent, filterTable } = this.props;

    fireAnalyticsEvent({
      eventCategory: 'Filter',
      eventAction: 'filter',
      eventLabel: `${filter.name}`,
    });
    filterTable(filter);
  }

  renderFilterList(data, index) {
    const { filters } = this.props;
    const filterListProps = setFilterData(data, filters);

    return (
      <FilterList
        key={ index }
        onFilterAction={ this.handleFilterAction }
        { ...filterListProps }
      />
    );
  }

  render() {
    return (
      <div className={ Classes.root }>
        <div className={ Classes.wrapper }>
          <h2 className={ Classes.title }>Filters</h2>
          { FILTERS_LIST.map(this.renderFilterList) }
        </div>
      </div>
    );
  }
}

export default Filters;
