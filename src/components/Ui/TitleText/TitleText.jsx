import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

const TitleTextContent = ({ title, description }) => {
  return (
    <div className="title-text__container">
      <h2 className="title-text__title">{title}</h2>
      <ReactMarkdown source={description} className="title-text__descr" />
      {/* <p className="title-text__descr">{description}</p> */}
    </div>
  );
};

TitleTextContent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default TitleTextContent;
