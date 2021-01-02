import React, { PureComponent } from 'react';
import T from 'prop-types';

import Checkbox from 'components/Checkbox';

import Classes from './styles.css';


class FilterItem extends PureComponent {
  static propTypes = {
    children: T.node.isRequired,
    maxLength: T.number.isRequired,
    meta: T.string.isRequired,
    selected: T.bool,
    onClick: T.func.isRequired,
    value: T.oneOfType([
      T.bool,
      T.string,
    ]).isRequired,
  };

  static defaultProps = {
    selected: false,
  };

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(event) {
    if (event.key === 'Enter') {
      this.filterAction();
    }
  }

  handleClick(event) {
    event.currentTarget.blur();
    this.filterAction();
  }

  filterAction() {
    const {
      maxLength, meta, onClick, value,
    } = this.props;

    onClick({
      maxLength,
      name: meta,
      value,
    });
  }

  render() {
    const { children, selected } = this.props;

    return (
      <li>
        <div
          className={ Classes.itemCheckbox }
          onClick={ this.handleClick }
          onKeyDown={ this.handleKeyDown }
          role="menuitemcheckbox"
          tabIndex="0"
          aria-checked={ selected }
        >
          <Checkbox checked={ selected } />
          <span className={ Classes.label }>
            { children }
          </span>
        </div>
      </li>
    );
  }
}

export default FilterItem;
