import React from 'react';
import { useLanguage } from '../../../hooks/useLanguage';
import PropTypes from 'prop-types';

const ImageCopy = ({ imageCopy }) => {
  const {
    autor_ua,
    autor_fr,
    autor_en,
    link_ua,
    link_fr,
    link_en,
    link,
  } = imageCopy;
  const langToggle = useLanguage;
  return (
    <div className="gallery-copy">
      <div className="gallery-copy__item">
        <span className="gallery-copy__marker">
          {langToggle('Автор Фото:', "Photo de l'auteur:", 'Author Photo:')}
        </span>
        <span className="gallery-copy__title">
          {langToggle(autor_ua, autor_fr, autor_en)}
        </span>
      </div>
      <div className="gallery-copy__item">
        <span className="gallery-copy__marker">
          {langToggle('Джерело:', 'La source:', 'Source:')}
        </span>
        <a href={link} className="gallery-copy__link" target="blank">
          {langToggle(link_ua, link_fr, link_en)}
        </a>
      </div>
    </div>
  );
};

ImageCopy.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  linkTitle: PropTypes.string,
};

export default ImageCopy;
