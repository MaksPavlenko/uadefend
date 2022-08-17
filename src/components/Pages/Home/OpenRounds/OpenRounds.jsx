import React from 'react';
import PropTypes from 'prop-types';
import { gsap, Power2 } from 'gsap';
import { ThemeContext } from '../../../../context/ThemeProvider';
import { useLanguage } from '../../../../hooks/useLanguage';
import SectionHeader from '../../../Ui/SectionHeader/SectionHeader';
import DefaultSlider from '../../../Ui/DefaultSlider/DefaultSlider';
import CatalogItemDefault from '../../../Ui/CatalogItemDefault/CatalogItemDefault';
import Heart from '../../../../svg/header_heart.svg';
import ButtonUp from '../../../../svg/arrow_up.svg';

const OpenRounds = ({ openRaunds, openRoundData }) => {

  const updatePrice = () => {
    fetch("https://api.uadefend.com/donate/getRounds", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    
    })
      .then((res) => res.json())
      .then((result) => {
        const updateRounds = result
        openRaunds.map(oldRound=>{
          updateRounds.map(newRound=>{
            if(oldRound.slug === newRound.slug) {
              oldRound.current_price = newRound.current_price        
            }
          })
        })
      })
  }

  React.useEffect(()=>{
    updatePrice()
    setInterval(updatePrice,9000)
  },[])


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

  const totalCounter =
    openRaunds.length <= 9 ? `0${openRaunds.length}` : `${openRaunds.length}`;

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

  return (
    <section className="home-openRound load-faid">
      <SectionHeader
        sectionTitle={langToggle(
          openRoundData.title_ua,
          openRoundData.title_fr,
          openRoundData.title_en
        )}
      >
        <Heart />
      </SectionHeader>
      <div className="open-round__slider-wrapper">
        <DefaultSlider totalCounter={totalCounter} buttonData={buttonData}>
          {openRaunds.map((rounds, index) => {
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

OpenRounds.propTypes = {
  openRaunds: PropTypes.array,
  openRoundData: PropTypes.object,
};

export default OpenRounds;
