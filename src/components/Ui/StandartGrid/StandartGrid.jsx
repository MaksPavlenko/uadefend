import React from 'react';

export const GridContainer = ({ children, classes }) => {
  return <div className={`grid-container ${classes}`}>{children}</div>;
};

export const Column = ({ children }) => {
  return <div className="column">{children}</div>;
};
