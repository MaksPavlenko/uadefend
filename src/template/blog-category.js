import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import Seo from '../components/seo';
import '../styles/styles.sass';

import { blogData } from '../db/blogData';
import { contactsData } from '../db/contactsData';


const Backgraund = React.lazy(() =>
  import('../components/Ui/Backgraund/Backgraund')
);
const Blog = React.lazy(() => import('../components/Pages/Blog/Blog'));

const BlogPageCategory = ({data}) => {
  const isSSR = typeof window === 'undefined';
  const articles = data.article.edges

  return (
    <Layout>
      <Seo title={'Blog Uad'} />
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
              articlesData={articles}
              socials={contactsData.socials}
            />
          </React.Suspense>
        )}
      </div>
    </Layout>
  );
};

export default BlogPageCategory;

export const query = graphql`
  query CategoryBlog($language: String!, $id: String!) {

   article: allStrapiBlog(filter: { blog_category: { id: { eq: $id } } }) {
    edges {
      node {
        strapiId
        slug
        title_ua
        title_fr
        title_en     
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