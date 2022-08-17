import React from 'react';
import PropTypes from 'prop-types';

export const Accordion = ({ children }) => {
  return <div className="accordion-item">{children}</div>;
};

export const AccordionHeader = ({ title, index, accordionToggle, active }) => {
  return (
    <div
      className="accordion-button"
      aria-label="open accordion item"
      role="presentation"
      onClick={(e) => accordionToggle(e, index)}
    >
      <div className="accordion-button__title--wrapper">
        <h3 className="accordion-button__title">{title}</h3>
      </div>
      <div
        className={
          active === index
            ? 'accordion-button__plus is-active'
            : 'accordion-button__plus'
        }
      >
        <span className="button-plus__line"></span>
        <span className="button-plus__line"></span>
      </div>
    </div>
  );
};

export const AccordionContent = ({ children, active, index }) => {
  return (
    <div
      className={
        active === index ? 'accordion-content is-active' : 'accordion-content'
      }
    >
      {children}
    </div>
  );
};

AccordionHeader.propTypes = {
  title: PropTypes.string,
};
