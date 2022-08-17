import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby-plugin-react-i18next';
import { useLanguage } from '../../../hooks/useLanguage';
import ButtonUp from '../../../svg/arrow_up.svg';
import ArrowUp from '../../../svg/arrow_right_top.svg';
import NextArrow from '../../../svg/arr-right.svg';
import PrevArrow from '../../../svg/arr-left.svg';
import ButtonDonnatHeart from '../../../svg/icons_heart.svg';
import ButtonPlus from '../../../svg/plus-sm.svg';

export const ButtonOpenRound = () => {
  const langToggle = useLanguage;
  return (
    <Link
      to={'/rounds-catalog/'}
      className="button-ui__button"
      aria-label="Open"
    >
      <span className="button-bg__white"></span>
      <span className="button-ui__text">
        {langToggle(
          'Перейти в каталог',
          'Aller au catalogue',
          'Go to the catalog'
        )}
      </span>
      <ButtonUp className="button-ui__icon" />
    </Link>
  );
};

export const ButtonUi = ({ title, link }) => {
  return (
    <Link to={link} className="button-ui__button" aria-label="Open">
      <span className="button-bg__white"></span>
      <span className="button-ui__text">{title}</span>
      <ButtonUp className="button-ui__icon" />
    </Link>
  );
};

export const ButtonPlusUi = ({ title, link }) => {
  return (
    <Link to={link} className="button-plus__ui" aria-label="Open">
      <span className="button-bg__white"></span>
      <div className="button-plus__text-container">
        <p className="button-ui__text">{title}</p>
      </div>
      <div className="button-plus__icon-container">
        <ButtonPlus className="button-plus__icon" />
      </div>
    </Link>
  );
};

export const ButtonUiDonnat = ({ title, link }) => {
  return (
    <Link to={link} className="button-ui__button" aria-label="Open">
      <span className="button-bg__white"></span>
      <span className="button-ui__text">{title}</span>
      <ButtonPlus className="button-ui__icon" />
    </Link>
  );
};

export const ButtonDonnat = ({ title, hendler }) => {
  return (
    <button className="button-ui__button" aria-label="Open" onClick={hendler}>
      <span className="button-ui__text">{title}</span>
      <ButtonDonnatHeart className="button-ui__icon" />
    </button>
  );
};

export const ButtonLinkUi = ({ title, link }) => {
  return (
    <Link to={link} className="order__button_order-button" aria-label="Open">
      <div className="button-content">
        <span className="order_button-text">{title}</span>
        <ArrowUp className="up-catalog" />
      </div>
    </Link>
  );
};

export const SampleNextArrow = ({ hendler }) => {
  return (
    <button
      aria-label="Next"
      className="slider-button slider-button__next"
      onClick={hendler}
    >
      <span className="slider-button__arrow--wrapper">
        <NextArrow className="slider-button__arrow slider-button__arrow--next wht" />
        <NextArrow className="slider-button__arrow slider-button__arrow--next wht" />
      </span>
    </button>
  );
};

export const SamplePrevArrow = ({ hendler }) => {
  return (
    <button
      aria-label="Prev"
      className={'slider-button slider-button__prev'}
      onClick={hendler}
    >
      <span className="slider-button__arrow--wrapper">
        <PrevArrow className="slider-button__arrow slider-button__arrow--prev wht" />
        <PrevArrow className="slider-button__arrow slider-button__arrow--prev wht" />
      </span>
    </button>
  );
};

export const DefaulButtonLink = ({ clasButton, children, link, title }) => {
  return (
    <Link
      to={link}
      className={
        clasButton
          ? `default-button__link default-button__link--${clasButton}`
          : 'default-button__link'
      }
    >
      <span className="default__button--bg"></span>
      <span className="default-button__wrapper">
        <span className="default-button__title--wrapper">
          <span className="default-button__title">{title}</span>
        </span>
        <span className="default-button__icon--external">
          <span className="default-button__icon--wrapper">{children}</span>
        </span>
      </span>
    </Link>
  );
};

ButtonUi.propTypes = {
  title: PropTypes.string,
  hendler: PropTypes.func,
};

ButtonLinkUi.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
};

SampleNextArrow.propTypes = {
  hendler: PropTypes.func,
};

SamplePrevArrow.propTypes = {
  hendler: PropTypes.func,
};
