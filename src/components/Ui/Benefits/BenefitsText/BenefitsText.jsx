import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../hooks/useLanguage';

import TextList from '../../TextList/TextList';

const BenefitsText = ({ benefitsData }) => {
  const langToggle = useLanguage;

  return (
    <div className="benefitText__text-section">
      {benefitsData.map((item, index) => {
        const count = ++index;
        return (
          <TextList
            key={index}
            count={'0' + count + '.'}
            title={langToggle(item.title_ua, item.title_fr, item.title_en)}
          />
        );
      })}
    </div>
  );
};

BenefitsText.propTypes = {
  benefitsData: PropTypes.array,
};

export default BenefitsText;
