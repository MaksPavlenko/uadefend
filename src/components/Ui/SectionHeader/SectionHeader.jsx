import React from 'react';
import PropTypes from 'prop-types';

const SectionHeader = ({ children, sectionTitle }) => {
  return (
    <header className="section-header">
      <div className="section-header__wrapper">
        <div className="section-header__content">
          <div className="header-title__wrapper">
            <h1 className="header__title">{sectionTitle}</h1>
          </div>

          <div className="header__icon-content">{children}</div>
        </div>
      </div>
    </header>
  );
};

SectionHeader.propTypes = {
  sectionTitle: PropTypes.string,
};

export default SectionHeader;
