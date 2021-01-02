import React, { PureComponent } from 'react';
import T from 'prop-types';

import noop from 'utilities/noop';

import { CONFIG_PROPTYPES } from './propTypes';

import Classes from './styles.css';


class TableRow extends PureComponent {
  static propTypes = {
    data: T.arrayOf(
      T.oneOfType([
        T.string,
        T.object,
      ]),
    ).isRequired,
    slug: T.string.isRequired,
    config: CONFIG_PROPTYPES.isRequired,
    onRowClick: T.func,
    expanded: T.bool,
  };

  static defaultProps ={
    expanded: false,
    onRowClick: noop,
  };

  constructor() {
    super();

    this.handleRowClick = this.handleRowClick.bind(this);
    this.renderCell = this.renderCell.bind(this);
  }

  handleRowClick() {
    const { onRowClick, slug } = this.props;

    onRowClick(slug);
  }

  renderCell(data, index) {
    const { config } = this.props;
    let content = typeof data !== 'object' ? data : null;

    if (config[index].renderer) {
      content = React.createElement(config[index].renderer, data);
    }

    return (
      <td className={ Classes.rowCell } key={ index }>
        { content }
      </td>
    );
  }

  render() {
    const { expanded, data } = this.props;

    const rowClassName = expanded ? Classes.expandedRow : Classes.row;

    return (
      <tr
        className={ rowClassName }
        onClick={ this.handleRowClick }
      >
        { data.map(this.renderCell) }
      </tr>
    );
  }
}

export default TableRow;
