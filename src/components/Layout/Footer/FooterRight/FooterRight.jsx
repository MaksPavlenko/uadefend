import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../hooks/useLanguage';
import { scroller } from 'react-scroll';

import UpArrow from '../../../../svg/arr-up.svg';
import FooterMenu from './FooterMenu/FooterMenu';
import FooterPolisy from './FooterPolisy/FooterPolisy';

const FooterRight = ({ title, links, navigationData }) => {
  const langToggle = useLanguage;

  function scrollToSection() {
    scroller.scrollTo('top-section', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  }

  return (
    <div className="footer-right footer__item">
      <div className="footer-right__up">
        <button
          className="up__button"
          aria-label="scroll to Up"
          onClick={scrollToSection}
        >
          <div className="up__text-wrapper">
            <div className="up__text">
              {langToggle(
                title.upButton_ua,
                title.upButton_fr,
                title.upButton_en
              )}
            </div>
          </div>

          <div className="up__icon">
            <div className="up__icon__wrapper">
              <UpArrow className="up__icon-icon" />
              <UpArrow className="up__icon-icon" />
            </div>
          </div>
        </button>
      </div>
      <FooterMenu navigationData={navigationData} links={links} />
      <FooterPolisy links={links} />
    </div>
  );
};

FooterRight.propTypes = {
  title: PropTypes.object,
  menuData: PropTypes.object,
  links: PropTypes.array,
  navigationData: PropTypes.array,
};

export default FooterRight;
