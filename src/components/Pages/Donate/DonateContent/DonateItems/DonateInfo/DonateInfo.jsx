import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../../../hooks/useLanguage';
import SimpleTitleText from '../../../../../Ui/SimpleTitleText/SimpleTitleText';
import SimpleTitle from '../../../../../Ui/SimpleTitle/SimpleTitle';

const DonateInfo = ({ donateData }) => {
  const langToggle = useLanguage;

  return (
    <>
      <SimpleTitle
        title={langToggle(
          donateData.title_ua,
          donateData.title_fr,
          donateData.title_en
        )}
      />
      <ul className="donate-info__items">
        {donateData.info_items.map((item, index) => {
          return (
            <li className="donate-info__item" key={index}>
              <SimpleTitleText
                title={langToggle(item.title_ua, item.title_fr, item.title_en)}
                description={langToggle(
                  item.description_ua,
                  item.description_fr,
                  item.description_en
                )}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

DonateInfo.propTypes = {
  donateData: PropTypes.object,
};

export default DonateInfo;
