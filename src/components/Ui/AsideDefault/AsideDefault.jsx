import React from 'react';
import StickyBox from 'react-sticky-box';
import { gsap, Power2 } from 'gsap';
import { ThemeContext } from '../../../context/ThemeProvider';

const AsideDefault = ({ children, offsetTop }) => {
  const { loaderMode } = React.useContext(ThemeContext);
  const time = loaderMode === false ? 9 : 1.8;

  const [tl] = React.useState(gsap.timeline({ paused: false }));
  React.useEffect(() => {
    tl.to('.aside-default', 1, {
      opacity: 1,
      y: 0,
      ease: Power2.easeOut,
      delay: time,
    });
  }, [tl, time]);
  return (
    <StickyBox offsetTop={offsetTop}>
      <aside className="aside-default">{children}</aside>
    </StickyBox>
  );
};

export default AsideDefault;
