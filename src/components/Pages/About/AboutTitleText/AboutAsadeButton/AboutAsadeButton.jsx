import React from 'react';
// import PropTypes from 'prop-types';
import { DefaulButtonLink } from '../../../../Ui/ButtonUI/ButtonUi';
import { useLanguage } from '../../../../../hooks/useLanguage';
import ButtonUp from '../../../../../svg/aside_button__arrow.svg';
import ButtonPlus from '../../../../../svg/aside_button__plus.svg';

const AboutAsadeButton = () => {
  const langToggle = useLanguage;

  return (
    <div className="about-aside__buttons">
      <div className="about-aside__button--wrapper">
        <DefaulButtonLink
          clasButton={'aside'}
          link={'/donate/'}
          title={langToggle('Зробити внесок', 'Contribuer', 'To contribute')}
        >
          {
            <ButtonPlus className="default-button__icon default-button__icon--plus" />
          }
        </DefaulButtonLink>
      </div>
      <div className="about-aside__button--wrapper">
        <DefaulButtonLink
          clasButton={'aside'}
          link={'/rounds-catalog/'}
          title={langToggle(
            'Раунди допомоги',
            "Tournées d'aide",
            'Rounds of help'
          )}
        >
          {<ButtonUp className="default-button__icon" />}{' '}
          {<ButtonUp className="default-button__icon" />}
        </DefaulButtonLink>
      </div>
    </div>
    // <div className="about-button__wrapper">
    //   <div className="about-button__top">
    //     <ButtonPlusUi
    //       title={langToggle('Зробити внесок', 'Contribuer', 'To contribute')}
    //       link={'/donate/'}
    //     />
    //   </div>
    //   <div className="about-button__bottom">
    //     <ButtonPlusUi
    //       title={langToggle(
    //         'Долучитись до команди',
    //         "Rejoins l'équipe",
    //         'Join the team'
    //       )}
    //       link={'/rouds-catalog/'}
    //     />
    //   </div>
    //   <div className="slider__button_order-container non">
    //     <ButtonUiDonnat
    //       title={langToggle('Зробити внесок', 'Contribuer', 'To contribute')}
    //       link={'/rounds-catalog/'}
    //     />
    //   </div>
    //   <div className="slider__button_order-container non">
    //     <ButtonUiDonnat
    //       title={langToggle(
    //         'Долучитись до команди',
    //         "Rejoins l'équipe",
    //         'Join the team'
    //       )}
    //       link={'/'}
    //     />
    //   </div>
    // </div>
  );
};

// AboutAsadeButton.propTypes = {};

export default AboutAsadeButton;
