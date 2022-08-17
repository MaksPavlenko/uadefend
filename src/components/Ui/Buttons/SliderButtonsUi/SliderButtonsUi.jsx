import React from 'react';
import ArrowLeft from '../../../../svg/arrow_left.svg';
import ArrowRight from '../../../../svg/arrow_right.svg';
// import ArrowDown from '../../../../svg/arrow-down.svg';

export const NextUi = () => {
  return (
    <span className="slider-button__wrapper">
      <span className="button__decor button__decor-top"></span>
      <span className="button__decor button__decor-bottom"></span>
      <span className="button__arrow-icon button__arrow-icon--next">
        <ArrowRight className="button__arrow" />
      </span>
    </span>
  );
};

export const PrevUi = () => {
  return (
    <div className="slider-button__wrapper">
      <span className="button__decor button__decor-top"></span>
      <span className="button__decor button__decor-bottom"></span>
      <span className="button__arrow-icon button__arrow-icon--prev">
        <ArrowLeft className="button__arrow" />
      </span>
    </div>
  );
};

// export const DownUi = () => {
//   return (
//     <div className="slider-button__wrapper">
//       <span className="button__decor button__decor-top"></span>
//       <span className="button__decor button__decor-bottom"></span>
//       <span className="button__arrow-icon button__arrow-icon--prev">
//         <ArrowDown className="button__arrow" />
//       </span>
//     </div>
//   );
// };
