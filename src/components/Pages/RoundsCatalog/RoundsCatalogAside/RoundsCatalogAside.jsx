import React from 'react';
import { useLanguage } from '../../../../hooks/useLanguage';
import { I18nContext } from 'gatsby-plugin-react-i18next';
import { useContext } from 'react';
import { scroller } from 'react-scroll';
import PropTypes from 'prop-types';

import Filter from '../../../../svg/filter.svg';

const RoundsCatalogAside = ({ catalogData, setCatalog }) => {
  const filterItems = [
    {
      title_ua: 'Відкриті раунди',
      title_fr: 'Tours ouverts',
      title_en: 'Open rounds',
      status: 'open',
    },
    {
      title_ua: 'Закриті раунди',
      title_fr: 'Tours fermés',
      title_en: 'Closed rounds',
      status: 'closed',
    },
    {
      title_ua: 'Соціальна допомога',
      title_fr: 'Assistance sociale',
      title_en: 'Social assistance',
    },
    {
      title_ua: 'Допомога армії',
      title_fr: "Aidez l'armée",
      title_en: 'Help the army',
    },
  ];

  const langToggle = useLanguage;
  const {
    i18n: { language },
  } = useContext(I18nContext);

  const [select, setSelect] = React.useState(null);
  const [openFilter, setOpenFilter] = React.useState(false);

  function scrollToSection() {
    setTimeout(() => {
      scroller.scrollTo('top-section', {
        duration: 500,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    });
  }

  return (
    <div className="rounds-aside">
      <button
        className="filter-button filter-button__toggle"
        onClick={() => setOpenFilter(!openFilter)}
      >
        <span className="filter-button__title--wrapper">
          <span className="filter-button__title filter-button__title--toggle">
            {useLanguage('Фільтр', 'Filtre', 'Filter')}
          </span>
        </span>
        <span className="filter-button__marker">
          <Filter className="filter-button__icon" />
        </span>
      </button>
      <ul className={openFilter ? 'filter-list is-hidden' : 'filter-list'}>
        <li className="filter-item">
          <button
            className={
              select === null ? 'filter-button is-active' : 'filter-button'
            }
            onClick={() => {
              setSelect(() => null);
              setCatalog(catalogData);
              scrollToSection();
              setOpenFilter(false);
            }}
          >
            <span className="filter-button__title--wrapper">
              <span className="filter-button__title">
                {langToggle('Усі раунди', 'Tous les tours', 'All rounds')}
              </span>
            </span>
            <span className="filter-button__marker">
              <span className="filter-button__marker--check"></span>
            </span>
          </button>
        </li>
        {filterItems.map((item, index) => {
          if (item.status) {
            return (
              <li className="filter-item" key={index}>
                <button
                  className={
                    select === index
                      ? 'filter-button is-active'
                      : 'filter-button'
                  }
                  onClick={(e) => {
                    setSelect(() => index);
                    setCatalog(
                      catalogData.filter((itm) => {
                        return (
                          itm.status
                            .toString()
                            .indexOf(item.status.toString()) > -1
                        );
                      })
                    );
                    scrollToSection();
                    setOpenFilter(false);
                  }}
                >
                  <span className="filter-button__title--wrapper">
                    <span className="filter-button__title">
                      {langToggle(item.title_ua, item.title_fr, item.title_en)}
                    </span>
                  </span>
                  <span className="filter-button__marker">
                    <span className="filter-button__marker--check"></span>
                  </span>
                </button>
              </li>
            );
          } else {
            return (
              <li className="filter-item" key={index}>
                <button
                  className={
                    select === index
                      ? 'filter-button is-active'
                      : 'filter-button'
                  }
                  onClick={(e) => {
                    setSelect(() => index);
                    setCatalog(
                      catalogData.filter((itm) => {
                        if (language === 'ua') {
                          return (
                            itm.filter_category.category_ua
                              .toLowerCase()
                              .indexOf(item.title_ua.toLowerCase()) > -1
                          );
                        } else if (language === 'fr') {
                          return (
                            itm.filter_category.category_fr
                              .toLowerCase()
                              .indexOf(item.title_fr.toLowerCase()) > -1
                          );
                        } else {
                          return (
                            itm.filter_category.category_en
                              .toLowerCase()
                              .indexOf(item.title_en.toLowerCase()) > -1
                          );
                        }
                      })
                    );
                    scrollToSection();
                    setOpenFilter(false);
                  }}
                >
                  <span className="filter-button__title--wrapper">
                    <span className="filter-button__title">
                      {langToggle(item.title_ua, item.title_fr, item.title_en)}
                    </span>
                  </span>

                  <span className="filter-button__marker">
                    <span className="filter-button__marker--check"></span>
                  </span>
                </button>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

RoundsCatalogAside.propTypes = {
  catalogData: PropTypes.array,
  setCatalog: PropTypes.func,
};

export default RoundsCatalogAside;
