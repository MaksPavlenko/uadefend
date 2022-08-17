import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby-plugin-react-i18next';
import { useLanguage } from '../../../../../hooks/useLanguage';

const FooterMenu = ({ navigationData, links }) => {
  const langToggle = useLanguage;

  return (
    <>
      <div className="footer-right__menu-wrapper">
        <div className="footer-right__menu-content">
          <ul className="footer-right__menu-item">
            {navigationData.map((item, index) => {
              return (
                <li className="footer-right__menu-liks" key={index}>
                  <Link to={item.slug} className="footer-right__menu-item">
                    {langToggle(item.title_ua, item.title_fr, item.title_en)}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="confidentiality-container">
            {links.map((item, index) => {
              return (
                <div
                  className="footer-right__confidentiality-links"
                  key={index}
                >
                  <Link to={item.link} className="link">
                    {langToggle(item.marker_ua, item.marker_fr, item.marker_en)}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

FooterMenu.propTypes = {
  navigationData: PropTypes.array,
  links: PropTypes.array,
};

export default FooterMenu;
