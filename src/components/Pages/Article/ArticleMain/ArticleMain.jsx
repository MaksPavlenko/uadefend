import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../hooks/useLanguage';

import MainDefault from '../../../Ui/MainDefault/MainDefault';

const ArticleMain = ({ mainData }) => {
  const { title_ua, title_fr, title_en } = mainData;

  const langToggle = useLanguage;

  return (
    <MainDefault
      title={useLanguage(title_ua, title_fr, title_en)}
      classes={'article-main__title'}
      column={true}
    >
      <div className="article-main__rite-content">
        <h2 className="article-main__date-title">{mainData.date}</h2>
        <span className="article-main__date-marker">
          {langToggle(
            mainData.blog_category.title_ua,
            mainData.blog_category.title_fr,
            mainData.blog_category.title_en
          )}
        </span>
      </div>
    </MainDefault>
  );
};

ArticleMain.propTypes = {
  mainData: PropTypes.object,
};

export default ArticleMain;
