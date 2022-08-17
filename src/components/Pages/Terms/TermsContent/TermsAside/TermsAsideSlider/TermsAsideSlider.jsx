import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import {
  SampleNextArrow,
  SamplePrevArrow,
} from '../../../../../Ui/ButtonUI/ButtonUi';

const TermsAsideSlider = ({ images, handleClick }) => {
  const slider = React.createRef();

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 576,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 1199.98,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };
  return (
    <>
      <div>
        <Slider ref={slider} {...settings} className={'aside-slider'}>
          {images.map((item, index) => {
            const image = getImage(item.image.localFile);

            return (
              <div
                className="aside-slide"
                key={index}
                role="presentation"
                onClick={(e) => handleClick(e, index)}
              >
                <GatsbyImage
                  className="gallery-default__image"
                  image={image}
                  alt="img"
                  loading="lazy"
                />
              </div>
            );
          })}
        </Slider>
        <div className="aside-slider__buttons">
          <SamplePrevArrow hendler={() => slider.current.slickPrev()} />
          <SampleNextArrow hendler={() => slider.current.slickNext()} />
        </div>
      </div>
    </>
  );
};

TermsAsideSlider.propTypes = {
  images: PropTypes.array,
  handleClick: PropTypes.func,
};

export default TermsAsideSlider;
