import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import PropTypes from 'prop-types';
import { gsap, Expo } from 'gsap';
import { useLanguage } from '../../../hooks/useLanguage';
import useScroll from '../../../hooks/useScroll';
import { scroller } from 'react-scroll';
import { ThemeContext } from '../../../context/ThemeProvider';
// import { useMediaQuery } from 'react-responsive';

import Language from '../../Ui/Language/Language';
import Burger from './Burger/Burger';
import HeaderAction from './HeaderAction/HeaderAction';
import HeaderCall from './HeaderCall/HeaderCall';
import Navigation from './Navigation/Navigation';

import LogoUa from '../../../svg/logo_ua.svg';
import LogoFr from '../../../svg/logo_fr.svg';
import LogoEn from '../../../svg/logo_en.svg';
import Noise from '../../../images/noise.png';

const Header = ({ messengers, phones, menu, themeClass }) => {
  const [open, setOpen] = React.useState(false);

  function openMenu() {
    setOpen(true);
  }

  function closeMenu() {
    setOpen(false);
  }

  React.useEffect(() => {
    open
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'visible');
  }, [open]);

  function scrollFunc() {
    setTimeout(() => {
      scroller.scrollTo('footer-main', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }, 2000);
    setOpen(false);
  }

  // const isMd = useMediaQuery({ query: '(min-width: 768px)' });

  const [activeHeader, setActiveHeader] = React.useState(false);

  const changePosition = 60;
  let scroll = useScroll();

  if (scroll > changePosition && !activeHeader) {
    setActiveHeader(true);
  }

  if (scroll <= changePosition && activeHeader) {
    setActiveHeader(false);
  }

  const { loaderMode } = React.useContext(ThemeContext);

  const time = loaderMode === false ? 8 : 1;

  const [tl] = React.useState(gsap.timeline({ paused: false }));
  const [tlPr] = React.useState(gsap.timeline({ paused: false }));
  let bgMain = React.useRef(null);
  let headContainer = React.useRef(null);

  // const brdCol = themeClass === null ? '#e7e7e7' : '#a5cde1';

  // console.log(brdCol);

  React.useEffect(() => {
    tlPr.to('.header', 0.8, { opacity: 1, y: 0, delay: time });
    tl.to(bgMain, 0.4, {
      // scaleY: 1,
      opacity: 1,
      ease: Expo.easeInOut,
    })
      .to('.header-line', 0.8, {
        opacity: 0,
        ease: Expo.easeInOut,
        delay: -0.4,
      })
      .to(headContainer, 0.3, {
        boxShadow: '0 0 20px rgba(0,0,0,0.15)',
        ease: Expo.easeInOut,
        delay: -0.8,
      })
      .reverse();
  }, [tl, tlPr, time]);

  React.useEffect(() => {
    tl.reversed(!activeHeader);
  }, [activeHeader, tl]);

  const logo = useLanguage(
    <LogoUa className="logo" />,
    <LogoFr className="logo" />,
    <LogoEn className="logo" />
  );

  return (
    <>
      <header className={activeHeader ? 'header is-scroll' : 'header'}>
        <div className="page-wrapper">
          <div className="header-container" ref={(e) => (headContainer = e)}>
            <div
              className={`header-background__main ${themeClass}`}
              ref={(e) => (bgMain = e)}
            >
              <div
                className="noise"
                style={{ backgroundImage: `url(${Noise})` }}
              ></div>
            </div>
            <div className="header-line"></div>
            <div className="header-item header-item__first">
              <div className="logo-wrapper">
                <Link to="/" className="logo-link">
                  {logo}
                </Link>
                <span className="header-logo__text">
                  {useLanguage(
                    'Благодійний \nФонд',
                    'Organisation \nCaritative',
                    'Charitable \nFoundation'
                  )}
                </span>
              </div>
            </div>
            <div className="header-item header-item__second">
              <div className="language-wrapper">
                <Language />
              </div>
              <HeaderCall messengers={messengers} phones={phones} />
            </div>
            <div className="header-item header-item__third">
              <HeaderAction />
              <Burger openMenu={openMenu} />
            </div>
            <div
              className={
                activeHeader
                  ? 'header-background is-scroll'
                  : 'header-background'
              }
              // ref={(e) => (bgShad = e)}
            ></div>
          </div>
        </div>
      </header>
      <Navigation
        closeMenu={closeMenu}
        open={open}
        menu={menu}
        scrollFunc={scrollFunc}
      />
    </>
  );
};

Header.propTypes = {
  messengers: PropTypes.array,
  phones: PropTypes.array,
  menu: PropTypes.array,
};

export default Header;
