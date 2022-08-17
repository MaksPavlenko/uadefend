import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const GalleryItemDefault = ({item}) => {
  
  const image = getImage(item.localFile);
  
  return (
    <div className="gallery-default__wrapper">
      <div className="gallery-default__bg">
        <div className="gallery-defaults__img-wrapper">
          <GatsbyImage
            className="gallery-default__image"
            image={image}
            alt="img"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};


export default GalleryItemDefault;
