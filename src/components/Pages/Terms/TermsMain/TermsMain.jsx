import React from 'react';
// import PropTypes from 'prop-types';
import { useLanguage } from '../../../../hooks/useLanguage';
import MainDefault from '../../../Ui/MainDefault/MainDefault';

const TermsMain = ({ main }) => {
  const { title_ua, title_fr, title_en, data } = main;

  return (
    <div>
      <MainDefault
        title={useLanguage(title_ua, title_fr, title_en)}
        column={true}
      >
        <div className="revision-wrapper">
          <div className="revision-title__wrapper">
            <p className="revision-title">
              {useLanguage(
                'Дата редакції:',
                'Date de révision:',
                'Revision date:'
              )}
            </p>
          </div>
          <div className="revision-date__wrapper">
            <span className="revision-date">{data}</span>
          </div>
        </div>
      </MainDefault>
    </div>
  );
};

// TermsMain.propTypes = {};

export default TermsMain;
