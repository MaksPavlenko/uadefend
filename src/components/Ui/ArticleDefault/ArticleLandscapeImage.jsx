import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { gsap, Power2 } from 'gsap';
import { ThemeContext } from '../../../context/ThemeProvider';
import PropTypes from 'prop-types';

const ArticleLandscapeImage = ({ img, imgDynamic }) => {
  const image = getImage(img);

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
  return (
    <div className="article-gallery__image--wrapper load-faid">
      {img ? (
        <GatsbyImage
          className="article-gallery__image"
          image={image}
          alt={'Rebel barbershop'}
          loading="lazy"
        />
      ) : (
        <img
          className="article-gallery__image article-gallery__image--cover"
          // src={imgDynamic}
          src={`https://admin.uadefend.com${imgDynamic?.url}`}
          alt={'Rebel barbershop'}
          loading="lazy"
        />
      )}
    </div>
  );
};

ArticleLandscapeImage.propTypes = {
  img: PropTypes.object,
};

export default ArticleLandscapeImage;
