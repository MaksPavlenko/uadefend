import React from 'react';
import PropTypes from 'prop-types';
import useIntersectionObserver from '@react-hook/intersection-observer';
import { useLanguage } from '../../../../hooks/useLanguage';
import { gsap } from 'gsap';
import { ThemeContext } from '../../../../context/ThemeProvider';

import MainText from './MainText/MainText';
import DayCounter from '../../../Ui/DayCounter/DayCounter';
import Tree from './Tree/Tree';

const HomeMain = ({ mainData }) => {
  const {
    counter,
    counter_title_ua,
    counter_title_fr,
    counter_title_en,
  } = mainData;

  const { loaderMode } = React.useContext(ThemeContext);
  const time = loaderMode === false ? 9 : 1.8;
  const [tl] = React.useState(gsap.timeline({ paused: false }));

  React.useEffect(() => {
    tl.to('.main-counter', 0.8, {
      opacity: 1,
      delay: time + 0.8,
    });
  }, [tl, time]);

  const containerRef = React.useRef();
  const lockRef = React.useRef(false);
  const { isIntersecting } = useIntersectionObserver(containerRef);
  if (isIntersecting) {
    lockRef.current = true;
  }

  return (
    <section className="home-main top-section" id="home-main">
      <div className="main-cover__wrapper">
        <Tree />
      </div>
      <div className="home-main__container">
        <MainText main={mainData} />
        <div className="main-counter__wrapper">
          <div className="main-counter">
            <div className="main-counter__count" ref={containerRef}>
              {lockRef.current && (
                <DayCounter startCount={counter} startDay={'24-02-2022'} />
              )}
            </div>
            <div className="main-counter__title--wrapper">
              <span className="main-counter__title">
                {useLanguage(
                  counter_title_ua,
                  counter_title_fr,
                  counter_title_en
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HomeMain.propTypes = {
  mainData: PropTypes.object,
};

export default HomeMain;
