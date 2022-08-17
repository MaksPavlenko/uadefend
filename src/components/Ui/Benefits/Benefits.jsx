import React from 'react';
import PropTypes from 'prop-types';
import { getImage } from 'gatsby-plugin-image';
import BenefitsText from './BenefitsText/BenefitsText';
import ImageTextContainer from '../ImageTextContainer/ImageTextContainer';

const Benefits = ({ benefitsData, imgBenefits }) => {

  const image = getImage(imgBenefits.cover.localFile);

  return (
    <section className="Benefits">
      <div className="benefits__container">
        <ImageTextContainer image={image} />
        <BenefitsText benefitsData={benefitsData} />
      </div>
    </section>
  );
};

Benefits.propTypes = {
  benefitsData: PropTypes.array,
};

export default Benefits;
