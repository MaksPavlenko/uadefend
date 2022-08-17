import React from 'react';
import PropTypes from 'prop-types';

import Instsgram from '../../../../../svg/instagram.svg';
import Telegram from '../../../../../svg/telegram.svg';
import Facebook from '../../../../../svg/facebook.svg';

const Socials = ({ item }) => {
  return (
    <div className="social-center__instagramm hover-class">
      <a
        href={item.link}
        target="blank"
        className="social-center__instagramm-link"
      >
        {item.title === 'instagram' ? (
          <Instsgram className="social-center__icon" />
        ) : item.title === 'telegram' ? (
          <Telegram className="social-center__icon" />
        ) : (
          <Facebook className="social-center__icon" />
        )}
        <span className="in-text">{item.title}</span>
      </a>
    </div>
  );
};

Socials.propTypes = {
  item: PropTypes.object,
};

export default Socials;
