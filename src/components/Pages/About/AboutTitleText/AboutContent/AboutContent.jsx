import React from 'react';
import PropTypes from 'prop-types';
import { gsap, Power2 } from 'gsap';
import { ThemeContext } from '../../../../../context/ThemeProvider';
import { useLanguage } from '../../../../../hooks/useLanguage';
import TitleText from '../../../../Ui/TitleText/TitleText';
import FooterLogo from '../../../../../svg/footer-logo.svg';

const AboutContent = ({ aboutData }) => {
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
  }, [tl, time]);

  return (
    <div className="about-text__wrapper load-faid">
      <TitleText
        title={langToggle(
          aboutData.title_ua,
          aboutData.title_fr,
          aboutData.title_en
        )}
        description={langToggle(
          aboutData.description_ua,
          aboutData.description_fr,
          aboutData.description_en
        )}
      />
      <div className="footer-logo__wrapper">
        <div className="footer-logo__icon">
          <FooterLogo />
        </div>
        <div className="footer-logo__text">
          {langToggle(
            'Дякуємо, що долучаєтеся. \nСлава Україні!',
            "Merci de nous rejoindre. \nGloire à l'Ukraine!",
            'Thank you for joining. \nGlory to Ukraine!'
          )}
        </div>
      </div>
    </div>
  );
};

AboutContent.propTypes = {
  aboutData: PropTypes.object,
};

export default AboutContent;
