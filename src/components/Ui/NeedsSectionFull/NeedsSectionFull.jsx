import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const NeedsSectionContainer = ({ children }) => {
  return (
    <div className="needs-content">
      <ul className="needs-items">{children}</ul>
    </div>
  );
};

export const NeedsSectionFull = ({ icon, title, description }) => {
  const image = getImage(icon);

  return (
    // <li className="needs-item hover-needs">
    //   <span className="needs-item__link">
    //     <div className="needs-item__link-wrapper">
    //       <div className="needs-item__link_icon">
    //         <GatsbyImage
    //           className="needs-item__icon-img"
    //           image={image}
    //           alt="icon"
    //           loading="lazy"
    //         />
    //       </div>
    //     </div>
    //     <span className="needs-item__title-wrapper">
    //       <span className="needs-item__title">{title}</span>
    //     </span>
    //     <p className="needs-in__text">{description}</p>
    //   </span>
    // </li>
    <li className="needs-item">
      <div className="needs-item__header">
        <div className="needs-item__icon--wrapper">
          <GatsbyImage
            className="needs-item__icon"
            image={image}
            alt="icon"
            loading="lazy"
          />
        </div>
        <div className="needs-item__title--wrapper">
          <h3 className="needs-item__title">{title}</h3>
        </div>
      </div>
      <div className="needs-item__footer">
        <div className="needs-item__descr--wrapper">
          <p className="needs-item__descr">{description}</p>
        </div>
      </div>
    </li>
  );
};
