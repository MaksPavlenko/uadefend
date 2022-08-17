import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../hooks/useLanguage';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { gsap, Power2 } from 'gsap';
import { ThemeContext } from '../../../../context/ThemeProvider';
import StepsText from './StepsText/StepsText';

const HomeSteps = ({ stepsData }) => {
  const data = useStaticQuery(graphql`
    query {
      testImage: file(relativePath: { eq: "Home.png" }) {
        childImageSharp {
          gatsbyImageData(
            breakpoints: [576, 768, 992, 1200, 1920]
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            layout: FULL_WIDTH
          )
        }
      }
    }
  `);

  const image = getImage(data.testImage.childImageSharp);

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

  return (
    <section className="home-steps load-faid">
      <div className="steps">
        <div className="steps__container">
          <div className="steps__content-wrapper">
            <div className="steps__content">
              <GatsbyImage
                className="home-steps__image"
                image={image}
                alt="img"
                loading="lazy"
              />
              <div className="steps__content-text">
                <div className="steps__content-title">
                  {langToggle(
                    stepsData.title_ua,
                    stepsData.title_fr,
                    stepsData.title_en
                  )}
                </div>
                <div className="steps__content-description">
                  {langToggle(
                    stepsData.description_ua,
                    stepsData.description_fr,
                    stepsData.description_en
                  )}
                </div>
              </div>
            </div>
          </div>
          <StepsText stepsData={stepsData.steps_info} />
        </div>
      </div>
    </section>
  );
};

HomeSteps.propTypes = {
  stepsData: PropTypes.object,
};

export default HomeSteps;
