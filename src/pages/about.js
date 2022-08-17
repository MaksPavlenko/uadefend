import React from 'react';
import { graphql } from 'gatsby';
import { useLanguage } from '../hooks/useLanguage';

import '../styles/styles.sass';
import Layout from '../components/Layout/layout';
import Seo from '../components/seo';

import { blogData } from '../db/blogData';
// import { aboutData } from '../db/aboutData';
import { contactsData } from '../db/contactsData';
import { homeData } from '../db/homeData';

const Backgraund = React.lazy(() =>
  import('../components/Ui/Backgraund/Backgraund')
);
const AboutMain = React.lazy(() =>
  import('../components/Pages/About/AboutMain/AboutMain')
);
const AboutTitleText = React.lazy(() =>
  import('../components/Pages/About/AboutTitleText/AboutTitleText')
);
const AboutNeeds = React.lazy(() =>
  import('../components/Pages/About/AboutNeeds/AboutNeeds')
);
const AboutBenefits = React.lazy(() =>
  import('../components/Pages/About/AboutBenefits/AboutBenefits')
);
const AboutFaqSection = React.lazy(() =>
  import('../components/Pages/About/AboutFaqSection/AboutFaqSection')
);
const AboutBlog = React.lazy(() =>
  import('../components/Pages/About/AboutBlog/AboutBlog')
);
const AboutDocuments = React.lazy(() =>
  import('../components/Pages/About/AboutDocuments/AboutDocuments')
);

const AboutPage = ({ data }) => {
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
  } = data.strapiAbout;

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
            <AboutMain
              mainData={data.strapiAbout.about_main}
              socials={contactsData.socials}
            />
          </React.Suspense>
        )}
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            <AboutTitleText
              aboutData={data.strapiAbout.about_page}
              mainData={homeData.main}
            />
          </React.Suspense>
        )}
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            <AboutNeeds needsData={data.strapiAbout.needs} />
          </React.Suspense>
        )}
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            <AboutBenefits benefitsData={data.strapiHome.home_benefits} />
          </React.Suspense>
        )}
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            <AboutDocuments
              docData={data.strapiAbout.about_documents}
              imgData={data.strapiAbout.images}
            />
          </React.Suspense>
        )}
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            <AboutFaqSection
              faqData={homeData.faq}
              items={data.strapiHome.faq_items}
              rounds={data.strapiHome.rounds[0]}
            />
          </React.Suspense>
        )}
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            <AboutBlog
              blogData={blogData.main}
              slideData={data.allStrapiBlog.edges}
            />
          </React.Suspense>
        )}
      </div>
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query ($language: String!) {
    strapiAbout {
      seo_title_ua
      seo_title_fr
      seo_title_en
      seo_description_ua
      seo_description_fr
      seo_description_en
      seo_keywords_ua
      seo_keywords_fr
      seo_keywords_en
      about_main {
        title_ua
        title_fr
        title_en
      }
      about_page {
        title_ua
        title_fr
        title_en
        description_ua
        description_fr
        description_en
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
      about_documents {
        title_ua
        title_fr
        title_en
      }
      images {
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
    }
    strapiHome {
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
          main {
            title_ua
            title_fr
            title_en
            date
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
          blog_category {
            title_ua
            title_fr
            title_en
            slug
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
