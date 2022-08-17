import React from 'react';
// import PropTypes from 'prop-types';

const SimpleTitleText = ({title, description}) => {
  return (
    <div className="simple__container">
        <h3 className="simple__title-text">{title}</h3>
        <p className="simple__descr">{description}</p>
      </div>
  );
};

// SimpleTitleText.propTypes = {};

export default SimpleTitleText;