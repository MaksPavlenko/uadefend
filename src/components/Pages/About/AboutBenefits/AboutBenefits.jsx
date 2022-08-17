import React from 'react';
import PropTypes from 'prop-types';
import { gsap, Power2 } from 'gsap';
import { ThemeContext } from '../../../../context/ThemeProvider';
import { useLanguage } from '../../../../hooks/useLanguage';

import Hand from '../../../../svg/header_guestion.svg';
import SectionHeader from '../../../Ui/SectionHeader/SectionHeader';
import Benefits from '../../../Ui/Benefits/Benefits';

const AboutBenefits = ({ benefitsData }) => {
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
    <section className="home-benefits load-faid">
      <SectionHeader
        sectionTitle={langToggle(
          benefitsData.title_ua,
          benefitsData.title_fr,
          benefitsData.title_en
        )}
      >
        <Hand className="hand" />
      </SectionHeader>
      <div className="home-benefits__wrapper">
        <Benefits
          benefitsData={benefitsData.benefits}
          imgBenefits={benefitsData}
        />
      </div>
    </section>
  );
};

AboutBenefits.propTypes = {
  benefitsData: PropTypes.object,
};

export default AboutBenefits;
