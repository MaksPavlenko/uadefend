import React from 'react';
import PropTypes from 'prop-types';
import Instagram from '../../../svg/instagram.svg';
import Facebook from '../../../svg/facebook.svg';
import Telegram from '../../../svg/telegram.svg';

const SocialDefault = ({ socials }) => {
  return (
    <div className="social-default-wrapper">
      <ul className="social-default">
        {socials.map((item, index) => {
          return (
            <li className="social-default__item" key={index}>
              <a
                href={item.link}
                target="blank"
                className="social-default__link"
              >
                {item.title === 'instagram' ? (
                  <Instagram className="social-default__icon" />
                ) : item.title === 'facebook' ? (
                  <Facebook className="social-default__icon" />
                ) : (
                  <Telegram className="social-default__icon" />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

SocialDefault.propTypes = {
  socials: PropTypes.array,
};

export default SocialDefault;
