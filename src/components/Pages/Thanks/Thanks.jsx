import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../hooks/useLanguage';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SocialDefault from '../../Ui/SocialDefault/SocialDefault';
import UpIcon from '../../../svg/up-left.svg';
import { Link } from 'gatsby-plugin-react-i18next';

const Thanks = ({ socials }) => {
  const data = useStaticQuery(graphql`
    query {
      testImage: file(relativePath: { eq: "Thanks.png" }) {
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
      <div className="thanks__title-wrapper">
        <h1 className="not-found__title">
          {langToggle(
            "Дякуємо що долучилися \nдо благодийності!",
            "Merci de nous rejoindre \npour les œuvres caritatives!",
            'Thank you for joining \nto charity!'
          )}
        </h1>
        <p className="not-found__descr">
        {langToggle(
            "Ваш внесок допоможе \nУкраїні та її Народу",
            "Votre contribution aidera \nl'Ukraine et son peuple",
            'Your contribution will help \nUkraine and its people'
          )}
        </p>
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
                'Повернутись на головну',
                'Retour à la page principale',
                'Return to the main page'
              )}
            </h2>
          </div>
        </Link>
        <SocialDefault socials={socials} />
      </div>
    </section>
  );
};

Thanks.propTypes = {
  socials: PropTypes.object,
};

export default Thanks;
