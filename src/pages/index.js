import React from 'react';
import { graphql } from 'gatsby';
import { useLanguage } from '../hooks/useLanguage';

import Layout from '../components/Layout/layout';
import Seo from '../components/seo';
import '../styles/styles.sass';

import { homeData } from '../db/homeData';
// import { catalogData } from '../db/catalogData';
// import { aboutData } from '../db/aboutData';

const Backgraund = React.lazy(() =>
  import('../components/Ui/Backgraund/Backgraund')
);
const HomeMain = React.lazy(() =>
  import('../components/Pages/Home/HomeMain/HomeMain')
);
const OpenRounds = React.lazy(() =>
  import('../components/Pages/Home/OpenRounds/OpenRounds')
);
const HomeBenefits = React.lazy(() =>
  import('../components/Pages/Home/HomeBenefits/HomeBenefits')
);
const Needs = React.lazy(() => import('../components/Pages/Home/Needs/Needs'));
const HomeSteps = React.lazy(() =>
  import('../components/Pages/Home/HomeSteps/HomeSteps')
);
const HomeAbout = React.lazy(() =>
  import('../components/Pages/Home/HomeAbout/HomeAbout')
);
const CloseRounds = React.lazy(() =>
  import('../components/Pages/Home/CloseRounds/CloseRounds')
);
const HomeFaq = React.lazy(() =>
  import('../components/Pages/Home/HomeFaq/HomeFaq')
);
// const Buttons = React.lazy(() =>
//   import('../components/Pages/Home/Buttons/Buttons')
// );

const IndexPage = ({ data }) => {
  const {
    seo_title_ua,
    seo_title_fr,
    seo_title_en,
    seo_description_ua,
    seo_description_fr,
    seo_description_en,
    // seo_keywords_ua,
    // seo_keywords_fr,
    // seo_keywords_en,
  } = data.strapiHome;

  const open = 'open';
  const closed = 'closed';
  const isSSR = typeof window === 'undefined';

  const closeRaunds = data.allStrapiRound.nodes.filter((itm) => {
    return itm.status.toString().indexOf(closed.toString()) > -1;
  });
  const openRaunds = data.allStrapiRound.nodes.filter((itm) => {
    return itm.status.toString().indexOf(open.toString()) > -1;
  });

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
            <HomeMain mainData={data.strapiHome.main} />
          </React.Suspense>
        )}
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            <OpenRounds
              openRaunds={openRaunds}
              openRoundData={data.strapiHome.open_round}
            />
          </React.Suspense>
        )}
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            <HomeBenefits benefitsData={data.strapiHome.home_benefits} />
          </React.Suspense>
        )}
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            <Needs needsData={data.strapiHome.needs} />
          </React.Suspense>
        )}
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            <HomeSteps stepsData={data.strapiHome.home_steps} />
          </React.Suspense>
        )}
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            <HomeAbout
              aboutData={data.strapiHome.about_home}
              mainData={homeData.home_about_aside}
              about={data.strapiHome}
            />
          </React.Suspense>
        )}
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            {closeRaunds.length >= 3 && (
              <CloseRounds
                closeRaunds={closeRaunds}
                closeRoundsData={homeData.close_round}
              />
            )}
          </React.Suspense>
        )}
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            <HomeFaq
              rounds={data.strapiHome.rounds[0]}
              faqData={homeData.faq}
              items={data.strapiHome.faq_items}
            />
          </React.Suspense>
        )}
        {/* {!isSSR && (
          <React.Suspense fallback={<div />}>
            <Buttons buttonsData={homeData.buttons} />
          </React.Suspense>
        )} */}
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query MainHome($language: String!) {
    strapiHome {
      seo_description_en
      seo_description_fr
      seo_description_ua
      seo_title_en
      seo_title_fr
      seo_title_ua
      seo_keywords_ua
      seo_keywords_fr
      seo_keywords_en
      main {
        title_ua
        title_fr
        title_en
        tag
        description_ua
        description_fr
        description_en
        counter_title_ua
        counter_title_fr
        counter_title_en
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
      }
      open_round {
        title_ua
        title_fr
        title_en
      }
      home_benefits {
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
        benefits {
          title_ua
          title_fr
          title_en
        }
      }
      needs {
        title_ua
        title_fr
        title_en
        needs_items {
          title_ua
          title_fr
          title_en
          description_ua
          description_fr
          description_en
          icon {
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
      home_steps {
        title_ua
        title_fr
        title_en
        description_ua
        description_fr
        description_en
        steps_info {
          title_ua
          title_fr
          title_en
        }
      }

      about_home {
        title_ua
        title_fr
        title_en
        about_text_left {
          title_ua
          title_fr
          title_en
          description_ua
          description_fr
          description_en
        }
      }
      about_text_right {
        title_ua
        title_fr
        title_en
        description_ua
        description_fr
        description_en
      }
      faq {
        title_ua
        title_fr
        title_en
        marker_ua
        marker_fr
        marker_en
      }
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
      faq_items {
        question_ua
        question_fr
        question_en
        answer_ua
        answer_fr
        answer_en
      }
    }

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
