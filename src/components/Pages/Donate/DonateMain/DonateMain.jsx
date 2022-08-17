import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../hooks/useLanguage';
import MainDefault from '../../../Ui/MainDefault/MainDefault';
import Emblem from '../../../../svg/emblem.svg';

const DonateMain = ({ donateData }) => {
  return (
    <>
      <MainDefault
        title={useLanguage(
          donateData.title_ua,
          donateData.title_fr,
          donateData.title_en
        )}
      >
        <div className="main-thanks__wrapper">
          <div className="main-thanks__emblem--wrapper">
            <Emblem className="main-thanks__emblem" />
          </div>
          <div className="main-thanks__text--wrapper">
            <p className="main-thanks__text">
              {useLanguage(
                'Дякуємо, що долучаєтеся. \nСлава Україні!',
                "Merci de nous rejoindre. \nGloire à l'Ukraine!",
                'Thank you for joining. \nGlory to Ukraine!'
              )}
            </p>
          </div>
        </div>
      </MainDefault>
    </>
  );
};

DonateMain.propTypes = {
  donateData: PropTypes.object,
};

export default DonateMain;
