import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../../hooks/useLanguage';
import { gsap } from 'gsap';
import { ThemeContext } from '../../../../../context/ThemeProvider';

const MainText = ({ main }) => {
  const langToggle = useLanguage;

  const { loaderMode } = React.useContext(ThemeContext);
  const time = loaderMode === false ? 9 : 1.8;
  const [tl] = React.useState(gsap.timeline({ paused: false }));

  React.useEffect(() => {
    tl.to('.text-section__description', 1.4, {
      opacity: 1,
      y: 0,
      delay: time,
    }).to('.text-section__title', 1.4, {
      opacity: 1,
      y: 0,
      delay: -1.2,
    });
  }, [tl, time]);

  return (
    <div className="home-main__text-section">
      <div className="text-section__description-wrapper">
        <div className="text-section__description-wrapper_descr">
          <p className="text-section__description">
            {langToggle(
              main.description_ua,
              main.description_fr,
              main.description_en
            )}
          </p>
        </div>
        <div className="text-section__description-wrapper_title">
          <h1 className="text-section__title">
            {langToggle(main.title_ua, main.title_fr, main.title_en)}
          </h1>
        </div>
      </div>
    </div>
  );
};

MainText.propTypes = {
  main: PropTypes.object,
};

export default MainText;
