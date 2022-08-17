import React from 'react';
import PropTypes from 'prop-types';

export const Phones = ({ phone }) => {
  return (
    <div className="footer-center__fones-content">
      <a
        href={`tel:` + phone.toString().replace(/[- )(]/g, '')}
        className="footer-center__contacts-item_link"
      >
        <span className="footer-center__contacts-item_link-title">{phone}</span>
      </a>
    </div>
  );
};


export const WorkTime = () => {
  return(
    <div className="footer-center__fones-content">
    <div className="footer-center__contacts-item_link">
      <span className="footer-center__contacts-item_link-title">10:00 - 17:00</span>
    </div>
  </div>
  )
}



Phones.propTypes = {
  phone: PropTypes.string
};


