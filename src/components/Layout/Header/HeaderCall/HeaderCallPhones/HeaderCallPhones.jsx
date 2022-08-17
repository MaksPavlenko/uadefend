import React from 'react';
import PropTypes from 'prop-types';

const HeaderCallPhones = ({ phones }) => {
  return (
    <ul className="call-phone__list">
      {phones.map((item, index) => {
        return (
          <li className="call-phone__item" key={index}>
            <a
              href={`tel:` + item.phone.toString().replace(/[- )(]/g, '')}
              className="call-phone__item-link"
            >
              {item.phone}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

HeaderCallPhones.propTypes = {
  phones: PropTypes.array,
};

export default HeaderCallPhones;
