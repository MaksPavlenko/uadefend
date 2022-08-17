import React from 'react';
import PropTypes from 'prop-types';
import StickyBox from 'react-sticky-box';

import DonnatHeader from './DonnatHeader/DonnatHeader';
import DonnatFooter from './DonnatFooter/DonnatFooter';

const RoundCardDonnat = ({ mainData, setPrice, price, setOpen }) => {
  return (
    <div className="roundCard-donat">
      <StickyBox offsetTop={140}>
        <div className="roundCard-donat__wrapper">
          <DonnatHeader mainData={mainData} />
          <DonnatFooter mainData={mainData} price={price} setPrice={setPrice} setOpen={setOpen} />
        </div>
      </StickyBox>
    </div>
  );
};

RoundCardDonnat.propTypes = {
  mainData: PropTypes.object,
  price: PropTypes.string,
  setPrice: PropTypes.func,
  setOpen: PropTypes.func,
  catalogData: PropTypes.object
};

export default RoundCardDonnat;
