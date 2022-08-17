import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import Seo from '../components/seo';

import { contactsData } from '../db/contactsData';

const Backgraund = React.lazy(() =>
  import('../components/Ui/Backgraund/Backgraund')
);
const Thanks = React.lazy(() => import('../components/Pages/Thanks/Thanks'));

const ThanksPage = () => {
  const isSSR = typeof window === 'undefined';

  return (
    <Layout>
      <Seo title="404: Not found" />
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <Backgraund />
        </React.Suspense>
      )}
      <div className="page-wrapper">
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            <Thanks socials={contactsData.socials} />{' '}
          </React.Suspense>
        )}
      </div>
    </Layout>
  );
};

export default ThanksPage;

export const query = graphql`
  query($language: String!) {
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
