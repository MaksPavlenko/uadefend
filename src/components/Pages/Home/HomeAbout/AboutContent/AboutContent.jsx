import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../../hooks/useLanguage';
import TitleText from '../../../../Ui/TitleText/TitleText';

const AboutContent = ({ about, aboutLeft }) => {
  const langToggle = useLanguage;

  return (
    <div className="about-content">
      <div className="about-content__column">
        {about.about_text_left.map((item, index) => {
          return (
            <div className="about-content__item" key={index}>
              <TitleText
                title={langToggle(item.title_ua, item.title_fr, item.title_en)}
                description={langToggle(
                  item.description_ua,
                  item.description_fr,
                  item.description_en
                )}
              />
            </div>
          );
        })}
      </div>
      <div className="about-content__column">
        {aboutLeft.map((item, index) => {
          return (
            <div className="about-content__item" key={index}>
              <TitleText
                title={langToggle(item.title_ua, item.title_fr, item.title_en)}
                description={langToggle(
                  item.description_ua,
                  item.description_fr,
                  item.description_en
                )}
              />
            </div>
          );
        })}
      </div> 
    </div>
  );
};

AboutContent.propTypes = {
  about: PropTypes.object,
  aboutData: PropTypes.object,
};

export default AboutContent;
