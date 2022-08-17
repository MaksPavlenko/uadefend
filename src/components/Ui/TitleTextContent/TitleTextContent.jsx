import React from 'react';
import PropTypes from 'prop-types';

const TitleTextContent = ({ title, description }) => {
  return (
    <div className="about-content__wrapper">
      <div className="about-content__container">
        <h2 className="about-content__title">{title}</h2>
        <p className="about-content__descr">{description}</p>
      </div>
    </div>
  );
};

TitleTextContent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default TitleTextContent;
