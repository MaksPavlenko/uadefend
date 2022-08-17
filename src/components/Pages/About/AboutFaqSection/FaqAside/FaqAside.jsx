import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../../hooks/useLanguage';

import NeedsIcon from '../../../../../svg/important.svg';
import CatalogItemDefault from '../../../../Ui/CatalogItemDefault/CatalogItemDefault';


const FaqAside = ({ faqData, rounds }) => {
  const langToggle = useLanguage;

  return (
    <div className="faq-aside">
      <div className="faq-aside__header">
        <div className="faq-aside__title">
          <h2 className="faq-aside__title-text">
            {langToggle(
              faqData.marker_ua,
              faqData.marker_fr,
              faqData.marker_en
            )}
          </h2>
        </div>
        <div className="faq-aside__icon">
          <NeedsIcon />
        </div>
      </div>
      <div className="faq__round-slide">
        <CatalogItemDefault item={faqData.important_item} rounds={rounds} />
      </div>
    </div>
  );
};

FaqAside.propTypes = {
  faqData: PropTypes.object,
};

export default FaqAside;
