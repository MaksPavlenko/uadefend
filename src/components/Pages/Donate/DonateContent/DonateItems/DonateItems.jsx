import React from 'react';
import PropTypes from 'prop-types';
import { gsap, Power2 } from 'gsap';
import { ThemeContext } from '../../../../../context/ThemeProvider';

import SectionUi from '../../../../Ui/SectionUi/SectionUi';
import DonateInfo from './DonateInfo/DonateInfo';
import Bank from './Bank/Bank';
import Crypto from './Crypto/Crypto';

const DonateItems = ({ donateData }) => {
  const [copy, setCopy] = React.useState(null);
  const { loaderMode } = React.useContext(ThemeContext);
  const time = loaderMode === false ? 9 : 1.8;

  const [tl] = React.useState(gsap.timeline({ paused: false }));
  React.useEffect(() => {
    tl.to('.donate-item__section', 1.2, {
      opacity: 1,
      y: 0,
      ease: Power2.easeOut,
      delay: time,
    });
  }, [tl, time]);
  return (
    <div className="donate-item__section">
      {donateData.banks_metod.map((item, index) => {
        return <Bank item={item} key={index} copy={copy} setCopy={setCopy} />;
      })}
      {donateData.crypto.map((item, index) => {
        return <Crypto item={item} key={index} copy={copy} setCopy={setCopy} />;
      })}
      <SectionUi>
        {donateData.info.map((item, index) => {
          return <DonateInfo donateData={item} key={index} />;
        })}
      </SectionUi>
    </div>
  );
};

DonateItems.propTypes = {
  donateData: PropTypes.object,
};

export default DonateItems;
