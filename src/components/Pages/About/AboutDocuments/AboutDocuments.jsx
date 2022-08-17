import React from 'react';
import PropTypes from 'prop-types';
import { gsap, Power2 } from 'gsap';
import { ThemeContext } from '../../../../context/ThemeProvider';
import { useLanguage } from '../../../../hooks/useLanguage';

import SectionHeader from '../../../Ui/SectionHeader/SectionHeader';
import DocumentsIcon from '../../../../svg/documents.svg';
import DefaultSlider from '../../../Ui/DefaultSlider/DefaultSlider';
import GalleryItemDefault from '../../../Ui/GalleryItemDefault/GalleryItemDefault';
import LightBox from '../../../Ui/LightBox/LightBox';
import ButtonUp from '../../../../svg/arrow_up.svg';

const AboutDocuments = ({ docData, imgData }) => {
  const images = imgData;

  const langToggle = useLanguage;

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

  const buttonData = {
    clasButton: 'arrow',
    link: '/rounds-catalog/',
    title: langToggle('Раунди допомоги', "Tournées d'aide", 'Rounds of help'),
    icon: <ButtonUp className="default-button__icon" />,
  };

  const totalCounter =
    images.length <= 9 ? `0${images.length}` : `${images.length}`;

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
      <div className="about-documents load-faid">
        <SectionHeader
          sectionTitle={langToggle(
            docData.title_ua,
            docData.title_fr,
            docData.title_en
          )}
        >
          <DocumentsIcon />
        </SectionHeader>
        <div className="open-round__slider-wrapper">
          <DefaultSlider totalCounter={totalCounter} buttonData={buttonData}>
            {images.map((item, index) => {
              return (
                <div
                  className="round-slide"
                  key={index}
                  onClick={(e) => handleClick(e, index)}
                  role="presentation"
                >
                  <GalleryItemDefault item={item.image} />
                </div>
              );
            })}
          </DefaultSlider>
        </div>
      </div>
      {showLightbox && (
        <LightBox
          img={images[selectedImage].image.localFile}
          dinamicImage={images[selectedImage].image.localFile}
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

AboutDocuments.propTypes = {
  docData: PropTypes.object,
};

export default AboutDocuments;
