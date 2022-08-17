import React from 'react';
import { graphql } from 'gatsby';
import { ThemeContext } from '../context/ThemeProvider';
import { useLanguage } from '../hooks/useLanguage';

import Layout from '../components/Layout/layout';
import Seo from '../components/seo';
import '../styles/styles.sass';

// import { articleData } from '../db/articleData';

const Backgraund = React.lazy(() =>
  import('../components/Ui/Backgraund/Backgraund')
);
const ArticleMain = React.lazy(() =>
  import('../components/Pages/Article/ArticleMain/ArticleMain')
);
const ArticleContent = React.lazy(() =>
  import('../components/Pages/Article/ArticleContent/ArticleContent')
);

const ArticlePage = ({ data, pageContext }) => {
  const { themeMode } = React.useContext(ThemeContext);
  const isSSR = typeof window === 'undefined';

  const { title_ua, title_fr, title_en } = data.strapiBlog;

  return (
    <Layout themeClass={themeMode === true ? 'is-light' : null}>
      <Seo title={useLanguage(title_ua, title_fr, title_en)} />
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <Backgraund theme={themeMode} />
        </React.Suspense>
      )}
      <div className="page-wrapper">
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            <ArticleMain mainData={data.strapiBlog} />
          </React.Suspense>
        )}
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            <ArticleContent
              contentData={data.strapiBlog.content}
              pageContext={pageContext}
            />
          </React.Suspense>
        )}
      </div>
    </Layout>
  );
};

export default ArticlePage;

export const query = graphql`
  query ($language: String!, $id: String!) {
    strapiBlog(id: { eq: $id }) {
      title_ua
      title_fr
      title_en
      slug
      content
      date
      blog_category {
        title_ua
        title_fr
        title_en
      }
    }
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
