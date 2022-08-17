import React from 'react';
import { gsap, Power2 } from 'gsap';
import { ThemeContext } from '../../../context/ThemeProvider';

const MainDefault = ({ children, title, column, classes }) => {
  const { loaderMode } = React.useContext(ThemeContext);
  const time = loaderMode === false ? 8 : 1;

  const [tl] = React.useState(gsap.timeline({ paused: false }));
  React.useEffect(() => {
    tl.to('.main-default__left', 1.4, {
      opacity: 1,
      y: 0,
      ease: Power2.easeOut,
      delay: time,
    })
      .to('.main-default__right', 1.4, {
        opacity: 1,
        y: 0,
        ease: Power2.easeOut,
        delay: -1.4,
      })
      .to('.main-default__line', 1.8, {
        scaleX: 1,
        ease: Power2.easeOut,
        delay: -1.2,
      });
  }, [tl, time]);

  return (
    <div
      className={
        column === true
          ? 'main-default is-column top-section'
          : 'main-default top-section'
      }
    >
      <div className="main-default__line"></div>
      <div className={`main-default__left ${classes && classes}`}>
        <h1 className={`main-default__title h1 ${classes && classes}`}>
          {title}
        </h1>
      </div>
      <div className="main-default__right">{children}</div>
    </div>
  );
};

export default MainDefault;
