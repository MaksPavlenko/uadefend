import React from 'react';
import PropTypes from 'prop-types';
import Visa from '../../../../../svg/visa.svg';
import MasterCard from '../../../../../svg/mastercard.svg';

const FooterPolisy = ({ links }) => {
  return (
    <div className="footer-right__confidentiality">
      <a href="/" className="card-container card-container__left">
        <span className="card-link">
          <Visa className="visa" />
        </span>
      </a>
      <a href="/" className="card-container">
        <span className="card-link">
          <MasterCard className="mastercard" />
        </span>
      </a>
    </div>
  );
};

FooterPolisy.propTypes = {
  links: PropTypes.array,
};

export default FooterPolisy;
