import React from 'react';
import PropTypes from 'prop-types';

const Burger = ({ openMenu }) => {
  return (
    <div className="burger__wrapper">
      <button className="burger" onClick={openMenu} aria-label="open menu">
        <span className="burger__lines">
          <span className="burger__line line-a-1"></span>
          <span className="burger__line line-a-2"></span>
          <span className="burger__line line-b-1"></span>
          <span className="burger__line line-b-2"></span>
        </span>
      </button>
    </div>
  );
};

Burger.propTypes = {
  openMenu: PropTypes.func,
};

export default Burger;
