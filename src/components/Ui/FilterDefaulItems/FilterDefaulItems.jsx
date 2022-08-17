import React from 'react';
import PropTypes from 'prop-types';

export const FilterDefaulButton = ({ filterHendler, active }) => {
  return (
    <li className="filter-item">
      <button
        className={active ? 'filter-button is-active' : 'filter-button'}
        onClick={filterHendler}
      >
        <span className="filter-button__title--wrapper">
          <span className="filter-button__title">{title}</span>
        </span>
        <span className="filter-button__marker">
          <span className="filter-button__marker--check"></span>
        </span>
      </button>
    </li>
  );
};

export const FilterDefaulLink = () => {
  return (
    <div>
      <h2>Link</h2>
    </div>
  );
};

FilterDefaulButton.propTypes = {};
FilterDefaulLink.propTypes = {};
