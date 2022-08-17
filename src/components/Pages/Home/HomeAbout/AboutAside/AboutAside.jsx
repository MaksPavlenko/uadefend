import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../../hooks/useLanguage';
// import AsideDefault from '../../../../Ui/AsideDefault/AsideDefault';

const AboutAside = ({ mainData }) => {
  const langToggle = useLanguage;

  return (
    <div className='about-aside'>
      <div className="aside-title__wrapper">
        <h2 className="aside-title">
        {langToggle(
            mainData.title_ua,
            mainData.title_fr,
            mainData.title_en
          )}
        </h2>
      </div>
    </div>
  );
};

AboutAside.propTypes = {
  mainData: PropTypes.object,
};

export default AboutAside;
