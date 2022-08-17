import React from 'react';
import { gsap, Power2 } from 'gsap';
import { ThemeContext } from '../../../context/ThemeProvider';
import PropTypes from 'prop-types';

import FooterBottom from './FooterBottom/FooterBottom';
import FooterLeft from './FooterLeft/FooterLeft';
import FooterCenter from './FooterCenter/FooterCenter';
import FooterRight from './FooterRight/FooterRight';

const Footer = ({ dataContacts, dataFooter, navigationData }) => {
  const { loaderMode } = React.useContext(ThemeContext);
  const time = loaderMode === false ? 8 : 1;

  const [tl] = React.useState(gsap.timeline({ paused: false }));
  React.useEffect(() => {
    tl.to('.footer', 1.4, {
      opacity: 1,
      y: 0,
      ease: Power2.easeOut,
      delay: time,
    });
  }, [tl, time]);

  return (
    <footer className="page-wrapper footer" id="footer">
      <div className="footer-main">
        <FooterLeft
          title={dataFooter.footer_title}
          adressData={dataContacts.address}
        />
        <FooterCenter
          socials={dataContacts.socials}
          messangers={dataContacts.messangers}
          phones={dataContacts.phones}
        />
        <FooterRight
          navigationData={navigationData}
          menuData={dataFooter.menu}
          links={dataFooter.link_polisy}
          title={dataFooter.footer_title}
        />
      </div>
      <FooterBottom links={dataFooter.links} />
    </footer>
  );
};

Footer.propTypes = {
  dataContacts: PropTypes.object,
  dataFooter: PropTypes.object,
  navigationData: PropTypes.array,
};

export default Footer;
