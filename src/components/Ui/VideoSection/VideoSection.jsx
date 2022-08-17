import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

import VideoSectionCover from './VideoSectionCover/VideoSectionCover';
const VideoModal = React.lazy(() => import('./VideoModal/VideoModal'));

const VideoSection = ({ videoData }) => {
  const data = useStaticQuery(graphql`
    query {
      desctopVideoCover: file(relativePath: { eq: "video_cover.jpeg" }) {
        childImageSharp {
          gatsbyImageData(
            breakpoints: [576, 768, 992, 1200, 1920]
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            layout: FULL_WIDTH
          )
        }
      }
    }
  `);

  const image = getImage(data.desctopVideoCover.childImageSharp);
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

  function stopVideo() {
    setOpen(false);
    setPlay(false);
  }

  return (
    <>
      <VideoSectionCover playVideo={playVideo} cover={image} />
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <VideoModal
            open={open}
            play={play}
            stopVideo={stopVideo}
            video={videoData.video_link}
            // ref={videoRef}
          />
        </React.Suspense>
      )}
    </>
  );
};

VideoSection.propTypes = {
  videoData: PropTypes.object,
};

export default VideoSection;
