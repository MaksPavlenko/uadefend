import React from 'react';
import { graphql } from 'gatsby';
import '../styles/styles.sass';

import Layout from '../components/Layout/layout';
import Seo from '../components/seo';

const Backgraund = React.lazy(() =>
  import('../components/Ui/Backgraund/Backgraund')
);
const DonateMain = React.lazy(() =>
  import('../components/Pages/Donate/DonateMain/DonateMain')
);
const DonateContent = React.lazy(() =>
  import('../components/Pages/Donate/DonateContent/DonateContent')
);

const DonatePage = ({ data }) => {
  const isSSR = typeof window === 'undefined';

  return (
    <Layout>
      <Seo title={'About'} />
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <Backgraund />
        </React.Suspense>
      )}
      <div className="page-wrapper">
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            <DonateMain donateData={data.strapiPayments.main} />
          </React.Suspense>
        )}
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            <DonateContent
              donateData={data.strapiPayments}
              importantItemData={data.strapiHome.rounds[0]}
            />
          </React.Suspense>
        )}
      </div>
    </Layout>
  );
};

export default DonatePage;

export const query = graphql`
  query Donate($language: String!) {
    strapiHome {
      rounds {
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
      }
    }

    strapiPayments {
      main {
        title_ua
        title_fr
        title_en
      }
      info {
        title_ua
        title_fr
        title_en
        info_items {
          title_ua
          title_fr
          title_en
          description_ua
          description_fr
          description_en
        }
      }
      banks_metod {
        title_ua
        title_fr
        title_en
        details {
          id
          marker_ua
          marker_fr
          marker_en
          value_ua
          value_fr
          value_en
        }
      }
      crypto {
        id
        currency
        address
        chain
        qr_code {
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
