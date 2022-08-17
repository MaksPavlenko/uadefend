import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import CloseIcon from '../../../svg/close.svg';

const LightBox = ({
  img,
  closeModal,
  goBack,
  goForward,
  selectedImage,
  images,
  showLightbox,
  dinamicImage,
}) => {
  const image = getImage(dinamicImage);

  return (
    <div className={showLightbox ? 'lightbox is-show' : 'lightbox'}>
      <div
        className="lightbox-overlay"
        aria-hidden="true"
        onClick={closeModal}
      ></div>
      <div className="lightbox-wrapper">
        <div className="lightbox-image__wrapper">
          {dinamicImage ? (
            <GatsbyImage
              image={image}
              className="lightBox-image"
              alt="best foto"
              loading="lazy"
            />
          ) : (
            <img
              className="article-gallery__image article-gallery__image--cover"
              src={`https://admin.uadefend.com${img}`}
              alt={'img'}
              loading="lazy"
            />
          )}
        </div>

        <button
          className="light-box-close"
          aria-label="Close"
          onClick={closeModal}
        >
          <span className="popup-close__button-icon">
            <CloseIcon />
          </span>
        </button>
        <button
          className="light-box__arrow light-box__prev"
          aria-label="Prev"
          onClick={goBack}
          disabled={selectedImage === 0}
        >
          Prev
        </button>
        <button
          className="light-box__arrow light-box__next"
          aria-label="Next"
          onClick={goForward}
          disabled={selectedImage === images.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

LightBox.propTypes = {
  closeModal: PropTypes.func,
  goBack: PropTypes.func,
  goForward: PropTypes.func,
  selectedImage: PropTypes.number,
  images: PropTypes.array,
  showLightbox: PropTypes.bool,
};

export default LightBox;
