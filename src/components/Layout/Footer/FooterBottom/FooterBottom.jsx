import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../hooks/useLanguage';
import Nunox from '../../../../svg/nunox.svg';

const FooterTop = ({ links }) => {
  const langToggle = useLanguage;
  function getYear() {
    return new Date().getFullYear();
  }

  return (
    <div className="footer-bottom__end">
      <div className="footer-bottom__copy-container">
        <p className="footer-bottom__copy-text bold">
          <b>{langToggle(links.marker_ua, links.marker_fr, links.marker_en)}</b>
        </p>
        <p className="footer-bottom__copy-text bold">
          <b>&nbsp;&nbsp;&nbsp;&nbsp; &#169; &nbsp;&nbsp;&nbsp;&nbsp;</b>
        </p>
        <p className="footer-bottom__copy-text">
          {getYear()} &nbsp;
          {langToggle(
            links.description_ua,
            links.description_fr,
            links.description_en
          )}
        </p>
      </div>
      <div className="footer-bottom__nunox-container">
        <a
          href="https://nunox.co/"
          className="footer-bottom__nunox-link"
          target="blank"
        >
          <Nunox />
        </a>
      </div>
    </div>
  );
};

FooterTop.propTypes = {
  links: PropTypes.object,
};

export default FooterTop;
