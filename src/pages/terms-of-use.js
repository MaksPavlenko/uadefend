import React from 'react';
import { graphql } from 'gatsby';
import '../styles/styles.sass';
import Layout from '../components/Layout/layout';
import Seo from '../components/seo';

const Backgraund = React.lazy(() =>
  import('../components/Ui/Backgraund/Backgraund')
);
const TermsMain = React.lazy(() =>
  import('../components/Pages/Terms/TermsMain/TermsMain')
);
const TermsContent = React.lazy(() =>
  import('../components/Pages/Terms/TermsContent/TermsContent')
);

const isSSR = typeof window === 'undefined';

const DonatePage = ({ data }) => {
  return (
    <Layout>
      <Seo title={'Terms of use'} />
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <Backgraund />
        </React.Suspense>
      )}
      <div className="page-wrapper">
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            <TermsMain main={data.strapiTerms.main} />
          </React.Suspense>
        )}
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            <TermsContent contentData={data.strapiTerms} />
          </React.Suspense>
        )}
      </div>
    </Layout>
  );
};

export default DonatePage;

export const query = graphql`
  query Terms($language: String!) {
    strapiTerms {
      main {
        title_ua
        title_fr
        title_en
        data
      }
      sidebar {
        image {
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
      }
      introduction {
        title_ua
        title_fr
        title_en
        description_ua
        description_fr
        description_en
      }
      terms
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
