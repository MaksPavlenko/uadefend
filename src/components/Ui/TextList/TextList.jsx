import React from 'react';
import PropTypes from 'prop-types';

const TextList = ({count, title}) => {
  return (
    <div className="text-section__counts-wrapper">
      <div className="text-section__count-data">{count}</div>
      <div className="text-section__count-text">
        {title}
      </div>
    </div>
  );
};

TextList.propTypes = {
  count: PropTypes.string,
  title: PropTypes.string,
};

export default TextList;
