import React from 'react';
// import PropTypes from 'prop-types';
import DockIcon from '../../../../../../svg/copy.svg';

const TermsAsideHeader = () => {
  return (
    <div className="terms-aside__header">
      <span className="terms-aside__title">Документи фонду</span>
      <span className="terms-aside__icon--wrapper">
        <DockIcon />
      </span>
    </div>
  );
};

// TermsAsideHeader.propTypes = {};

export default TermsAsideHeader;
