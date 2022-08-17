import React from 'react';
import AsideShare from './AsideShare/AsideShare';
import { ThemeContext } from '../../../../../context/ThemeProvider';
import Dark from '../../../../../svg/night.svg';
import Light from '../../../../../svg/sun.svg';

const ArticleAside = () => {
  const { themeMode, setThemeMode } = React.useContext(ThemeContext);

  return (
    <div className="article-aside__wrap">
      <div className="theme__button-wrapper">
        <button
          className={
            themeMode === false ? 'theme-button is-active' : 'theme-button'
          }
          onClick={() => setThemeMode(false)}
        >
          <Dark />
        </button>
        <button
          className={
            themeMode === true
              ? 'theme-button is-active theme-button-right'
              : 'theme-button theme-button-right'
          }
          onClick={() => setThemeMode(true)}
        >
          <Light />
        </button>
      </div>

      <div className="article-aside__wrapper">
        <AsideShare />
      </div>
    </div>
  );
};

// ArticleAside.propTypes = {};

export default ArticleAside;
