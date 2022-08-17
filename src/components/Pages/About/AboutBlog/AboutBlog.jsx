import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../hooks/useLanguage';
import { gsap, Power2 } from 'gsap';
import { ThemeContext } from '../../../../context/ThemeProvider';

import SectionHeader from '../../../Ui/SectionHeader/SectionHeader';
import DefaultSlider from '../../../Ui/DefaultSlider/DefaultSlider';
import BlogItemDefault from '../../Blog/BlogItems/BlogItemDefault/BlogItemDefault';
import Planet from '../../../../svg/blog.svg';
import ButtonUp from '../../../../svg/arrow_up.svg';

const AboutBlog = ({ blogData, slideData }) => {
  const langToggle = useLanguage;

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

  const buttonData = {
    clasButton: 'arrow',
    link: '/blog/',
    title: langToggle('Перейти в блог', 'Aller sur le blog', 'Go to the blog'),
    icon: <ButtonUp className="default-button__icon" />,
  };

  const totalCounter =
    slideData.length <= 9 ? `0${slideData.length}` : `${slideData.length}`;

  return (
    <div className="about-blog load-faid">
      <SectionHeader
        sectionTitle={langToggle(
          blogData.title_ua,
          blogData.title_fr,
          blogData.title_en
        )}
      >
        <Planet />
      </SectionHeader>
      <div className="open-round__slider-wrapper">
        <DefaultSlider totalCounter={totalCounter} buttonData={buttonData}>
          {slideData.map((item, index) => {
            return (
              <div className="round-slide" key={index}>
                <BlogItemDefault item={item} />
              </div>
            );
          })}
        </DefaultSlider>
      </div>
    </div>
  );
};

AboutBlog.propTypes = {
  blogData: PropTypes.object,
  slideData: PropTypes.array,
};

export default AboutBlog;
