import React from 'react';
import { gsap, Expo, Power2 } from 'gsap';
import NavigationBg from './NavigationBg/NavigationBg';
import PropTypes from 'prop-types';
import Noise from '../../../../images/noise.png';
import NavigationLines from './NavigationBg/NavigationLines/NavigationLines';
import NavigationHeader from './NavigationHeader/NavigationHeader';
import Menu from './Menu/Menu';

const Navigation = ({ closeMenu, open, menu, scrollFunc }) => {
  const [tl] = React.useState(gsap.timeline({ paused: false }));

  let navElement = React.useRef(null);
  let waveElement = React.useRef(null);
  let bgElement = React.useRef(null);

  const start = 'M 0 100 V 50 Q 50 0 100 50 V 100 z';
  const end = 'M 0 100 V 0 Q 50 0 100 0 V 100 z';

  React.useEffect(() => {
    tl.to(navElement, 0.01, {
      pointerEvents: 'auto',
      opacity: 1,
      ease: Expo.easeInOut,
    })
      .to(waveElement, 0.6, { attr: { d: start }, ease: Power2.easeIn })
      .to(waveElement, 0.2, { attr: { d: end }, ease: Power2.easeOut })
      .to(bgElement, 0.1, { opacity: 1, ease: Power2.easeOut })
      .to(waveElement, 0.6, { opacity: 0, ease: Power2.easeOut })
      .to('.navigation-header__lang--wrapper', 0.6, {
        opacity: 1,
        delay: -0.6,
        ease: Power2.easeOut,
      })
      .to('.navigation__close', 0.6, {
        opacity: 1,
        delay: -0.6,
        ease: Power2.easeOut,
      })
      .staggerTo('.navigation-line__y', 0.6, { scaleY: 1, delay: -0.6 }, 0.35)
      .staggerTo('.navigation-line__x', 0.6, { scaleX: 1, delay: -1.2 }, 0.25)
      .staggerTo(
        '.navigation-item__title',
        0.6,
        { x: 0, opacity: 1, delay: -1.8 },
        0.15
      )
      .staggerTo(
        '.navigation-item__icon--wrapper',
        0.4,
        { scale: 1, y: 5, opacity: 1, delay: -1.2 },
        0.15
      )

      .reverse();
  }, [tl]);

  React.useEffect(() => {
    tl.reversed(!open);
  }, [open, tl]);

  return (
    <div className="main-navigation__wrapper" ref={(e) => (navElement = e)}>
      <div className="main-navigation__bg" ref={(e) => (bgElement = e)}>
        <div
          className="noise"
          style={{ backgroundImage: `url(${Noise})` }}
        ></div>
        <NavigationLines />
      </div>
      <NavigationBg ref={(e) => (waveElement = e)} />
      <NavigationHeader closeMenu={closeMenu} />
      <Menu menu={menu} scrollFunc={scrollFunc} />
    </div>
  );
};

Navigation.propTypes = {
  closeMenu: PropTypes.func,
  open: PropTypes.bool,
  menu: PropTypes.array,
  scrollFunc: PropTypes.func,
};

export default Navigation;
