import React from 'react';
// import PropTypes from 'prop-types';
import { ThemeContext } from '../../../context/ThemeProvider';
import Dark from '../../../svg/night.svg'
import Light from '../../../svg/sun.svg'

const ThemeFixed = () => {
  const { themeMode, setThemeMode } = React.useContext(ThemeContext);
  return (
    <div className="theme__button-fixed">
        <button className={
            themeMode === false ? 'theme-button is-active' : 'theme-button'
          }
          onClick={() => setThemeMode(false)}
        >
          <Dark />
        </button>
        <button className={
            themeMode === true ? 'theme-button is-active theme-button-right' : 'theme-button theme-button-right'
          }
          onClick={() => setThemeMode(true)}
        >
          <Light />
        </button>
      </div>
  );
};

// ThemeFixed.propTypes = {};

export default ThemeFixed;