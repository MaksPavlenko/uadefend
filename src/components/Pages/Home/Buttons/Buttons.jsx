import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../hooks/useLanguage';
import { Link } from 'gatsby-plugin-react-i18next';
import { gsap, Power2 } from 'gsap';
import { ThemeContext } from '../../../../context/ThemeProvider';

import ArrowUp from '../../../../svg/arrow_up.svg';
import PlusWhite from '../../../../svg/plus-b.svg';

const Buttons = ({ buttonsData }) => {
  const langToggle = useLanguage;

  const { loaderMode } = React.useContext(ThemeContext);
  const time = loaderMode === false ? 9 : 1.8;

  const [tl] = React.useState(gsap.timeline({ paused: false }));
  React.useEffect(() => {
    tl.to('.load-faid', 1.2, {
      opacity: 1,
      y: 0,
      ease: Power2.easeOut,
      delay: time,
    });
  }, [tl]);

  return (
    <div className="buttons__wrapper load-faid">
      <div className="buttons__catalog-wrapper">
        <Link
          to="/rounds-catalog/"
          className="buttons__catalog-button"
          aria-label="Open"
        >
          <span className="button-bg__white"></span>
          <p className="buttons__catalog-button_text">
            {langToggle(
              buttonsData.catalogButton_ua,
              buttonsData.catalogButton_fr,
              buttonsData.catalogButton_en
            )}
          </p>
          <ArrowUp className="arrowUp" />
        </Link>
      </div>
      <div className="buttons__donat-wrapper">
        <Link
          to="/donate/"
          className="buttons__donat-button"
          aria-label="donat"
        >
          <span className="button-bg__white"></span>
          <p className="buttons__donat-button_text">
            {langToggle(
              buttonsData.donatButton_ua,
              buttonsData.donatButton_fr,
              buttonsData.donatButton_en
            )}
          </p>
          <PlusWhite className="plusWhite" />
        </Link>
      </div>
    </div>
  );
};

Buttons.propTypes = {
  buttonsData: PropTypes.object,
};

export default Buttons;
