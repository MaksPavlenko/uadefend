import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { scroller } from 'react-scroll';
import { gsap, Power2 } from 'gsap';
import { ThemeContext } from '../../../../context/ThemeProvider';
import BlogItemDefault from './BlogItemDefault/BlogItemDefault';

import Prev from '../../../../svg/arrow-left.svg';
import Next from '../../../../svg/arrow-right.svg';

const BlogItems = ({ articlesData }) => {
  const { loaderMode } = React.useContext(ThemeContext);
  const time = loaderMode === false ? 9 : 1.8;

  const [tl] = React.useState(gsap.timeline({ paused: false }));
  React.useEffect(() => {
    tl.to('.blog-items__wrapper', 1.2, {
      opacity: 1,
      y: 0,
      ease: Power2.easeOut,
      delay: time,
    });
  }, [tl, time]);

  const [articles] = React.useState(articlesData.slice(0, 1000));
  const [pageNumber, setPageNumber] = React.useState(0);

  const itemsArr = articles.length;

  const articlesPerPage = 12;
  const pagesVisited = pageNumber * articlesPerPage;

  const displayArticles = articles
    .slice(pagesVisited, pagesVisited + articlesPerPage)
    .map((item, index) => {
      return <BlogItemDefault key={index} item={item} />;
    });

  const pageCount = Math.ceil(articlesData.length / articlesPerPage);
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
      <div className="blog-items__wrapper">
        {
          itemsArr % 2 !== 0 ? (
            <>
              {displayArticles}
              <div className="blog-item__wrapper"></div>
            </>
          ) : (
            displayArticles
          )

          //  displayArticles
        }
      </div>
      {articlesData.length >= 12 && (
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

BlogItems.propTypes = {
  articlesData: PropTypes.array,
};

export default BlogItems;
