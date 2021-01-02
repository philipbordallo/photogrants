import React from 'react';

import noop from 'utilities/noop';

import GrantsPage from 'layout/GrantsPage';
import Classes from 'layout/styles';


function App() {
  return (
    <div className={ Classes.root } onTouchStart={ noop }>
      <div className={ Classes.contentContainer }>
        <GrantsPage />
      </div>
    </div>
  );
}

export default App;
