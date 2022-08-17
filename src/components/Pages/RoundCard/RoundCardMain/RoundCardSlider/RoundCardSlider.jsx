import React from 'react';
import PropTypes from 'prop-types';
// import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import {
  SamplePrevArrow,
  SampleNextArrow,
} from '../../../../Ui/ButtonUI/ButtonUi';

const RoundCardSlider = ({ mainData, handleClick }) => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    draggable: false,
    speed: 750,
    cssEase: 'cubic-bezier(0.24, 0.4, 0, 1)',
    responsive: [
      {
        breakpoint: 10000,
        settings: 'unslick',
      },
      {
        breakpoint: 992,
        settings: {
          draggable: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 750,
          cssEase: 'cubic-bezier(0.24, 0.4, 0, 1)',
        },
      },
      {
        breakpoint: 576,
        settings: {
          draggable: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 750,
          cssEase: 'cubic-bezier(0.24, 0.4, 0, 1)',
        },
      },
    ],
  };
  const slider = React.useRef(null);

  return (
    <>
      <div className="product-gallery__slider-wrapper">
        <Slider ref={slider} {...settings} className="product-gallery__slider">
          {mainData.map((item, index) => {
            const image = getImage(item.img.localFile);

            return (
              <div
                className="product-slide__item-wrapper"
                key={index}
                onClick={(e) => handleClick(e, index)}
                role="presentation"
              >
                {image && (
                  <GatsbyImage
                    className="product-slide__item-image"
                    image={image}
                    alt="UAD"
                  />
                )}
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="slider__button_arrow slider__button_arrow--card">
        <SamplePrevArrow hendler={() => slider.current.slickPrev()} />
        <SampleNextArrow hendler={() => slider.current.slickNext()} />
      </div>
    </>
  );
};

RoundCardSlider.propTypes = {
  mainData: PropTypes.array,
};

export default RoundCardSlider;
