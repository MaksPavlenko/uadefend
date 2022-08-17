import React from 'react';
import PropTypes from 'prop-types';

import Telegram from '../../../../../svg/telegram.svg';
import Viber from '../../../../../svg/viber.svg';
import Whatsapp from '../../../../../svg/whatsapp.svg';

const Messangers = ({ item }) => {
  return (
    <div className="social-center__telegram hover-class">
      <a
        href={item.link}
        target="blank"
        className="social-center__telegram-link"
      >
        {item.title === 'telegram' ? (
          <Telegram className="social-center__icon" />
        ) : item.title === 'viber' ? (
          <Viber className="social-center__icon" />
        ) : (
          <Whatsapp className="social-center__icon" />
        )}
        <span className="in-text">{item.title}</span>
      </a>
    </div>
  );
};

Messangers.propTypes = {
  item: PropTypes.object
};

export default Messangers;
