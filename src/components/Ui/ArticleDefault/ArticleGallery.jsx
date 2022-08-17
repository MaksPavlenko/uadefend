import React from 'react';
import PropTypes from 'prop-types';
import { gsap, Power2 } from 'gsap';
import { ThemeContext } from '../../../context/ThemeProvider';

import LightBox from '../LightBox/LightBox';

const ArticleGallery = ({ images }) => {
  const { loaderMode } = React.useContext(ThemeContext);
  const time = loaderMode === false ? 9 : 1.8;

  const [tl] = React.useState(gsap.timeline({ paused: false }));
  React.useEffect(() => {
    tl.to('.load-faid', 1.2, {
      opacity: 1,
      y: 0,
      ease: Power2.easeOut,
      delay: time,
    });
  }, [tl, time]);

  const [showLightbox, setShowLightbox] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(0);

  function handleClick(e, index) {
    e.preventDefault();
    setShowLightbox(!showLightbox);
    setSelectedImage(index);
  }

  function closeModal() {
    setShowLightbox(false);
    setSelectedImage(0);
  }

  function goBack() {
    setSelectedImage(selectedImage - 1);
  }

  function goForward() {
    setSelectedImage(selectedImage + 1);
  }

  React.useEffect(() => {
    window.addEventListener('keyup', handleKeyUp, false);

    return () => {
      window.removeEventListener('keyup', handleKeyUp, false);
    };
  });

  function handleKeyUp(e) {
    e.preventDefault();
    const { keyCode } = e;
    if (showLightbox) {
      if (keyCode === 37) {
        // Left Arrow Key
        if (selectedImage > 0) {
          setSelectedImage(selectedImage - 1);
        }
      }
      if (keyCode === 39) {
        // Right Arrow Key
        if (selectedImage < images.length - 1) {
          setSelectedImage(selectedImage + 1);
        }
      }
      if (keyCode === 27) {
        // Escape key
        setShowLightbox(false);
      }
    }
  }

  return (
    <>
      <div className="article-gallery__wrapper load-faid">
        {images.map((item, index) => {
          if (item.image === '') {
            return (
              <div
                className="article-gallery__image-wrapper"
                key={index}
                onClick={(e) => handleClick(e, index)}
                role="presentation"
              >
                <img
                  className="article-gallery__image article-gallery__image--cover"
                  src={`https://admin.uadefend.com${item.image?.url}`}
                  alt={'img'}
                  loading="lazy"
                />
              </div>
            );
          } else {
            return (
              <div
                className="article-gallery__image-wrapper"
                key={index}
                onClick={(e) => handleClick(e, index)}
                role="presentation"
              >
                <img
                  className="article-gallery__image article-gallery__image--cover"
                  src={`https://admin.uadefend.com${item.image?.url}`}
                  alt={'img'}
                  loading="lazy"
                />
              </div>
            );
          }
        })}
      </div>
      {showLightbox && (
        <LightBox
          img={images[selectedImage].image.url}
          closeModal={closeModal}
          goBack={goBack}
          goForward={goForward}
          selectedImage={selectedImage}
          images={images}
          showLightbox={showLightbox}
        />
      )}
    </>
  );
};

ArticleGallery.propTypes = {
  images: PropTypes.array,
};

export default ArticleGallery;
