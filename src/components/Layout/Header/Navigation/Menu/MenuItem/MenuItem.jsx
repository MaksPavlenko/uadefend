import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import { useLanguage } from '../../../../../../hooks/useLanguage';
import PropTypes from 'prop-types';
import Arrow from '../../../../../../svg/nav_arrow.svg';
import ArrowBottom from '../../../../../../svg/nav_arrow_bottom.svg';
import Plus from '../../../../../../svg/nav_plus.svg';

export const MenuItem = ({ item }) => {
  const { slug, title_ua, title_fr, title_en } = item;
  const icon =
    title_ua === 'Зробити внесок' ? (
      <Plus className="navigation-item__icon navigation-item__icon--plus" />
    ) : (
      <Arrow className="navigation-item__icon" />
    );
  return (
    <li className="navigation-item">
      <Link to={slug} className="navigation-item__link">
        <span className="navigation-item__link--wrapper">
          <span className="navigation-item__title--wrapper">
            <span className="navigation-item__title">
              {useLanguage(title_ua, title_fr, title_en)}
            </span>
          </span>
          {title_ua === 'Зробити внесок' ? (
            <span className="navigation-item__icon--wrapper">{icon}</span>
          ) : (
            <span className="navigation-item__icon--wrapper">
              {icon}
              {icon}
            </span>
          )}
        </span>
      </Link>
    </li>
  );
};

export const MenuItemContacts = ({ scrollFunc }) => {
  return (
    <li className="navigation-item">
      <button className="navigation-item__link" onClick={scrollFunc}>
        <span className="navigation-item__link--wrapper">
          <span className="navigation-item__title--wrapper">
            <span className="navigation-item__title">
              {useLanguage('Контакти', 'Contacts', 'Contacts')}
            </span>
          </span>
          <span className="navigation-item__icon--wrapper is-rotate">
            <ArrowBottom className="navigation-item__icon navigation-item__icon--rotate" />
            <ArrowBottom className="navigation-item__icon navigation-item__icon--rotate" />
          </span>
        </span>
      </button>
    </li>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object,
};

MenuItemContacts.propTypes = {
  scrollFunc: PropTypes.func,
};
