import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../hooks/useLanguage';

const ItemDefaultFooter = ({ rounds }) => {
  const langToggle = useLanguage;

  const percent = Math.round((rounds.current_price * 100) / rounds.total_price);
  return (
    <div className="item-default__footer">
      {rounds.status === 'open' ? (
        <div className="item-default__price--container">
          <div className="item-default__price">
            <span className="item-default__price--current">
              {rounds.current_price}
              <span className="currency"> €</span>
            </span>
            <span className="item-default__price--separator">
              &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="item-default__price--total">
              {rounds.total_price}
              <span className="currency"> €</span>
            </span>
          </div>
          <span className="item-default__price--percent">{percent + '%'}</span>
        </div>
      ) : (
        <div className="item-default__price--container">
          <div className="item-default__price">
            {langToggle(
              'було зібрано:',
              'a été collecté:',
              'has been collected:'
            )}
          </div>
          <span className="item-default__price--current">
            {rounds.total_price}
            <span className="currency"> €</span>
          </span>
        </div>
      )}

      <p className="item-default__title">
        {langToggle(rounds.title_ua, rounds.title_fr, rounds.title_en)}
      </p>
    </div>
  );
};

ItemDefaultFooter.propTypes = {
  item: PropTypes.object,
};

export default ItemDefaultFooter;
