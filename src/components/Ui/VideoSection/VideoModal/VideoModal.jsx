import React from 'react';
import ReactPlayer from 'react-player';
import useIntersectionObserver from '@react-hook/intersection-observer';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { gsap, Expo } from 'gsap';
import PropTypes from 'prop-types';
import CloseIcon from '../../../../svg/close.svg';

const VideoModal = ({ stopVideo, play, open, video }) => {
  const [tl] = React.useState(gsap.timeline({ paused: true }));

  let popUp = React.useRef(null);
  let white = React.useRef(null);
  let black = React.useRef(null);

  React.useEffect(() => {
    tl.to(popUp, 0.01, {
      pointerEvents: 'auto',
      opacity: 1,
      ease: Expo.easeInOut,
    })
      .to(popUp, 0.7, { y: 0, ease: Expo.easeInOut })
      .to(white, 1.8, { x: '-100%', ease: Expo.easeInOut })
      .to(black, 1.2, { x: '-100%', ease: Expo.easeInOut, delay: -0.5 })
      .reverse();
  }, [tl]);

  React.useEffect(() => {
    tl.reversed(!open);
  }, [open, tl]);

  const containerRef = React.useRef();
  const lockRef = React.useRef(false);
  const { isIntersecting } = useIntersectionObserver(containerRef);
  if (isIntersecting) {
    lockRef.current = true;
  }

  return (
    <section
      className={!open ? 'video-modal' : 'video-modal is-open'}
      ref={(e) => (popUp = e)}
    >
      <div className="video-modal__wrapper" ref={containerRef}>
        <div className="react-player__wrapper">
          {lockRef.current && (
            <LazyLoadComponent>
              <ReactPlayer
                className="react-player"
                playing={play}
                controls={true}
                url={video}
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

          <div
            className="react-player__wrapper-black"
            ref={(e) => (black = e)}
          ></div>
          <div
            className="react-player__wrapper-white"
            ref={(e) => (white = e)}
          ></div>
        </div>
        <button
          className="popup-close__button"
          onClick={stopVideo}
          aria-label="close video"
        >
          <span className="popup-close__button-icon">
            <CloseIcon />
          </span>
        </button>
      </div>
    </section>
  );
};

VideoModal.propTypes = {
  stopVideo: PropTypes.func,
  play: PropTypes.bool,
  open: PropTypes.bool,
  video: PropTypes.string,
};

export default VideoModal;
