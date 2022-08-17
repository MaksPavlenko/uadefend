import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../hooks/useLanguage';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SocialDefault from '../../Ui/SocialDefault/SocialDefault';
import UpIcon from '../../../svg/up-left.svg'
import { Link } from 'gatsby-plugin-react-i18next';


const NotFound = ({ socials }) => {
  const data = useStaticQuery(graphql`
    query {
      testImage: file(relativePath: { eq: "404.png" }) {
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
  return (
    <section className="not-found__wrapper">
      <div className="not-found__image-wrapper">
        <GatsbyImage
          className="not-found__image"
          image={image}
          alt="img"
          loading="lazy"
        />
      </div>
      <div className="not-found__title-wrapper">
        <h1 className="not-found__title">
          {langToggle(
            'Такої сторінки не існує !',
            "Une telle page n'existe pas !",
            'There is no such page!'
          )}
        </h1>
      </div>

      <div className="not-found__bottom">
        <Link to="/" className="not-found__icon-wrapper">
        <span className="button-bg__white"></span>
          <div className="not-found__icon">
            <UpIcon className="icon-non" />
          </div>
          <div className="not-found__btn-title_wrapper">
            <h2 className="not-found__btn-title">
              {langToggle(
                "Повернутись на головну",
                "Retour à la page principale",
                "Return to the main page"
              )}
            </h2>
          </div>
        </Link>
        <SocialDefault socials={socials} />
      </div>
    </section>
  );
};

NotFound.propTypes = {
  socials: PropTypes.object
};

export default NotFound;
