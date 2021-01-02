import React from 'react';

import Classes from './styles.css';

function ApplicationHeader() {
  return (
    <header className={ Classes.root }>
      <h1 className={ Classes.title }>photogrants</h1>
    </header>
  );
}

export default ApplicationHeader;
