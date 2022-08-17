import React from 'react';
import PropTypes from 'prop-types';

import PlayIcon from '../../../../svg/video_icon.svg';

const VideoSmCover = ({ playVideo, cover }) => {
  return (
    <div className="video-sm__cover">
      <div
        className="video-section__cover--wrapper"
        onClick={playVideo}
        role="presentation"
      >
        <div className="video-section__cover">
          {cover && (
            <img src={`http://localhost:1337${cover.cover?.url}`}  className="video-section__cover--image video-sm__cover--image" alt="Rebel Barbershop"
            loading="lazy"/>
           
          )}
        </div>
      </div>
      <div className="video-section__button">
        <div className="video-section__button--border">
          <div className="border">
            <PlayIcon className="play-icon" />
          </div>
        </div>
        {/* <span className="video-section__button--title">Play Video</span> */}
      </div>
    </div>
  );
};

VideoSmCover.propTypes = {
  playVideo: PropTypes.func,
  cover: PropTypes.object,
};

export default VideoSmCover;
