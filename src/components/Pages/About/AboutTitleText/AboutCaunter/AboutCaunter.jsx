import React from 'react';
import PropTypes from 'prop-types';
import DayCounter from '../../../../Ui/DayCounter/DayCounter';
import { useLanguage } from '../../../../../hooks/useLanguage';
import useIntersectionObserver from '@react-hook/intersection-observer'

const AboutCaunter = ({mainData}) => {
  const {
    counter,
    counter_title_ua,
    counter_title_fr,
    counter_title_en,
  } = mainData;
  
  const containerRef = React.useRef()
  const lockRef = React.useRef(false)
  const { isIntersecting } = useIntersectionObserver(containerRef)
  if (isIntersecting) {
      lockRef.current = true
  }

  return (
    <div className="about-counter__wrapper">
          <div className="about-counter">
            <div className="about-counter__count" ref={containerRef}>
            {lockRef.current && (
              <DayCounter startCount={counter} startDay={'24-02-2022'} />
            )}
            </div>
            <div className="about-counter__title--wrapper">
              <span className="about-counter__title">
                {useLanguage(
                  counter_title_ua,
                  counter_title_fr,
                  counter_title_en
                )}
              </span>
            </div>
          </div>
        </div>
  );
};

AboutCaunter.propTypes = {
  mainData: PropTypes.object,
};

export default AboutCaunter;