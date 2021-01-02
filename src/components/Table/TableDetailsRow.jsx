import React, { Component } from 'react';
import T from 'prop-types';

import noop from 'utilities/noop';

import { DATA_PROPTYPES } from 'containers/Grants/propTypes';

import Classes from './styles.css';

class TableDetailsRow extends Component {
  static propTypes = {
    data: DATA_PROPTYPES.isRequired,
    fireAnalyticsEvent: T.func.isRequired,
    scrollable: T.bool.isRequired,
    colSpan: T.number,
    renderer: T.func,
  };

  static defaultProps = {
    colSpan: 1,
    renderer: noop,
  };

  constructor() {
    super();

    this.setDetailsRef = this.setDetailsRef.bind(this);
  }

  componentDidMount() {
    const { scrollable } = this.props;
    if (scrollable) {
      const detailsPosition = this.detailsRef.getBoundingClientRect();
      const rowPosition = this.detailsRef.previousSibling.getBoundingClientRect();

      const offset = { bottom: 24, top: 42 };
      const bothHeights = detailsPosition.height + rowPosition.height + offset.top;
      const fromTop = rowPosition.top - offset.top;

      const shouldScrollBottom = detailsPosition.bottom > window.innerHeight;
      const shouldScrollTop = fromTop < 0 || bothHeights > window.innerHeight;

      let top = 0;
      if (shouldScrollBottom) top = (detailsPosition.bottom + offset.bottom) - window.innerHeight;
      if (shouldScrollTop) top = rowPosition.top - offset.top;

      if (shouldScrollBottom || shouldScrollTop) window.scrollBy({ top, behavior: 'smooth' });
    }
  }

  shouldComponentUpdate(nextProps) {
    const { data } = this.props;
    return data.show !== nextProps.data.show;
  }

  setDetailsRef(ref) {
    this.detailsRef = ref;
  }

  render() {
    const {
      data, renderer, colSpan, fireAnalyticsEvent,
    } = this.props;
    const content = React.createElement(renderer, { data, fireAnalyticsEvent });

    return (
      <tr className={ Classes.detailsRow } ref={ this.setDetailsRef }>
        <td className={ Classes.detailsRowCell } colSpan={ colSpan }>
          { content }
        </td>
      </tr>
    );
  }
}

export default TableDetailsRow;
