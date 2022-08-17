import React from 'react';
import Headphones from '../../../../svg/headphones.svg';
import PropTypes from 'prop-types';
import HeaderCallPhones from './HeaderCallPhones/HeaderCallPhones';
import HeaderCallMessengers from './HeaderCallMessengers/HeaderCallMessengers';

const HeaderCall = ({ messengers, phones }) => {
  return (
    <>
      <div className="call-wrapper">
        <div className="header-call__bg"></div>
        <button className="call-button">
          <Headphones className="call-button__icon" />
        </button>
        <div className="call-list">
          <div className="call-list__bg"></div>
          <HeaderCallPhones phones={phones} />
          <HeaderCallMessengers messengers={messengers} />
        </div>
      </div>
    </>
  );
};

HeaderCall.propTypes = {
  messengers: PropTypes.array,
  phones: PropTypes.array,
};

export default HeaderCall;
