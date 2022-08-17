import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../hooks/useLanguage';
import { gsap, Power2 } from 'gsap';
import { ThemeContext } from '../../../../context/ThemeProvider';

import { Column, GridContainer } from '../../../Ui/StandartGrid/StandartGrid';
import SectionHeader from '../../../Ui/SectionHeader/SectionHeader';
import AboutAside from './AboutAside/AboutAside';
import AboutContent from './AboutContent/AboutContent';
import Info from '../../../../svg/header_info.svg';
import HomeAboutFooter from './HomeAboutFooter/HomeAboutFooter';

const HomeAbout = ({ aboutData, mainData, about }) => {
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
    <section className="home-about load-faid">
      <div className="home-about__header">
        <SectionHeader
          sectionTitle={langToggle(
            aboutData.title_ua,
            aboutData.title_fr,
            aboutData.title_en
          )}
        >
          <Info />
        </SectionHeader>
      </div>

      <div className="home-about__wrapper">
        <GridContainer>
          <Column>
            <AboutAside mainData={mainData} />
          </Column>
          <Column>
            <AboutContent
              about={about.about_home}
              aboutLeft={about.about_text_right}
            />
          </Column>
        </GridContainer>
      </div>
      <HomeAboutFooter />
    </section>
  );
};

HomeAbout.propTypes = {
  aboutData: PropTypes.object,
  mainData: PropTypes.object,
  about: PropTypes.object,
};

export default HomeAbout;
