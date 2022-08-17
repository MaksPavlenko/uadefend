import React from 'react';
import PropTypes from 'prop-types';
import VideoSmCover from './VideoSmCover/VideoSmCover';
const VideoModal = React.lazy(() => import('./VideoModal/VideoModal'));

const VideoSm = ({ cover, link }) => {
  const isSSR = typeof window === 'undefined';
  const [open, setOpen] = React.useState(false);
  const [play, setPlay] = React.useState(false);

  React.useEffect(() => {
    open
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'visible');
  }, [open]);

  function playVideo() {
    setOpen(true);
    setTimeout(() => {
      setPlay((play) => true);
    }, 3000);
  }

  function stopReel() {
    setOpen(false);
    setPlay(false);
  }

  return (
    <>
      <VideoSmCover cover={cover} playVideo={playVideo} />
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <VideoModal
            open={open}
            play={play}
            stopVideo={stopReel}
            video={link}
          />
        </React.Suspense>
      )}
    </>
  );
};

VideoSm.propTypes = {
  cover: PropTypes.object,
  link: PropTypes.string,
};

export default VideoSm;
