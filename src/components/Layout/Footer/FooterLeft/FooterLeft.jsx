import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../hooks/useLanguage';

import FooterAdress from './FooterAdress/FooterAdress';
import FooterMail from './FooterMail/FooterMail';

const FooterLeft = ({ title, adressData }) => {
  const langToggle = useLanguage;

  return (
    <div className="footer-left footer__item">
      <div className="footer-left__wrapper">
        <div className="footer-left__title-container">
          <span className="footer-left__title">
            {langToggle(title.title_ua, title.title_fr, title.title_en)}
          </span>
        </div>
        <div className="adress-content">
          <FooterAdress adressData={adressData} />
          <FooterMail adressData={adressData} />
        </div>
      </div>
    </div>
  );
};

FooterLeft.propTypes = {
  title: PropTypes.object,
  adressData: PropTypes.object,
};

export default FooterLeft;
