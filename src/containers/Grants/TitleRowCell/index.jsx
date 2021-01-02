import React from 'react';
import T from 'prop-types';

import Classes from './styles.css';

function TitleRowCell(props) {
  const { orgName, name } = props;

  return (
    <div className={ Classes.root }>
      { orgName ? <span className={ Classes.orgName }>{ orgName }</span> : null }
      { name }
    </div>
  );
}

TitleRowCell.propTypes = {
  name: T.string.isRequired,
  orgName: T.string.isRequired,
};

export default TitleRowCell;
