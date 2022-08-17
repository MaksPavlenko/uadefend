import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import { scroller } from 'react-scroll';
import { gsap, Power2 } from 'gsap';
import { ThemeContext } from '../../../../context/ThemeProvider';
import CatalogItemDefault from '../../../Ui/CatalogItemDefault/CatalogItemDefault';

import Prev from '../../../../svg/arrow-left.svg';
import Next from '../../../../svg/arrow-right.svg';

const RoundsCatalogItems = ({ catalogData, toggle }) => {
  const { loaderMode } = React.useContext(ThemeContext);
  const time = loaderMode === false ? 9 : 1.8;

  const updatePrice = () => {
    fetch("https://api.uadefend.com/donate/getRounds", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    
    })
      .then((res) => res.json())
      .then((result) => {
        const updateRounds = result
        catalogData.map(oldRound=>{
          updateRounds.map(newRound=>{
            if(oldRound.slug === newRound.slug) {
              oldRound.current_price = newRound.current_price        
            }
          })
        })
      })
  }

  React.useEffect(()=>{
    updatePrice()
    setInterval(updatePrice,9000)
  },[])


  const [tl] = React.useState(gsap.timeline({ paused: false }));
  React.useEffect(() => {
    tl.to('.catalog-items', 1.2, {
      opacity: 1,
      y: 0,
      ease: Power2.easeOut,
      delay: time,
    });
  }, [tl, time]);

  const [pageNumber, setPageNumber] = React.useState(0);

  const articlesPerPage = 12;
  const pagesVisited = pageNumber * articlesPerPage;

  const itemsArr = catalogData.length;

  const displayArticles = catalogData
    .slice(pagesVisited, pagesVisited + articlesPerPage)
    .map((rounds, index) => {
      return (
        <>
          <div className="rounds-item__wrapper" key={index}>
            <CatalogItemDefault
              rounds={rounds}
              slug={rounds.slug}
              toggle={toggle}
            />
          </div>
        </>
      );
    });

  const pageCount = Math.ceil(catalogData.length / articlesPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
    scroller.scrollTo('top-section', {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <>
      <div
        className={
          toggle ? 'catalog-items catalog-items__list' : 'catalog-items'
        }
      >
        {itemsArr % 2 !== 0 ? (
          <>
            {displayArticles}
            <div className="rounds-item__wrapper rounds-item__wrapper--odd">
              <div
                className={
                  toggle
                    ? 'item-default__wrapper item-default__wrapper--list'
                    : 'item-default__wrapper'
                }
              ></div>
            </div>
          </>
        ) : (
          displayArticles
        )}
      </div>
      {catalogData.length >= 12 && (
        <div className="media-catalog__pagination--wrapper">
          <ReactPaginate
            previousLabel={<Prev />}
            nextLabel={<Next />}
            pageCount={pageCount}
            breakLabel={'...'}
            breakClassName={'pagination__break'}
            breakLinkClassName={'pagination__break-link'}
            onPageChange={changePage}
            containerClassName={'pagination'}
            pageClassName={'pagination__item'}
            pageLinkClassName={'pagination__link'}
            activeClassName={'pagination__item--active'}
            activeLinkClassName={'pagination__link--active'}
            previousClassName={'pagination__previous'}
            nextClassName={'pagination__next'}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
          />
        </div>
      )}
    </>
  );
};

RoundsCatalogItems.defaultProps = {
  catalogData: [],
};

RoundsCatalogItems.propTypes = {
  catalogData: PropTypes.array,
  toggle: PropTypes.bool,
};

export default RoundsCatalogItems;
