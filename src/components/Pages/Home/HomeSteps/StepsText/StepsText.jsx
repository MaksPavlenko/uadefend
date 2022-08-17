import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../../hooks/useLanguage';

import TextList from '../../../../Ui/TextList/TextList';

const StepsText = ({ stepsData }) => {
  const langToggle = useLanguage;

  return (
    <div className="benefitText__text-section">
      {stepsData.map((item, index) => {
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

StepsText.propTypes = {
  stepsData: PropTypes.array,
};

export default StepsText;
