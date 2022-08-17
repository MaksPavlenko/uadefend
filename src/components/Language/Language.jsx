import React from 'react';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';

const Language = () => {
  const { languages, originalPath } = useI18next();
  return (
    <ul className="language">
      {languages.map((lng) => (
        <li key={lng} className="language-item">
          <Link
            className="language-item__link"
            to={originalPath}
            language={lng}
          >
            <span className="language-item__title">{lng}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Language;
