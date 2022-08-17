import React from 'react';
import PropTypes from 'prop-types';
import Language from '../../../../Ui/Language/Language';

const NavigationHeader = ({ closeMenu }) => {
  return (
    <div className="page-wrapper">
      <div className="navigation-header">
        <div className="navigation-header__lang--wrapper">
          <Language />
        </div>
        <button
          className="navigation__close"
          aria-label="close menu"
          onClick={closeMenu}
        >
          <span className="close__lines">
            <span className="close__line line-a-1"></span>
            <span className="close__line line-a-2"></span>
            <span className="close__line line-b-1"></span>
            <span className="close__line line-b-2"></span>
          </span>
        </button>
      </div>
    </div>
  );
};

NavigationHeader.propTypes = {
  closeMenu: PropTypes.func,
};

export default NavigationHeader;
