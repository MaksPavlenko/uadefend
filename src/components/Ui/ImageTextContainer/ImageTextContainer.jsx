import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';


const ImageTextContainer = ({image, title, descr}) => {
  
  
  return (
    <div className="benefits__img-wrapper">
      {image && (<GatsbyImage
        className="benefits__image"
        image={image}
        alt="img"
        loading="lazy"
      />)}
      <div className="about__image-text">
        <div className="about__image-text_title">
          {title}
        </div>
        <div className="about__image-text_description">
          {descr}
        </div>
      </div>
    </div>
  );
};

ImageTextContainer.propTypes = {
  image: PropTypes.object,
  title: PropTypes.object,
  descr: PropTypes.object,

};

export default ImageTextContainer;
