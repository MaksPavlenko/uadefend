import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../hooks/useLanguage';
import { gsap, Power2 } from 'gsap';
import { ThemeContext } from '../../../../context/ThemeProvider';

import SectionHeader from '../../../Ui/SectionHeader/SectionHeader';
import DefaultSlider from '../../../Ui/DefaultSlider/DefaultSlider';
import CatalogItemDefault from '../../../Ui/CatalogItemDefault/CatalogItemDefault';
import Check from '../../../../svg/header_check.svg';
import ButtonUp from '../../../../svg/arrow_up.svg';

const CloseRounds = ({ closeRaunds, closeRoundsData }) => {
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

  const buttonData = {
    clasButton: 'arrow',
    link: '/rounds-catalog/',
    title: langToggle(
      'Перейти в каталог',
      'Aller au catalogue',
      'Go to the catalog'
    ),
    icon: <ButtonUp className="default-button__icon" />,
  };

  const totalCounter =
    closeRaunds.length <= 9
      ? `0${closeRaunds.length}`
      : `${closeRaunds.length}`;

  return (
    <section className="home-closeRound load-faid">
      <SectionHeader
        sectionTitle={langToggle(
          closeRoundsData.title_ua,
          closeRoundsData.title_fr,
          closeRoundsData.title_en
        )}
      >
        <Check className="hand" />
      </SectionHeader>
      <div className="open-round__slider-wrapper">
        <DefaultSlider totalCounter={totalCounter} buttonData={buttonData}>
          {closeRaunds.map((rounds, index) => {
            return (
              <div className="round-slide" key={index}>
                <CatalogItemDefault rounds={rounds} />
              </div>
            );
          })}
        </DefaultSlider>
      </div>
    </section>
  );
};

CloseRounds.propTypes = {
  closeRaunds: PropTypes.array,
  closeRoundsData: PropTypes.object,
};

export default CloseRounds;
