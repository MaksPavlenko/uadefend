import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import { useLanguage } from '../../../../../hooks/useLanguage';
// import PropTypes from 'prop-types';
import PrewArrow from '../../../../../svg/arr-right.svg';
import NextArrow from '../../../../../svg/arr-left.svg';

const ArticlePagination = ({pageContext}) => {
  const {next, previous} = pageContext
  const langToggle = useLanguage;
  return (
    <div className="article__navigation">
      <Link
        to={previous ? '/blog/' + previous.slug : '/blog'}
        className="article__navigation-link article__navigation-link__prev"
      >
        <span className="article__navigation-icon article__navigation-icon__prev">
          <NextArrow />
        </span>
        <span className="article__navigation-title">
          {langToggle(
            'Попередня стаття',
            'Предыдущая статья',
            'Previous article'
          )}
        </span>
      </Link>
      <Link
       to={next ? '/blog/' + next.slug : '#'}
        className="article__navigation-link article__navigation-link__next"
      >
        <span className="article__navigation-title">
          {langToggle('Наступна стаття', 'Следующая статья', 'Next article')}
        </span>
        <span className="article__navigation-icon article__navigation-icon__next">
          <PrewArrow />
        </span>
      </Link>
    </div>
  );
};

// ArticlePagination.propTypes = {};

export default ArticlePagination;
