import * as React from 'react';
import { graphql } from 'gatsby';
import { useLanguage } from '../hooks/useLanguage';
import Layout from '../components/Layout/layout';
import Seo from '../components/seo';

import { contactsData } from '../db/contactsData';

const Backgraund = React.lazy(() =>
  import('../components/Ui/Backgraund/Backgraund')
);
const NotFound = React.lazy(() =>
  import('../components/Pages/NotFound/NotFound')
);
const NotFoundPage = () => {
  const isSSR = typeof window === 'undefined';

  return (
    <Layout>
      <Seo
        title={useLanguage(
          '404: Сторінку не знайдено',
          '404 Page non trouvée',
          '404: Page not found'
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
            <NotFound socials={contactsData.socials} />
          </React.Suspense>
        )}
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const query = graphql`
  query ($language: String!) {
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
