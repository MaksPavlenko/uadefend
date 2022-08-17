import React from 'react';
// import Noise from '../../../images/noise.gif';
import Noise from '../../../images/noise.png';

const Backgraund = ({ theme }) => {
  return (
    <div
      className={
        theme === true ? 'page-backgraund is-light' : 'page-backgraund'
      }
    >
      <div className="noise" style={{ backgroundImage: `url(${Noise})` }}></div>
    </div>
  );
};

export default Backgraund;
