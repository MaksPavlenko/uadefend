import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

import Hearts from '../../../../svg/header_heart.svg';
import Check from '../../../../svg/header_check.svg';

const ItemDefaultHeader = ({ rounds }) => {
  const image = getImage(rounds.images[0].img.localFile);
  return (
    <div className="item-default__header">
      <div className="item-default__image--container">
        {image && (
          <GatsbyImage
            className="item-default__image"
            image={image}
            alt="alt"
            loading="lazy"
          />
        )}
        {rounds.status === 'closed' ? (
          <Check className="item-default__icon" />
        ) : (
          <Hearts className="item-default__icon" />
        )}
      </div>
    </div>
  );
};

ItemDefaultHeader.propTypes = {
  item: PropTypes.object,
};

export default ItemDefaultHeader;
