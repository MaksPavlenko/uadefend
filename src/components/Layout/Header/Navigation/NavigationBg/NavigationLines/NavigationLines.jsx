import React from 'react';
// import PropTypes from 'prop-types';

const NavigationLines = () => {
  return (
    <div className="navigation-lines__wrapper">
      <div className="navigation-lines">
        <div className="navigation-line navigation-line__x"></div>
        <div className="navigation-line navigation-line__x"></div>
        <div className="navigation-line navigation-line__x"></div>
        <div className="navigation-line navigation-line__x"></div>
        <div className="navigation-line navigation-line__x x__5"></div>
        <div className="navigation-line navigation-line__x x__6"></div>
        <div className="navigation-line navigation-line__x x__7"></div>
      </div>
      <div className="navigation-lines navigation-lines__y">
        <div className="navigation-line navigation-line__y"></div>
        <div className="navigation-line navigation-line__y"></div>
        <div className="navigation-line navigation-line__y"></div>
      </div>
    </div>
  );
};

// NavigationLines.propTypes = {};

export default NavigationLines;
