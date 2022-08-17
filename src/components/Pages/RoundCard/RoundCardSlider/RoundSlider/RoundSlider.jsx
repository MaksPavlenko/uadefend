import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import PropTypes from 'prop-types';
import RoundSlide from '../../../../Ui/RoundSlide/RoundSlide';
import {
  SampleNextArrow,
  SamplePrevArrow,
} from '../../../../Ui/ButtonUi/ButtonUi';

const RoundSlider = ({ catalogData }) => {
  const slider = React.createRef();

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
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
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
    ],
  };

  return (
    <div className="open-round__slider-wrapper">
      <Slider ref={slider} {...settings} className={'open-round__slider'}>
        {catalogData.map((item, index) => {
          return (
            <Link to="/" className="open-round__slide" key={index}>
              <RoundSlide item={item} />
            </Link>
          );
        })}
      </Slider>
      <div className="slider__button_wrapper">
        <div className="slider__button_arrow">
          <SamplePrevArrow hendler={() => slider.current.slickPrev()} />
          <SampleNextArrow hendler={() => slider.current.slickNext()} />
        </div>
      </div>
    </div>
  );
};

RoundSlider.propTypes = {
  catalogData: PropTypes.array,
};

export default RoundSlider;
