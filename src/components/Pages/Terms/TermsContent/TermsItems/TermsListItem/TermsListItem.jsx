import React from 'react';
import PropTypes from 'prop-types';
import { gsap, Power2 } from 'gsap';
import { ThemeContext } from '../../../../../../context/ThemeProvider';
import { useLanguage } from '../../../../../../hooks/useLanguage';

const TermsListItem = ({item}) => {
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
      <h3 className="default-article__title">
        {langToggle(item.title_ua, item.title_fr, item.title_en)}
      </h3>
      <div className="terms-list">
        {item.items_list.map((item, index) => {
          return (
            <li className="terms-list__items" key={index}>
              <p className="terms-list__item">
                {langToggle(
                  item.items_list_description_ua,
                  item.items_list_description_fr,
                  item.items_list_description_en
                )}
              </p>
            </li>
          );
        })}
      </div>
    </div>
  );
};

TermsListItem.propTypes = {
  item: PropTypes.object,
};

export default TermsListItem;
