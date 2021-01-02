import React from 'react';
import T from 'prop-types';

import Classes from './styles.css';

function Checkbox(props) {
  const { checked } = props;
  const rootClassName = checked ? Classes.rootChecked : Classes.root;

  return (
    <span className={ rootClassName } />
  );
}

Checkbox.propTypes = {
  checked: T.bool,
};

Checkbox.defaultProps = {
  checked: false,
};

export default Checkbox;
