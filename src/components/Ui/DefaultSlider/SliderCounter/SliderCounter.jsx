import React from 'react';
import PropTypes from 'prop-types';

 const SliderCounter = ({curentCounter, totalCounter}) => {
  return (
    <div className="number-slider__counter">
      <div className="number-slider__counter-cover">
        <span className="number-slider__counter-current">
          {curentCounter}
        </span>
        <span className="number-slider__counter-separator">-</span>
        <span className="number-slider__counter-total">
          {totalCounter}
        </span>
      </div>
    </div>
  );
};

SliderCounter.propTypes = {
  totalCounter: PropTypes.string,
  curentCounter: PropTypes.string
};

export default SliderCounter;
