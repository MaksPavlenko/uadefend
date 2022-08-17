import React from 'react';
// import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CopyIcon from '../../../svg/copy.svg';
import CheckIcon from '../../../svg/bank_check.svg';
import { useLanguage } from '../../../hooks/useLanguage';
import { GatsbyImage } from 'gatsby-plugin-image';

export const BankUiCopy = ({ title, value, id, copy, setCopy }) => {
  return (
    <div className="bank-ui__item">
      <div className="bank-ui__title-wrapper">
        <h3 className="bank-ui__title">{title}</h3>
        <CheckIcon
          className={copy === id ? 'bank-ui__icon is-show' : 'bank-ui__icon'}
        />
      </div>
      <CopyToClipboard text={value} onCopy={() => setCopy(id)}>
        <div
          className={
            copy === id ? 'bank-ui__wrapper is-copy' : 'bank-ui__wrapper'
          }
        >
          <div className="text-wrapper">
            <p className="text">{value}</p>
          </div>

          <div className="copy-button">
            {copy === id ? <CheckIcon /> : <CopyIcon />}
          </div>
        </div>
      </CopyToClipboard>
    </div>
  );
};

export const BankUi = ({ title, value }) => {
  return (
    <>
      <div className="bank-ua__title-wrapper">
        <h3 className="bank-ui__title">{title}</h3>
      </div>
      <div className="bank-ui__wrapper">
        <div className="text-wrapper">
          <p className="text">{value}</p>
        </div>
      </div>
    </>
  );
};

export const BankUiScan = ({ title, chain, currency, qrCode }) => {
  const langToggle = useLanguage;

  return (
    <div className="scan-ui__wrapper">
      <h3 className="bank-ui__title">{title}</h3>
      <div className="bank-scan__container">
        <div className="scan-image__wrapper">
          <div className="scan-image">
            {qrCode && (
              <GatsbyImage
                className="item-default__image"
                image={qrCode}
                alt="alt"
                loading="lazy"
              />
            )}
          </div>
        </div>
        <div className="bank-scan__warning">
          <div className="bank-scan__warning-text">
            <p className="warning-text">
              {langToggle(
                'Надсилайте тільки',
                'Envoyer seulement',
                'Send only'
              )}{' '}
              <span className="warning-text__span">{currency}</span>{' '}
              {langToggle(
                'на цю адресу депозиту.',
                'à cette adresse de dépôt.',
                'to this deposit address.'
              )}
            </p>
          </div>
          <div className="bank-scan__warning-text">
            <p className="warning-text">
              {langToggle(
                'Переконайтеся що мережа',
                'Assurez-vous que le réseau',
                'Make sure the network'
              )}{' '}
              <span className="warning-text__span">{chain}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// BankUi.propTypes = {};
// BankUi.propTypes = {};
