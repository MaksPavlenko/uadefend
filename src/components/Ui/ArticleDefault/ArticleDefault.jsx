import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../hooks/useLanguage';
import { gsap, Power2 } from 'gsap';
import { ThemeContext } from '../../../context/ThemeProvider';
import ReactMarkdown from 'react-markdown';

export const ArticleDefaultTitle = ({ title }) => {
  const { loaderMode } = React.useContext(ThemeContext);
  const time = loaderMode === false ? 9 : 1.8;
  const [tl] = React.useState(gsap.timeline({ paused: false }));

  React.useEffect(() => {
    tl.to('.load-faid', 1.2, {
      opacity: 1,
      y: 0,
      ease: Power2.easeOut,
      delay: time,
    });
  }, [tl, time]);
  return (
    <div className="default-article__wrapper load-faid">
      <h3 className="default-article__title">{title}</h3>
    </div>
  );
};

export const ArticleDefaultTitleText = ({ title, description, cls }) => {
  const { loaderMode } = React.useContext(ThemeContext);
  const time = loaderMode === false ? 9 : 1.8;
  const [tl] = React.useState(gsap.timeline({ paused: false }));

  React.useEffect(() => {
    tl.to('.load-faid', 1.2, {
      opacity: 1,
      y: 0,
      ease: Power2.easeOut,
      delay: time,
    });
  }, [tl, time]);
  return (
    <div
      className={
        cls === true
          ? 'default-article__wrapper load-faid default-article__wrapper--sm'
          : 'default-article__wrapper load-faid'
      }
    >
      <h3 className="default-article__title">{title}</h3>
      <ReactMarkdown
        source={description}
        className="default-article__description uno-margin"
      />
    </div>
  );
};

export const ArticleDefaultText = ({ description }) => {
  const { loaderMode } = React.useContext(ThemeContext);
  const time = loaderMode === false ? 9 : 1.8;
  const [tl] = React.useState(gsap.timeline({ paused: false }));

  React.useEffect(() => {
    tl.to('.load-faid', 1.2, {
      opacity: 1,
      y: 0,
      ease: Power2.easeOut,
      delay: time,
    });
  }, [tl, time]);
  return (
    <div className="default-article__wrapper load-faid">
      <ReactMarkdown
        source={description}
        className="default-article__description"
      />
    </div>
  );
};

export const ArticleDefaultTitleList = ({ title, list }) => {
  const langToggle = useLanguage;
  const { loaderMode } = React.useContext(ThemeContext);
  const time = loaderMode === false ? 9 : 1.8;
  const [tl] = React.useState(gsap.timeline({ paused: false }));

  React.useEffect(() => {
    tl.to('.load-faid', 1.2, {
      opacity: 1,
      y: 0,
      ease: Power2.easeOut,
      delay: time,
    });
  }, [tl, time]);
  return (
    <div className="default-article__wrapper load-faid">
      <h3 className="default-article__title">{title}</h3>
      <ul className="default-article__list uno-margin">
        {list.map((item, index) => {
          return (
            <li className="default-article__list--item" key={index}>
              <p className="article-list__item--title">
                {langToggle(item.title_ua, item.title_ru, item.title_en)}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const ArticleDefaultList = ({ list }) => {
  const langToggle = useLanguage;
  const { loaderMode } = React.useContext(ThemeContext);
  const time = loaderMode === false ? 9 : 1.8;
  const [tl] = React.useState(gsap.timeline({ paused: false }));

  React.useEffect(() => {
    tl.to('.load-faid', 1.2, {
      opacity: 1,
      y: 0,
      ease: Power2.easeOut,
      delay: time,
    });
  }, [tl, time]);
  return (
    <div className="default-article__wrapper load-faid">
      <ul className="default-article__list">
        {list.map((item, index) => {
          return (
            <li className="default-article__list--item" key={index}>
              <p className="article-list__item--title">
                {langToggle(item.title_ua, item.title_ru, item.title_en)}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ArticleDefaultList.defaultProps = {
  list: [],
};

ArticleDefaultList.propTypes = {
  list: PropTypes.array,
};

ArticleDefaultTitleList.defaultProps = {
  list: [],
};

ArticleDefaultTitleList.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
};

ArticleDefaultTitle.propTypes = {
  title: PropTypes.string,
};

ArticleDefaultTitleText.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  cls: PropTypes.bool,
};

ArticleDefaultText.propTypes = {
  description: PropTypes.string,
};
