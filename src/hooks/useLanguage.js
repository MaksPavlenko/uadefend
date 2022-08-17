import { useContext } from 'react';
import { I18nContext } from 'gatsby-plugin-react-i18next';

export const useLanguage = (ukr, fra, eng) => {
  const {
    i18n: { language },
  } = useContext(I18nContext);

  if (language === 'uk') {
    return ukr;
  } else if (language === 'fr') {
    return fra;
  } else {
    return eng;
  }
};
