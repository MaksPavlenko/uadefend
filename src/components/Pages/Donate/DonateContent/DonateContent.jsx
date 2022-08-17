import React from 'react';
import PropTypes from 'prop-types';
import { Column, GridContainer } from '../../../Ui/StandartGrid/StandartGrid';
import AsideDefault from '../../../Ui/AsideDefault/AsideDefault';
import DonateAside from './DonateAside/DonateAside';
import DonateItems from './DonateItems/DonateItems';
const DonateContent = ({ donateData, importantItemData }) => {
  return (
    <div className="article-content__wrapper">
      <GridContainer>
        <Column>
          <AsideDefault offsetTop={140}>
            <DonateAside importantItemData={importantItemData} />
          </AsideDefault>
        </Column>
        <Column>
          <DonateItems donateData={donateData} />
        </Column>
      </GridContainer>
    </div>
  );
};

DonateContent.propTypes = {
  donateData: PropTypes.object,
  importantItemData: PropTypes.object,
  itemData: PropTypes.array,
};

export default DonateContent;
