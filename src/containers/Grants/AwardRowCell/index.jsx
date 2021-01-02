import React from 'react';
import T from 'prop-types';

import Classes from './styles.css';


function AwardRowCell(props) {
  const {
    amount, mentorship, show, residency,
  } = props;

  return (
    <div className={ Classes.root }>
      { amount }
      { show ? (<div title="Show" className={ Classes.showSymbol } />) : null }
      { mentorship ? (<div title="Mentorship" className={ Classes.mentorshipSymbol } />) : null }
      { residency ? (<div title="Residency" className={ Classes.residencySymbol } />) : null }
    </div>
  );
}

AwardRowCell.propTypes = {
  amount: T.string,
  mentorship: T.bool,
  show: T.bool,
  residency: T.bool,
};

AwardRowCell.defaultProps = {
  amount: '',
  mentorship: null,
  show: null,
  residency: null,
};

export default AwardRowCell;
