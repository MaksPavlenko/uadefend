import * as React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import Preloader from './Preloader/Preloader';
import { navigationData } from '../../db/navigationData';
// import { contactsData } from '../../db/contactsData';
import { footerData } from '../../db/footerData';
// import ThemeFixed from './ThemeFixed/ThemeFixed.jsx';

const Layout = ({ children, themeClass }) => {
  return (
    <div className="app-container">
      <Preloader />

      <StaticQuery
        query={graphql`
          query HeadingQuery {
            strapiContacts {
              address {
                map_ua
                map_fr
                map_en
                mail
                adress_item {
                  adress_ua
                  adress_fr
                  adress_en
                }
              }
              phones {
                phone
              }
              socials {
                title
                link
              }
              messangers {
                title
                link
              }
            }
          }
        `}
        render={(data) => (
          <>
            <Header
              phones={data.strapiContacts.phones}
              messengers={data.strapiContacts.messangers}
              menu={navigationData}
              themeClass={themeClass}
            />
            <main>{children}</main>
            <Footer
              dataContacts={data.strapiContacts}
              dataFooter={footerData}
              navigationData={navigationData}
            />
          </>
        )}
      />
      {/* <ThemeFixed /> */}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
