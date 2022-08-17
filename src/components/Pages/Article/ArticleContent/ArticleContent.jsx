import React from 'react';
import { Column, GridContainer } from '../../../Ui/StandartGrid/StandartGrid';
import AsideDefault from '../../../Ui/AsideDefault/AsideDefault';
import PropTypes from 'prop-types';
import ArticleAside from './ArticleAside/ArticleAside';
import ArticleContentItems from './ArticleContentItems/ArticleContentItems';
import ArticlePagination from './ArticlePagination/ArticlePagination';


const ArticleContent = ({ contentData, pageContext }) => {
  return (
      <div className="article-content__wrapper">
        <GridContainer>
          <Column>
            <AsideDefault offsetTop={140}>
              <ArticleAside />
            </AsideDefault>
          </Column>
          <Column>
            <ArticleContentItems items={contentData} />
            <ArticlePagination pageContext={pageContext}/>
          </Column>
        </GridContainer>
      </div>
  );
};

ArticleContent.propTypes = {
  contentData: PropTypes.array,
};

export default ArticleContent;
