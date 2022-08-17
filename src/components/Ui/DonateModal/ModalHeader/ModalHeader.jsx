import React from 'react';
import PropTypes from 'prop-types';

const ModalHeader = ({ title, setOpen }) => {
  return (
    <div className="modal-header">
      <h3 className="modal-title">{title}</h3>
      <div className="modal-close__wrapper">
        <span className="modal-close__title">Закрити форму</span>
        <button
          className="modal-close"
          aria-label="close menu"
          onClick={() => setOpen(false)}
        >
          <span className="close__lines">
            <span className="close__line line-a-1"></span>
            <span className="close__line line-a-2"></span>
            <span className="close__line line-b-1"></span>
            <span className="close__line line-b-2"></span>
          </span>
        </button>
      </div>
    </div>
  );
};

ModalHeader.propTypes = {
  title: PropTypes.string,
  setOpen: PropTypes.func,
};

export default ModalHeader;
