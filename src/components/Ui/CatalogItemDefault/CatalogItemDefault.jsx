import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import PropTypes from 'prop-types';

import ItemDefaultHeader from './ItemDefaultHeader/ItemDefaultHeader';
import ItemDefaultFooter from './ItemDefaultFooter/ItemDefaultFooter';

import { fromRoundSlugToUrl } from '../../../utils/slug';

const CatalogItemDefault = ({ rounds, toggle }) => {
  
  return (
    <div
      className={
        toggle
          ? 'item-default__wrapper item-default__wrapper--list'
          : 'item-default__wrapper'
      }
    >
      <Link
        to={fromRoundSlugToUrl(rounds.slug)}
        className="item-default__link"
      ></Link>
      <ItemDefaultHeader rounds={rounds} />
      <ItemDefaultFooter rounds={rounds} />
    </div>
  );
};

CatalogItemDefault.propTypes = {
  item: PropTypes.object,
  toggle: PropTypes.bool,
};

export default CatalogItemDefault;
