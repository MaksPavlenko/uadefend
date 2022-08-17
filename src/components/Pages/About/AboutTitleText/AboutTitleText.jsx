import React from 'react';
import PropTypes from 'prop-types';
import { Column, GridContainer } from '../../../Ui/StandartGrid/StandartGrid';
import AsideDefault from '../../../Ui/AsideDefault/AsideDefault';
import AboutCounter from './AboutCaunter/AboutCaunter';
import AboutAsadeButton from './AboutAsadeButton/AboutAsadeButton';
import AboutContent from './AboutContent/AboutContent';

const AboutTitleText = ({ mainData, aboutData }) => {
  return (
    <section className="about-info__section">
      <GridContainer classes={'is-reverse'}>
        <Column>
          <AsideDefault offsetTop={80}>
            <AboutCounter mainData={mainData} />
            <AboutAsadeButton />
          </AsideDefault>
        </Column>
        <Column>
          <AboutContent aboutData={aboutData} />
        </Column>
      </GridContainer>
    </section>
  );
};

AboutTitleText.propTypes = {
  mainData: PropTypes.object,
};

export default AboutTitleText;
