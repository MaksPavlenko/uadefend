import React from 'react';
import { gsap, Power2 } from 'gsap';
import { ThemeContext } from '../../../../context/ThemeProvider';
import { useLanguage } from '../../../../hooks/useLanguage';
import PropTypes from 'prop-types';

import NeedsIcon from '../../../../svg/header_important.svg';
import SectionHeader from '../../../Ui/SectionHeader/SectionHeader';
import NeedsContent from './NeedsContent/NeedsContent';

const Needs = ({ needsData }) => {
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
    <section className="needs load-faid">
      <SectionHeader
        sectionTitle={langToggle(
          needsData.title_ua,
          needsData.title_fr,
          needsData.title_en
        )}
      >
        <NeedsIcon />
      </SectionHeader>
      <NeedsContent needsData={needsData.needs_items} />
    </section>
  );
};

Needs.propTypes = {
  needsData: PropTypes.object,
};

export default Needs;
