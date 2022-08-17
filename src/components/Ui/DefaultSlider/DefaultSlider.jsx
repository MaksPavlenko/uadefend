import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import {
  DefaulButtonLink,
  SampleNextArrow,
  SamplePrevArrow,
} from '../ButtonUI/ButtonUi';
import SliderCounter from './SliderCounter/SliderCounter';

const DefaultSlider = ({ children, totalCounter, buttonData }) => {
  const { clasButton, link, title, icon } = buttonData;

  const slider = React.createRef();

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const counter = currentSlide + 3;

  function handleAfterChange(index) {
    setCurrentSlide(index);
  }
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    afterChange: handleAfterChange,
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
    <div className="default-slider__wrapper">
      <Slider ref={slider} {...settings} className={'default-slider'}>
        {children}
      </Slider>
      <div className="default-slider__navigation">
        <SliderCounter
          curentCounter={counter <= 9 ? '0' + counter : counter}
          totalCounter={totalCounter}
        />
        <div className="default-slider__navigation--arrows">
          <SamplePrevArrow hendler={() => slider.current.slickPrev()} />
          <SampleNextArrow hendler={() => slider.current.slickNext()} />
        </div>
        <div className="default-slider__navigation--button">
          <DefaulButtonLink clasButton={clasButton} link={link} title={title}>
            {icon}
            {icon}
          </DefaulButtonLink>
        </div>
      </div>
    </div>
  );
};

export default DefaultSlider;
