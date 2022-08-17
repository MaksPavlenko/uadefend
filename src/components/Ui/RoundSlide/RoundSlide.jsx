import React from 'react';
import PropTypes from 'prop-types';
import Check from '../../../svg/check.svg';
import Hearts from '../../../svg/hearts.svg';
import { useLanguage } from '../../../hooks/useLanguage';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const RoundSlide = ({ item }) => {
  const langToggle = useLanguage;

  const data = useStaticQuery(graphql`
    query {
      allRoundQuery: file(relativePath: { eq: "2.png" }) {
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

  const image = getImage(data.allRoundQuery.childImageSharp);

  const percent = Math.round((item.current_price * 100) / item.total_price);

  return (
    <div className="open-round__slide-wrapper">
      <div className="open-round__slide-image_wrapper">
        <GatsbyImage
          className={
            item.status === 'closed'
              ? 'open-round__slide-image over'
              : 'open-round__slide-image'
          }
          image={image}
          alt="alt"
          loading="lazy"
        />
        {item.status === 'closed' ? (
          <Check className="open-round__slide-icon" />
        ) : (
          <Hearts className="open-round__slide-icon" />
        )}
        {item.status === 'closed' && (
          <p className="close-round__slide-text">
            {langToggle('Раунд завершено', 'Tour terminé', 'Round completed')}
          </p>
        )}
      </div>
      <div className="open-round__slide-footer">
        <div className="slide-footer__price-container">
          <div className="slide-footer__price-content">
            <span className="price-current">
              {item.current_price}
              <span className="currency"> €</span>
            </span>
            <span className="price-to">
              &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="price-total">
              {item.total_price}
              <span className="currency"> €</span>
            </span>
          </div>
          <div className="slide-footer__procent-container">
            <span className="price-procent">{percent + '%'}</span>
          </div>
        </div>
        <div className="slide-footer__line">
          <div className="slide-footer__line-total"></div>
          <div
            className="slide-footer__line-current"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
        <p className="open-round__slider-title">
          {langToggle(item.title_ua, item.title_fr, item.title_en)}
        </p>
      </div>
    </div>
  );
};

RoundSlide.propTypes = {
  item: PropTypes.object,
};

export default RoundSlide;
