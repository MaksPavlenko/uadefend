import React from 'react';
import { graphql } from 'gatsby';
import { useLanguage } from '../hooks/useLanguage';
import Layout from '../components/Layout/layout';
import Seo from '../components/seo';
import '../styles/styles.sass';

import { blogData } from '../db/blogData';
import { contactsData } from '../db/contactsData';

const Backgraund = React.lazy(() =>
  import('../components/Ui/Backgraund/Backgraund')
);
const Blog = React.lazy(() => import('../components/Pages/Blog/Blog'));

const BlogPage = ({ data }) => {
  const isSSR = typeof window === 'undefined';

  return (
    <Layout>
      <Seo
        title={useLanguage(
          'Статті та новини Благодійного фонду “Захистимо разом”',
          `Articles et actualités de la Fondation caritative "Let's Protect Together"`,
          'Articles and news of the "Protect Together" Charitable Foundation'
        )}
      />
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <Backgraund />
        </React.Suspense>
      )}
      <div className="page-wrapper">
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            <Blog
              blogData={blogData}
              categoryData={data.allStrapiBlogCategory.nodes}
              articlesData={data.allStrapiBlog.edges}
              socials={contactsData.socials}
            />
          </React.Suspense>
        )}
      </div>
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query BlogPage($language: String!) {
    allStrapiBlog {
      edges {
        node {
          title_ua
          title_fr
          title_en
          date
          slug
          cover {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  layout: FULL_WIDTH
                )
              }
            }
          }
          blog_category {
            title_ua
            title_fr
            title_en
            slug
          }
        }
      }
    }

    allStrapiBlogCategory {
      nodes {
        title_ua
        title_fr
        title_en
        slug
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
