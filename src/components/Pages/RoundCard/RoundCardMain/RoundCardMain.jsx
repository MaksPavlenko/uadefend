import React from 'react';
import { gsap, Power2 } from 'gsap';
import { ThemeContext } from '../../../../context/ThemeProvider';
import PropTypes from 'prop-types';

import RoundCardDonnat from './RoundCardDonnat/RoundCardDonnat';
import RoundCardSlider from './RoundCardSlider/RoundCardSlider';
import RoundCardInfo from './RoundCardInfo/RoundCardInfo';
import RoundCardDescr from './RoundCardDescr/RoundCardDescr';
import DonateModal from '../../../Ui/DonateModal/DonateModal';
import LightBox from '../../../Ui/LightBox/LightBox';

const RoundCardMain = ({ mainData, infoData, markerData, descrData }) => {
  const [price, setPrice] = React.useState(
    mainData.donat_price[0].current_price
  );

  const [open, setOpen] = React.useState(false);

  const { loaderMode } = React.useContext(ThemeContext);
  const time = loaderMode === false ? 9 : 1.8;

  const [tl] = React.useState(gsap.timeline({ paused: false }));
  React.useEffect(() => {
    tl.to('.round-card', 1.2, {
      opacity: 1,
      y: 0,
      ease: Power2.easeOut,
      delay: time,
    });
  }, [tl, time]);

  React.useEffect(() => {
    open
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'visible');
  }, [open]);

  const images = mainData.images;

  const [showLightbox, setShowLightbox] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(0);

  function handleClick(e, index) {
    e.preventDefault();
    setShowLightbox(!showLightbox);
    setSelectedImage(index);
  }

  function closeModal() {
    setShowLightbox(false);
    setSelectedImage(0);
  }

  function goBack() {
    setSelectedImage(selectedImage - 1);
  }

  function goForward() {
    setSelectedImage(selectedImage + 1);
  }

  React.useEffect(() => {
    window.addEventListener('keyup', handleKeyUp, false);

    return () => {
      window.removeEventListener('keyup', handleKeyUp, false);
    };
  });

  function handleKeyUp(e) {
    e.preventDefault();
    const { keyCode } = e;
    if (showLightbox) {
      if (keyCode === 37) {
        // Left Arrow Key
        if (selectedImage > 0) {
          setSelectedImage(selectedImage - 1);
        }
      }
      if (keyCode === 39) {
        // Right Arrow Key
        if (selectedImage < images.length - 1) {
          setSelectedImage(selectedImage + 1);
        }
      }
      if (keyCode === 27) {
        // Escape key
        setShowLightbox(false);
      }
    }
  }

  return (
    <>
      <section className="round-card top-section">
        <div className="round-card__header">
          <RoundCardSlider mainData={images} handleClick={handleClick} />
          <RoundCardDonnat
            mainData={mainData}
            price={price}
            setPrice={setPrice}
            setOpen={setOpen}
          />
        </div>
        <div className="round-card__footer">
          <RoundCardInfo infoData={infoData} markerData={markerData} />
          <RoundCardDescr descrData={descrData} />
        </div>
      </section>

      <DonateModal
        setOpen={setOpen}
        open={open}
        price={price}
        mainData={mainData}
      />
      {showLightbox && (
        <LightBox
          img={images[selectedImage].img.localFile}
          dinamicImage={images[selectedImage].img.localFile}
          closeModal={closeModal}
          goBack={goBack}
          goForward={goForward}
          selectedImage={selectedImage}
          images={images}
          showLightbox={showLightbox}
        />
      )}
    </>
  );
};

RoundCardMain.propTypes = {
  mainData: PropTypes.object,
  descrData: PropTypes.object,
  markerData: PropTypes.object,
  infoData: PropTypes.object,
  // catalogData: PropTypes.object
};

export default RoundCardMain;
