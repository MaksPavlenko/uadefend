import React from 'react';
import PropTypes from 'prop-types';


const FooterMail = ({ adressData }) => {

  return (
    <div className="footer-left__mail-container">
      <div className="footer-left__mail-item">
        <a
          href={'mailto:' + adressData.mail}
          className="footer-left__mail-link"
        >
          <span className="footer-left__mail-link_title">
            {adressData.mail}
          </span>
        </a>
      </div>
    </div>
  );
};

FooterMail.propTypes = {
  adressData: PropTypes.object,
};

export default FooterMail;
