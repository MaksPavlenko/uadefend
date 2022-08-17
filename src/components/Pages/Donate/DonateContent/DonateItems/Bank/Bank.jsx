import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../../../hooks/useLanguage';

import SimpleTitle from '../../../../../Ui/SimpleTitle/SimpleTitle';
import SectionUi from '../../../../../Ui/SectionUi/SectionUi';
import { BankUiCopy } from '../../../../../Ui/BankUi/BankUi';

const Bank = ({ item, copy, setCopy }) => {
  const langToggle = useLanguage;
  // const itId = Math.floor(Math.random() * 3);

  return (
    <SectionUi>
      <SimpleTitle
        title={langToggle(item.title_ua, item.title_fr, item.title_en)}
      />
      <div className="bank-items__wrapper">
        {item.details.map((item, index) => {
          return (
            <BankUiCopy
              title={langToggle(item.marker_ua, item.marker_fr, item.marker_en)}
              value={
                item.value
                  ? item.value
                  : langToggle(item.value_ua, item.value_fr, item.value_en)
              }
              key={index}
              id={`bnk${item.id}`}
              copy={copy}
              setCopy={setCopy}
            />
          );
        })}
      </div>
    </SectionUi>
  );
};

Bank.propTypes = {
  donateData: PropTypes.object,
};

export default Bank;
