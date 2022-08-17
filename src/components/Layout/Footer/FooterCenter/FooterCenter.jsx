import React from 'react';
import PropTypes from 'prop-types';

import Socials from './FooterCenterItems/Socials';
import {Phones, WorkTime} from './FooterCenterItems/Phones';
import Messangers from './FooterCenterItems/Messangers';

const FooterCenter = ({ socials, messangers, phones }) => {
  const phonesLength = phones.length;
  const phonesItems = phones.map((item, index) => <Phones phone={item.phone} key={index} />);

  return (
    <div className="footer-center footer__item footer__item-center">
      <div className="footer-center__social-top footer-left__title-container footer__social">
        {socials.map((item, index) => {
          return <Socials item={item} key={index} />;
        })}
      </div>

      <div className="footer-center__fones-wrapper footer__phones">
        {phonesLength === 3 ? phonesItems : <><WorkTime/> {phonesItems}</>}   
      </div>

      <div className="footer-center__social-bottom footer__messangers">
        {messangers.map((item, index) => {
          return <Messangers item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

FooterCenter.defaultProps = {
  socials: [],
  phones: [],
  messangers: [],
};

FooterCenter.propTypes = {
  socials: PropTypes.array,
  phones: PropTypes.array,
  messangers: PropTypes.array,
};

export default FooterCenter;
