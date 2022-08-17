import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../../hooks/useLanguage';
import RoundCardShare from './RoundCardShare/RoundCardShare';

const RoundCardInfo = ({ infoData, markerData }) => {
  const langToggle = useLanguage;
  const [openSpecification, setOpenSpecification] = React.useState(false);
  

  return (
    <div className="specifications__container">
      <button
        className="specifications__accordion"
        type="button"
        onClick={() => setOpenSpecification(!openSpecification)}
      >
        <h2 className="specifications__title">
          {langToggle(infoData.title_ua, infoData.title_fr, infoData.title_en)}
        </h2>
        <div className="specifications__accordion-icon">
          <span className="accordion-icon__line accordion-icon__line-1"></span>
          <span
            className={
              openSpecification === true
                ? 'accordion-icon__line accordion-icon__line-2 active'
                : 'accordion-icon__line accordion-icon__line-2'
            }
          ></span>
        </div>
      </button>
      <div
        className={
          openSpecification === true
            ? 'specifications__accordion--content active'
            : 'specifications__accordion--content'
        }
      >
        <ul className="specifications__list">
          {infoData.specifications.map((item, index) => {
            return (
              <li className="specifications__item" key={index}>
                <div className="specifications__item-title">
                  {langToggle(item.marker_ua, item.marker_fr, item.marker_en)}
                </div>
                <div className="specifications__item-descr">
                  {langToggle(
                    item.description_ua,
                    item.description_fr,
                    item.description_en
                  )}
                </div>
              </li>
            );
          })}
          <li className="specifications__item last-specifications__item">
            <div className="specifications__item-title">
              {langToggle(
                markerData.marker_ua,
                markerData.marker_fr,
                markerData.marker_en
              )}
            </div>
            <div className="specifications__item-descr specifications__item-shere">
              <RoundCardShare />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

RoundCardInfo.propTypes = {
  markerData: PropTypes.object,
  infoData: PropTypes.object,
};

export default RoundCardInfo;
