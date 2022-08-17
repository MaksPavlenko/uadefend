import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import PropTypes from 'prop-types';

const ContextContent = ({ icon, title, description }) => {

  return (
    <li className="contextContent__item">
      <div className="contextContent__icon">
        <GatsbyImage
          className="contextContent__icon-img"
          image={icon}
          alt="icon"
          loading="lazy"
        />
      </div>
      <div className='contextContent__content'>
        <h3 className="contextContent__content--title">{title}</h3>
        <p className="contextContent__content--description">{description}</p>
      </div>
    </li>
  );
};

ContextContent.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ContextContent;
