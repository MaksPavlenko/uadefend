import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../hooks/useLanguage';

import MainDefault from '../../../Ui/MainDefault/MainDefault';
import SocialDefault from '../../../Ui/SocialDefault/SocialDefault';

const AboutMain = ({ mainData, socials }) => {
  const { title_ua, title_fr, title_en } = mainData;
  return (
    <div className="page-about">
      <MainDefault title={useLanguage(title_ua, title_fr, title_en)}>
        <SocialDefault socials={socials} />
      </MainDefault>
      
    </div>
  );
};

AboutMain.propTypes = {
  mainData: PropTypes.object,
  socials: PropTypes.array,
};

export default AboutMain;
