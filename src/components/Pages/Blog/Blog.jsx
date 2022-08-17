import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../hooks/useLanguage';
import MainDefault from '../../Ui/MainDefault/MainDefault';
import SocialDefault from '../../Ui/SocialDefault/SocialDefault';
import { Column, GridContainer } from '../../Ui/StandartGrid/StandartGrid';
import AsideDefault from '../../Ui/AsideDefault/AsideDefault';
import BlogAside from './BlogAside/BlogAside';
import BlogItems from './BlogItems/BlogItems';

const Blog = ({ blogData, socials, categoryData, articlesData }) => {
  // console.log(articlesData);
  const { title_ua, title_fr, title_en } = blogData.main;
  // const {  articles } = blogData;
  return (
    <div className="page-blog">
      <MainDefault title={useLanguage(title_ua, title_fr, title_en)}>
        <SocialDefault socials={socials} />
      </MainDefault>
      <div className="blog-wrapper">
        <GridContainer>
          <Column>
            <AsideDefault offsetTop={80}>
              <BlogAside category={categoryData} />
            </AsideDefault>
          </Column>
          <Column>
            <BlogItems articlesData={articlesData} />
          </Column>
        </GridContainer>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blogData: PropTypes.object,
  socials: PropTypes.array,
};

export default Blog;
