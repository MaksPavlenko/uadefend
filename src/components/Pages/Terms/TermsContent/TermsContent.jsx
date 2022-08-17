import React from 'react';

// import PropTypes from 'prop-types';
import AsideDefault from '../../../Ui/AsideDefault/AsideDefault';
import { GridContainer, Column } from '../../../Ui/StandartGrid/StandartGrid';
import TermsAside from './TermsAside/TermsAside';
import LightBox from '../../../Ui/LightBox/LightBox';
import TermsItems from './TermsItems/TermsItems';

const TermsContent = ({ contentData }) => {
  // console.log(contentData.sidebar);

  const images = contentData.sidebar;

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
      <div className="terms-content__wrapper">
        <GridContainer classes={'is-reverse'}>
          <Column>
            <AsideDefault offsetTop={140}>
              <TermsAside images={images} handleClick={handleClick} />
            </AsideDefault>
          </Column>
          <Column>
            <TermsItems contentData={contentData} />
          </Column>
        </GridContainer>
      </div>
      {showLightbox && (
        <LightBox
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

// TermsContent.propTypes = {};

export default TermsContent;
