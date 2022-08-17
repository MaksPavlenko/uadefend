import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import { ThemeContext } from '../../../../../context/ThemeProvider';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useLanguage } from '../../../../../hooks/useLanguage.js';

import Liqpay from '../../../../../svg/liqpay.svg';
import Arrow from '../../../../../svg/nav_arrow.svg';
import Plus from '../../../../../svg/nav_plus.svg';
// import PropTypes from 'prop-types';

export const ModalInput = ({
  label,
  type,
  name,
  placeholder,
  value,
  change,
  mode,
}) => {
  return (
    <div
      className={
        mode === true
          ? 'input-animate__container is-anonymous'
          : 'input-animate__container'
      }
    >
      <div className="modal-input__wrapper">
        <label className="form-label">{label}</label>
        <input
          className={mode === true ? 'modal-input is-anonymous' : 'modal-input'}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={change}
          required={mode === false ? true : false}
        />
      </div>
    </div>
  );
};

export const ModalPaymantInput = ({ label, title, mainData }) => {
  const { setPayMode } = React.useContext(ThemeContext);
  return (
    <div className="input-animate__container">
      <div className="modal-input__wrapper">
        <label className="form-label">{label}</label>
        <div className="modal-input modal-input__payment--wrapper">
          <div className="payment-method">
            <Liqpay className="payment-method__icon" />
          </div>
          <Link
            to="/donate/"
            className="payment-method__link"
            onClick={() => setPayMode(mainData)}
          >
            <span className="payment-method__link--title">{title}</span>
            <Arrow className="payment-method__link--icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export const ModalSubmitInput = ({
  label,
  price,
  payHandler,
  title,
  mode,
  setMode,
}) => {
  return (
    <div className="input-animate__container">
      <div className="modal-input__wrapper">
        <div className="modal-input__header">
          <label className="form-label">{label}</label>
          <div className="pay-mode__wrapper">
            <div
              className="pay-mode__button"
              role="presentation"
              onClick={() => setMode(false)}
            >
              <span
                className={
                  mode === false
                    ? 'pay-mode__button--check is-active'
                    : 'pay-mode__button--check'
                }
              ></span>
              <span className="pay-mode__button--title">
                {useLanguage('Звичайний режим', 'Mode normal', 'Normal mode')}
              </span>
            </div>
            <div
              className="pay-mode__button"
              role="presentation"
              onClick={() => setMode(true)}
            >
              <span
                className={
                  mode === true
                    ? 'pay-mode__button--check is-active'
                    : 'pay-mode__button--check'
                }
              ></span>
              <span className="pay-mode__button--title">
                {useLanguage(
                  'Анонімний режим',
                  'Mode anonyme',
                  'Anonymous mode'
                )}
              </span>
            </div>
          </div>
        </div>

        <div className="modal-input modal-input__submit--wrapper">
          <div className="modal-input__price--wrapper">
            <span className="modal-input__price">
              <span className="modal-input__price--count">{price}</span>
              <span className="modal-input__price--currency">€</span>
            </span>
          </div>
          <button className="modal-input__button" onClick={payHandler}>
            <span className="modal-input__button--title">{title}</span>
            <Plus className="modal-input__button--icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export const ModalPhoneInput = ({ country, label, value, change, mode }) => {
  return (
    <div
      className={
        mode === true
          ? 'input-animate__container is-phone is-anonymous'
          : 'input-animate__container is-phone'
      }
    >
      <div className="modal-input__wrapper">
        <label className="form-label">{label}</label>
        <PhoneInput
          country={country}
          name="phone"
          className={
            mode === true
              ? 'modal-input modal-input__phone is-anonymous'
              : 'modal-input modal-input__phone'
          }
          // value={phone}
          onChange={change}
          required={mode === false ? true : false}
        />
      </div>
    </div>
  );
};

// ModalInput.propTypes = {};

// export default ModalInput;
