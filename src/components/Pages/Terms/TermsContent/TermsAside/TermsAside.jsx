import React from 'react';
// import PropTypes from 'prop-types';
import TermsAsideHeader from './TermsAsideHeader/TermsAsideHeader';
import TermsAsideSlider from './TermsAsideSlider/TermsAsideSlider';

const TermsAside = ({ images, handleClick }) => {
  return (
    <div className="terms-aside">
      <TermsAsideHeader />
      <TermsAsideSlider images={images} handleClick={handleClick} />
    </div>
  );
};

// TermsAside.propTypes = {};

export default TermsAside;
