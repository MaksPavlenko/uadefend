import React from 'react';
import PropTypes from 'prop-types';
import { gsap, Power2 } from 'gsap';
import { ThemeContext } from '../../../../context/ThemeProvider';
import { useLanguage } from '../../../../hooks/useLanguage';

import SectionHeader from '../../../Ui/SectionHeader/SectionHeader';
import Heart from '../../../../svg/header_heart.svg';
import DefaultSlider from '../../../Ui/DefaultSlider/DefaultSlider';
import CatalogItemDefault from '../../../Ui/CatalogItemDefault/CatalogItemDefault';
import ButtonUp from '../../../../svg/arrow_up.svg';

const RoundCardSlider = ({ slideCard, catalogData }) => {
  const langToggle = useLanguage;

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
    catalogData.length <= 9
      ? `0${catalogData.length}`
      : `${catalogData.length}`;

  const { loaderMode } = React.useContext(ThemeContext);
  const time = loaderMode === false ? 9 : 1.8;

  const [tl] = React.useState(gsap.timeline({ paused: false }));
  React.useEffect(() => {
    tl.to('.round-card__slider--animate', 1.2, {
      opacity: 1,
      y: 0,
      ease: Power2.easeOut,
      delay: time,
    });
  }, [tl, time]);

  return (
    <section className="home-openRound round-card__slider--animate">
      <SectionHeader
        sectionTitle={langToggle(
          slideCard.title_ua,
          slideCard.title_fr,
          slideCard.title_en
        )}
      >
        <Heart />
      </SectionHeader>
      <div className="open-round__slider-wrapper">
        <DefaultSlider totalCounter={totalCounter} buttonData={buttonData}>
          {catalogData.map((rounds, index) => {
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

RoundCardSlider.propTypes = {
  slideCard: PropTypes.object,
  catalogData: PropTypes.array,
};

export default RoundCardSlider;
