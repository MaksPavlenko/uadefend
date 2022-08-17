import React from 'react';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby-plugin-react-i18next';
import { useLanguage } from '../../../../../hooks/useLanguage';
import PropTypes from 'prop-types';

import { fromBlogCategorySlugToUrl } from '../../../../../utils/slug';

const BlogItemDefault = ({ item }) => {
  const image = getImage(item.node.cover.localFile);

  const langToggle = useLanguage;

  return (
    <div className="blog-item__wrapper">
      <Link
        to={fromBlogCategorySlugToUrl(item.node.slug)}
        className="blog-item__link"
      ></Link>
      <div className="blog-item__image-container">
        <div className="blog-item__image--wrapper">
          <GatsbyImage
            className="blog-item__image"
            image={image}
            alt="alt"
            loading="lazy"
          />
        </div>
      </div>
      <div className="blog-item__info">
        <div className="blog-item__info--header">
          <span className="blog-item__info--category">
            {langToggle(
              item.node.blog_category.title_ua,
              item.node.blog_category.title_fr,
              item.node.blog_category.title_en
            )}
          </span>
          <span className="blog-item__info--date">{item.node.date}</span>
        </div>
        <div className="blog-item__info--footer">
          <p className="blog-item__info--title">
            {langToggle(
              item.node.title_ua,
              item.node.title_fr,
              item.node.title_en
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

BlogItemDefault.propTypes = {
  item: PropTypes.object,
};

export default BlogItemDefault;
