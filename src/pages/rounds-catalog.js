import React from 'react';
import { graphql } from 'gatsby';
import { useLanguage } from '../hooks/useLanguage';
import Layout from '../components/Layout/layout';
import Seo from '../components/seo';
import '../styles/styles.sass';

import { roundsData } from '../db/roundsData';
// import { catalogData } from '../db/catalogData';

const Backgraund = React.lazy(() =>
  import('../components/Ui/Backgraund/Backgraund')
);
const RoundsCatalog = React.lazy(() =>
  import('../components/Pages/RoundsCatalog/RoundsCatalog')
);

const RoundsCatalogPage = ({ data }) => {
  const isSSR = typeof window === 'undefined';

  return (
    <Layout>
      <Seo
        title={useLanguage(
          'Раунди допомоги Благодійного фонду “Захистимо разом”',
          `Rondes d'assistance du fonds de bienfaisance "Protect Together"`,
          'Rounds of assistance from the "Protect Together" Charitable Fund'
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
            <RoundsCatalog
              roundsData={roundsData}
              catalogData={data.allStrapiRound.nodes}
            />
          </React.Suspense>
        )}
      </div>
    </Layout>
  );
};

export default RoundsCatalogPage;

export const query = graphql`
  query ($language: String!) {
    allStrapiRound(sort: { fields: createdAt, order: ASC }) {
      nodes {
        title_ua
        title_fr
        title_en
        images {
          img {
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
        total_price
        current_price
        status
        date
        slug
        filter_category {
          category_ua
          category_fr
          category_en
        }
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
