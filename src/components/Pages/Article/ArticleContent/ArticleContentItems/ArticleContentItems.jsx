import React from 'react';
import PropTypes from 'prop-types';
import { gsap, Power2 } from 'gsap';
import { ThemeContext } from '../../../../../context/ThemeProvider';
import { useLanguage } from '../../../../../hooks/useLanguage';
import {
  ArticleDefaultList,
  ArticleDefaultText,
  ArticleDefaultTitle,
  ArticleDefaultTitleList,
  ArticleDefaultTitleText,
} from '../../../../Ui/ArticleDefault/ArticleDefault';
import ArticleGallery from '../../../../Ui/ArticleDefault/ArticleGallery';
import ArticleLandscapeImage from '../../../../Ui/ArticleDefault/ArticleLandscapeImage';

import ArticlePlayer from '../../../../Ui/ArticleDefault/ArticlePlayer/ArticlePlayer';
import ImageCopy from '../../../../Ui/ArticleDefault/ImageCopy'

const ArticleContentItems = ({ items }) => {
console.log(items);
  const { themeMode, loaderMode } = React.useContext(ThemeContext);

  const time = loaderMode === false ? 9 : 1.8;

  const [tl] = React.useState(gsap.timeline({ paused: false }));
  React.useEffect(() => {
    tl.to('.article-content__items', 1.2, {
      opacity: 1,
      // y: 0,
      ease: Power2.easeOut,
      delay: time,
    });
  }, [tl, time]);

  const langToggle = useLanguage;
  return (
    <>
      <div
        className={
          themeMode === true
            ? 'article-content__items is-light'
            : 'article-content__items'
        }
      >
        {items.map((item, index) => {
          if (item.strapi_component === 'title-text.title-text') {
            return (
              <ArticleDefaultTitleText
                key={index}
                title={langToggle(item.title_ua, item.title_ru, item.title_en)}
                description={langToggle(
                  item.text_ua,
                  item.text_fr,
                  item.text_en
                )}
              />
            );
          } else if (item.strapi_component === 'title.title') {
            return (
              <ArticleDefaultTitle
                key={index}
                title={langToggle(item.title_ua, item.title_ru, item.title_en)}
              />
            );
          } else if (item.strapi_component === 'text.text') {
            return (
              <ArticleDefaultText
                key={index}
                description={langToggle(
                  item.text_ua,
                  item.text_fr,
                  item.text_en
                )}
              />
            );
          } else if (item.strapi_component === 'title-list.title-list') {
            return (
              <ArticleDefaultTitleList
                key={index}
                title={langToggle(item.title_ua, item.title_ru, item.title_en)}
                list={item.list_items}
              />
            );
          } else if (item.strapi_component === 'list.list') {
            return <ArticleDefaultList key={index} list={item.list_items} />;
          } else if (item.strapi_component === 'video.video') {
            return <ArticlePlayer key={index} link={item.link} />;
          } else if (
            item.strapi_component === 'landscape-image.landscape-image'
          ) {
            return <ArticleLandscapeImage key={index} imgDynamic={item.image} />;
          } else if (item.strapi_component === 'gallery.gallery') {
            return <ArticleGallery key={index} images={item.images} />;
          }  else if (item.strapi_component === 'article-copyright.article-copyright') {
            return <ImageCopy key={index} imageCopy={item} />;
          } 
          else {
            return null;
          }
        })}
      </div>
    </>
  );
};

ArticleContentItems.defaultProps = {
  items: [],
};

ArticleContentItems.propTypes = {
  items: PropTypes.array,
};

export default ArticleContentItems;
