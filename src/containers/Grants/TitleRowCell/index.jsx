import React, { PureComponent } from 'react';
import T from 'prop-types';

import Classes from './styles';

class TitleRowCell extends PureComponent {
  static propTypes = {
    name: T.string.isRequired,
    orgName: T.string.isRequired
  };

  render() {
    const { orgName, name } = this.props;

    return (
      <div className={ Classes.root }>
        { orgName ? <span className={ Classes.orgName }>{ orgName }</span> : null }
        { name }
      </div>
    );
  }
}

export default TitleRowCell;
