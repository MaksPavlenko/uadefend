import React from 'react';
import PropTypes from 'prop-types';

import Telegram from '../../../../../svg/telegram.svg';
import Viber from '../../../../../svg/viber.svg';
import Whatsapp from '../../../../../svg/whatsapp.svg';

const HeaderCallMessengers = ({ messengers }) => {
  return (
    <ul className="call-messengers__list">
      {messengers.map((item, index) => {
        return (
          <li className="call-messengers__item" key={index}>
            <a href={item.link} className="call-messengers__link">
              {item.title === 'viber' ? (
                <Viber className="call-messengers__icon" />
              ) : item.title === 'telegram' ? (
                <Telegram className="call-messengers__icon" />
              ) : (
                <Whatsapp className="call-messengers__icon" />
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

HeaderCallMessengers.propTypes = {
  messengers: PropTypes.array,
};

export default HeaderCallMessengers;
