import React from 'react';
import { gsap, Power2 } from 'gsap';
import { ThemeContext } from '../../../context/ThemeProvider';
// import PropTypes from 'prop-types';
import BottomImage from '../../../svg/preloader_bottom.svg';
import CenterImage from '../../../svg/preloader_center.svg';
import TopImage from '../../../svg/preloader_top.svg';

import { counters } from './counters';

const Preloader = () => {
  const { numb, numbThird } = counters;
  const { loaderMode, setLoaderMode } = React.useContext(ThemeContext);

  // const [active, setActive] = React.useState(false);
  // console.log(active);

  // React.useEffect(() => {
  //   active === false
  //     ? (document.body.style.overflow = 'hidden')
  //     : (document.body.style.overflow = 'visible');
  // }, [active]);

  const [tl] = React.useState(gsap.timeline({ paused: false }));

  React.useEffect(() => {
    if (loaderMode === false) {
      tl.to('.preloader-counter__wrapper', 0.5, { opacity: 1, delay: 1 })
        .fromTo(
          '.preloader-counter__item--second',
          5,
          { y: 0 },
          {
            y: -600,
          }
        )
        .fromTo(
          '.preloader-counter__third',
          5,
          { y: 0 },
          {
            y: -5940,
            delay: -5,
          }
        )
        .to('.preloader-counter__first', 0.8, {
          y: '-100%',
          delay: -0.5,
        })
        .to('.preloader-images__wrapper', 0.2, {
          opacity: 1,
          delay: -5.5,
          ease: Power2.easeInOut,
        })
        .to('.preloader-images__wrapper', 4.8, {
          scale: 1,
          delay: -5.5,
          ease: Power2.easeInOut,
        })
        .to('.preloader-image__bottom', 2.5, {
          opacity: 1,
          y: 0,
          delay: -2.5,
        })
        .to('.preloader-image__top', 2.5, {
          opacity: 1,
          y: 0,
          delay: -2.5,
        })
        .to('.preloader-images__wrapper', 0.6, {
          y: -40,
          opacity: 0,
          delay: 0.5,
          ease: Power2.easeInOut,
        })
        .to('.preloader-counter__wrapper', 0.6, {
          opacity: 0,
          y: -40,
          delay: -0.5,
          ease: Power2.easeInOut,
        })
        .to('.preloader-wrapper', 0.6, {
          pointerEvents: 'none',
          opacity: 0,
          ease: Power2.easeInOut,
          onComplete: update,
        });
    } else {
      tl.to('.preloader-wrapper', 0, {
        pointerEvents: 'none',
        opacity: 0,
        ease: Power2.easeInOut,
        // onComplete: update,
      });
    }
  });

  const update = () => {
    // setActive((active) => (active = true));
    setLoaderMode((loaderMode) => (loaderMode = true));
  };

  return (
    <div className="preloader-wrapper">
      <div className="preloader-images__wrapper">
        <TopImage className="preloader-image preloader-image__top" />
        <CenterImage className="preloader-image preloader-image__center" />
        <BottomImage className="preloader-image preloader-image__bottom" />
      </div>
      <div className="preloader-counter__wrapper">
        <ul className="preloader-counter preloader-counter__first">
          <li className="preloader-counter__item preloader-counter__item--first">
            <p className="preloader-counter__item--value">0</p>
          </li>
          <li className="preloader-counter__item preloader-counter__item--first">
            <p className="preloader-counter__item--value">1</p>
          </li>
        </ul>
        <ul className="preloader-counter preloader-counter__second">
          {numb.map((item, index) => {
            return (
              <li
                className="preloader-counter__item preloader-counter__item--second"
                key={index}
              >
                <p className="preloader-counter__item--value">{item}</p>
              </li>
            );
          })}
        </ul>
        <ul className="preloader-counter preloader-counter__third">
          {numbThird.map((item, index) => {
            return (
              <li
                className="preloader-counter__item preloader-counter__item--third"
                key={index}
              >
                <p className="preloader-counter__item--value">{item}</p>
              </li>
            );
          })}
        </ul>
        <ul className="preloader-counter">
          <li className="preloader-counter__item">
            <p className="preloader-counter__item--value">%</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

Preloader.propTypes = {};

export default Preloader;
