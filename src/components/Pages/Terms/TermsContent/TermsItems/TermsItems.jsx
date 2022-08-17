import React from 'react';
import { useLanguage } from '../../../../../hooks/useLanguage';
import { gsap, Power2 } from 'gsap';
import { ThemeContext } from '../../../../../context/ThemeProvider';

import { ArticleDefaultTitleText } from '../../../../Ui/ArticleDefault/ArticleDefault';
import TermsListItem from './TermsListItem/TermsListItem';

const TermsItems = ({ contentData }) => {
  const { introduction, terms } = contentData;

  const { loaderMode } = React.useContext(ThemeContext);

  const time = loaderMode === false ? 9 : 1.8;

  const [tl] = React.useState(gsap.timeline({ paused: false }));
  React.useEffect(() => {
    tl.to('.terms-items__wrapper', 1.2, {
      opacity: 1,
      // y: 0,
      ease: Power2.easeOut,
      delay: time,
    });
  }, [tl, time]);

  return (
    <div className="terms-items__wrapper">
      <ArticleDefaultTitleText
        title={useLanguage(
          introduction.title_ua,
          introduction.title_fr,
          introduction.title_en
        )}
        description={useLanguage(
          introduction.description_ua,
          introduction.description_fr,
          introduction.description_en
        )}
      />
      {terms.map((item, index) => {
        return <TermsListItem item={item} key={index} />;
      })}
    </div>
  );
};

export default TermsItems;
