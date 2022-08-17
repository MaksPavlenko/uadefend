import React from 'react';
import { graphql } from 'gatsby';
import { useLanguage } from '../hooks/useLanguage';
import Layout from '../components/Layout/layout';
import Seo from '../components/seo';
import '../styles/styles.sass';

import { roundCardData } from '../db/roundCardData';
// import { catalogData } from '../db/catalogData';

const Backgraund = React.lazy(() =>
  import('../components/Ui/Backgraund/Backgraund')
);
const RoundCardMain = React.lazy(() =>
  import('../components/Pages/RoundCard/RoundCardMain/RoundCardMain')
);
const RoundCardSlider = React.lazy(() =>
  import('../components/Pages/RoundCard/RoundCardSlider/RoundCardSlider')
);

const RoundCardPage = ({ data }) => {
  const isSSR = typeof window === 'undefined';
  const {
    seo_title_ua,
    seo_title_fr,
    seo_title_en,
    seo_description_ua,
    seo_description_fr,
    seo_description_en,
    // seo_keywords_ua,
    // seo_keywords_fr,
    // seo_keywords_en
  } = data.strapiRound;

  console.log(data);

  return (
    <Layout>
      <Seo
        title={useLanguage(seo_title_ua, seo_title_fr, seo_title_en)}
        description={useLanguage(
          seo_description_ua,
          seo_description_fr,
          seo_description_en
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
            <RoundCardMain
              mainData={data.strapiRound}
              infoData={data.strapiRound.specifications_info}
              markerData={roundCardData.subscriptions}
              descrData={data.strapiRound.description_info}
            />
          </React.Suspense>
        )}
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            <RoundCardSlider
              slideCard={roundCardData.another_round}
              catalogData={data.allStrapiPriorityRound.nodes[0].rounds}
            />
          </React.Suspense>
        )}
      </div>
    </Layout>
  );
};

export default RoundCardPage;

export const query = graphql`
  query ($language: String!, $id: String!) {
    strapiRound(id: { eq: $id }) {
      seo_title_ua
      seo_title_fr
      seo_title_en
      seo_description_ua
      seo_description_fr
      seo_description_en
      seo_keywords_ua
      seo_keywords_fr
      seo_keywords_en
      title_ua
      title_fr
      title_en
      slug
      status
      total_price
      current_price
      donat_price {
        current_price
      }
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
      specifications_info {
        title_ua
        title_fr
        title_en
        specifications {
          marker_ua
          marker_fr
          marker_en
          description_ua
          description_fr
          description_en
        }
      }
      description_info {
        title_ua
        title_fr
        title_en
        description_ua
        description_fr
        description_en
      }
    }
    allStrapiPriorityRound {
      nodes {
        rounds {
          title_ua
          title_fr
          title_en
          slug
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
          date
          status
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
