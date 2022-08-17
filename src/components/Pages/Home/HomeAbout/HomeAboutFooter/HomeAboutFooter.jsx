import React from 'react';
import { useLanguage } from '../../../../../hooks/useLanguage';
// import PropTypes from 'prop-types';
import FooterLogo from '../../../../../svg/footer-logo.svg';
import { DefaulButtonLink } from '../../../../Ui/ButtonUI/ButtonUi';
import {
  Column,
  GridContainer,
} from '../../../../Ui/StandartGrid/StandartGrid';
import ButtonUp from '../../../../../svg/aside_button__arrow.svg';
import ButtonPlus from '../../../../../svg/aside_button__plus.svg';

const HomeAboutFooter = () => {
  const langToggle = useLanguage;

  return (
    <div className="home-about__footer">
      <GridContainer>
        <Column>
          <div className="footer-logo__position">
            <div className="footer-logo__wrapper">
              <div className="footer-logo__icon">
                <FooterLogo />
              </div>
              <div className="footer-logo__text">
                {langToggle(
                  'Дякуємо, що долучаєтеся. \nСлава Україні!',
                  "Merci de nous rejoindre. \nGloire à l'Ukraine!",
                  'Thank you for joining. \nGlory to Ukraine!'
                )}
              </div>
            </div>
          </div>
        </Column>
        <Column>
          <div className="home-about__footer-button">
            <div className="about-aside__button--wrapper">
              <DefaulButtonLink
                clasButton={'aside'}
                link={'/donate/'}
                title={langToggle(
                  'Зробити внесок',
                  'Contribuer',
                  'To contribute'
                )}
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
        </Column>
      </GridContainer>
    </div>
  );
};

// HomeAboutFooter.propTypes = {};

export default HomeAboutFooter;
