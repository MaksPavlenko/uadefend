import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../../hooks/useLanguage';
import { ThemeContext } from '../../../../../context/ThemeProvider';

import NeedsIcon from '../../../../../svg/header_important.svg';
import CheckIcon from '../../../../../svg/donate_check.svg';
import CatalogItemDefault from '../../../../Ui/CatalogItemDefault/CatalogItemDefault';

const DonateAside = ({ importantItemData }) => {
  const { payMode } = React.useContext(ThemeContext);
  // const pas = payMode === null ? importantItemData : payMode;
  // console.log(importantItemData);

  const langToggle = useLanguage;

  return (
    <div className="faq-aside">
      <div className="faq-aside__header">
        <div className="faq-aside__title">
          <h2 className="faq-aside__title-text">
            {payMode === null
              ? langToggle('Першочергова потреба', 'Priorité', 'Top priority')
              : langToggle('Ваш вибір', 'Votre choix', 'Your choice')}
          </h2>
        </div>
        <div className="faq-aside__icon">
          {payMode === null ? (
            <NeedsIcon className="faq-aside__icon--icon" />
          ) : (
            <CheckIcon className="faq-aside__icon--icon" />
          )}
        </div>
      </div>
      <div className="faq__round-slide">
        <CatalogItemDefault
          rounds={payMode === null ? importantItemData : payMode}
        />
      </div>
    </div>
  );
};

DonateAside.propTypes = {
  importantItemData: PropTypes.object,
};

export default DonateAside;
