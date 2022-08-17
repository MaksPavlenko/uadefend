import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../hooks/useLanguage';

import Filter from '../../../../svg/filter.svg';
import { Link } from 'gatsby-plugin-react-i18next';

const BlogAside = ({ category }) => {
  const langToggle = useLanguage;
  const [openFilter, setOpenFilter] = React.useState(false);
  return (
    <div className="blog-aside__wrapper">
      <button
        className="filter-button filter-button__toggle"
        onClick={() => setOpenFilter(!openFilter)}
      >
        <span className="filter-button__title--wrapper">
          <span className="filter-button__title filter-button__title--toggle">
            {useLanguage('Фільтр', 'Filtre', 'Filter')}
          </span>
        </span>
        <span className="filter-button__marker">
          <Filter className="filter-button__icon" />
        </span>
      </button>
      <ul className={openFilter ? 'filter-list is-hidden' : 'filter-list'}>
      <li className="filter-item">
              <Link to="/blog" className="filter-button">
                <span className="filter-button__title--wrapper">
                  <span className="filter-button__title">
                    {langToggle('# Усі статті', '# Tous les articles', '# All articles')}
                  </span>
                </span>
                <span className="filter-button__marker">
                  <span className="filter-button__marker--check"></span>
                </span>
              </Link>
            </li>
        {category.map((item, index) => {
          return (
            <li className="filter-item" key={index}>
              <Link to={item.slug} className="filter-button">
                <span className="filter-button__title--wrapper">
                  <span className="filter-button__title">
                    {langToggle(item.title_ua, item.title_fr, item.title_en)}
                  </span>
                </span>
                <span className="filter-button__marker">
                  <span className="filter-button__marker--check"></span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

BlogAside.propTypes = {
  category: PropTypes.array,
};

export default BlogAside;
