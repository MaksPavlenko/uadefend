import React from 'react';
// import PropTypes from 'prop-types';

const SimpleTitle = ({ title }) => {
  return (
    <div className="simple-title__wrapper">
      <h2 className="simple-title">{title}</h2>
    </div>
  );
};

// SimpleTitle.propTypes = {};

export default SimpleTitle;
