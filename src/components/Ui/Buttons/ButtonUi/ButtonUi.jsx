import React from 'react';
import PropTypes from 'prop-types';

const ButtonUi = ({ title }) => {
  return (
    <span className="button__wrapper">
      <span className="button__title--overflow">
        <span className="button__title">{title}</span>
      </span>
      <span className="button__decor button__decor-top"></span>
      <span className="button__decor button__decor-bottom"></span>
    </span>
  );
};

ButtonUi.propTypes = {
  title: PropTypes.string,
};

export default ButtonUi;
