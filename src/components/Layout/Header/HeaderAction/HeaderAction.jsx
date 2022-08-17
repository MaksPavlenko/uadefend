import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import { useLanguage } from '../../../../hooks/useLanguage';

import HeartIcon from '../../../../svg/header_heart.svg';

const HeaderAction = () => {
  return (
    <Link to="/donate/" className="action-button">
      <span className="action-button__title--wrapper">
        <span className="action-button__title">
          {/* {useLanguage('Зробити внесок', 'Contribuer', 'To contribute')} */}
          {useLanguage('Підтримати', 'Soutien', 'Donate')}
        </span>
      </span>

      <span className="action-button__icon">
        <span className="action-button__icon-line"></span>
        <span className="action-button__icon-line"></span>
      </span>
      <span className="action-button__heart">
        <HeartIcon />
      </span>
    </Link>
  );
};

HeaderAction.propTypes = {};

export default HeaderAction;
