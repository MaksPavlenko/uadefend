import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../hooks/useLanguage';
import { gsap, Power2 } from 'gsap';
import { ThemeContext } from '../../../../context/ThemeProvider';

import SectionHeader from '../../../Ui/SectionHeader/SectionHeader';
import Question from '../../../../svg/header_guestion.svg';
import { Column, GridContainer } from '../../../Ui/StandartGrid/StandartGrid';
import FaqAside from './FaqAside/FaqAside';
import AboutFaq from './AboutFaq/AboutFaq';
import AsideDefault from '../../../Ui/AsideDefault/AsideDefault';

const AboutFaqSection = ({ faqData, items, rounds }) => {
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
    <section className="home-faq load-faid">
      <div className="home-about__header">
        <SectionHeader
          sectionTitle={langToggle(
            faqData.title_ua,
            faqData.title_fr,
            faqData.title_en
          )}
        >
          <Question />
        </SectionHeader>
      </div>

      <div className="home-faq__wrapper">
        <GridContainer>
          <Column>
            <AsideDefault offsetTop={140}>
              <FaqAside faqData={faqData} rounds={rounds} />
            </AsideDefault>
          </Column>
          <Column>
            <AboutFaq items={items} />
          </Column>
        </GridContainer>
      </div>
    </section>
  );
};

AboutFaqSection.propTypes = {
  faqData: PropTypes.object,
  items: PropTypes.array,
};

export default AboutFaqSection;
