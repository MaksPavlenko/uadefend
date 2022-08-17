import React from 'react';
// import PropTypes from 'prop-types';
import Greed from '../../../../svg/greed.svg';
import List from '../../../../svg/list.svg';
// import { truncate } from 'lodash';

const RoundsCatalogButtons = ({ setToggle, toggle }) => {
  return (
    <ul className="toggle-button__list">
      <li className="toggle-button__item">
        <button
          onClick={() => setToggle(false)}
          className={
            toggle === false ? 'toggle-button is-active' : 'toggle-button'
          }
        >
          <Greed className="toggle-button__icon" />
        </button>
      </li>
      <li className="toggle-button__item">
        <button
          onClick={() => setToggle(true)}
          className={
            toggle === true ? 'toggle-button is-active' : 'toggle-button'
          }
        >
          <List className="toggle-button__icon" />
        </button>
      </li>
    </ul>
  );
};

// RoundsCatalogButtons.propTypes = {};

export default RoundsCatalogButtons;
