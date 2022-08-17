import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../../hooks/useLanguage';

const RoundCardDescr = ({ descrData }) => {
  const langToggle = useLanguage;
  const [openDescr, setOpenDescr] = React.useState(false);

  return (
    <div className="description__container">
      <button
        className="specifications__accordion specifications__accordion-right"
        type="button"
        onClick={() => setOpenDescr(!openDescr)}
      >
        <h3 className="specifications__title">
          {langToggle(descrData.title_ua, descrData.title_fr, descrData.title_en)}
        </h3>
        <div className="specifications__accordion-icon">
          <span className="accordion-icon__line accordion-icon__line-1"></span>
          <span
            className={
              openDescr === true
                ? 'accordion-icon__line accordion-icon__line-2 active'
                : 'accordion-icon__line accordion-icon__line-2'
            }
          ></span>
        </div>
      </button>
      <div
        className={
          openDescr === true
            ? 'specifications__accordion--content active'
            : ' specifications__accordion--content'
        }
      >
        <p className="description__item-descr">
          {langToggle(
            descrData.description_ua,
            descrData.description_fr,
            descrData.description_en
          )}
        </p>
      </div>
    </div>
  );
};

RoundCardDescr.propTypes = {
  descrData: PropTypes.object
};

export default RoundCardDescr;
