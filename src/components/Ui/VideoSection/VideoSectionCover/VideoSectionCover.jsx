import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
// import {useLanguage} from '../../../../hooks/useLanguage';
import PropTypes from 'prop-types';

import PlayIcon from '../../../../svg/video_icon.svg';

const VideoSectionCover = ({ playVideo, cover }) => {
  // const langToggle = useLanguage;

  return (
    <section className="video-section section">
      <div
        className="video-section__wrapper"
        onClick={playVideo}
        role="presentation"
      >
        <div className="video-section__cover--wrapper">
          <div className="video-section__cover">
            <GatsbyImage
              className="video-section__cover--image"
              image={cover}
              alt="Rebel Barbershop"
              loading="lazy"
            />
          </div>
        </div>
        <div className="video-section__button">
          <div className="video-section__button--icon">
            <PlayIcon />
          </div>
          <span className="video-section__button--title">Play Video</span>
        </div>
      </div>
    </section>
  );
};

VideoSectionCover.propTypes = {
  playVideo: PropTypes.func,
  cover: PropTypes.object,
};

export default VideoSectionCover;
