import React from 'react';
import ReactPlayer from 'react-player';
import { gsap, Power2 } from 'gsap';
import { ThemeContext } from '../../../../context/ThemeProvider';
import useIntersectionObserver from '@react-hook/intersection-observer';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';

const ArticlePlayer = ({ link }) => {
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

  const containerRef = React.useRef();
  const lockRef = React.useRef(false);
  const { isIntersecting } = useIntersectionObserver(containerRef);
  if (isIntersecting) {
    lockRef.current = true;
  }

  return (
    <div className="default-article__wrapper load-faid">
      <div className="default-article__player--wrapper" ref={containerRef}>
        {lockRef.current && (
          <LazyLoadComponent>
            <ReactPlayer
              className="react-player"
              // playing={play}
              controls={true}
              url={link}
              width="100%"
              height="100%"
              config={{
                youtube: {
                  playerVars: { origin: 'http://localhost:8000' },
                },
              }}
            />
          </LazyLoadComponent>
        )}
      </div>
    </div>
  );
};

ArticlePlayer.propTypes = {
  link: PropTypes.string,
};

export default ArticlePlayer;
