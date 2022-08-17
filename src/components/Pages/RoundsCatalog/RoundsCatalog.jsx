import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../hooks/useLanguage';
import MainDefault from '../../Ui/MainDefault/MainDefault';
import RoundsCatalogButtons from './RoundsCatalogButtons/RoundsCatalogButtons';
import { Column, GridContainer } from '../../Ui/StandartGrid/StandartGrid';
import RoundsCatalogItems from './RoundsCatalogItems/RoundsCatalogItems';
import AsideDefault from '../../Ui/AsideDefault/AsideDefault';
import RoundsCatalogAside from './RoundsCatalogAside/RoundsCatalogAside';

const RoundsCatalog = ({ roundsData, catalogData }) => {
  const { title_ua, title_fr, title_en } = roundsData;
  const [toggle, setToggle] = React.useState(false);
  const [articles] = React.useState(catalogData.slice(0, 1000));
  const [catalog, setCatalog] = React.useState(articles);

  return (
    <div className="page-roundCatalog">
      <MainDefault title={useLanguage(title_ua, title_fr, title_en)}>
        <RoundsCatalogButtons toggle={toggle} setToggle={setToggle} />
      </MainDefault>
      <div className="rounds-catalog">
        <GridContainer>
          <Column>
            <AsideDefault offsetTop={80}>
              <RoundsCatalogAside
                catalogData={catalogData}
                setCatalog={setCatalog}
              />
            </AsideDefault>
          </Column>
          <Column>
            <RoundsCatalogItems catalogData={catalog} toggle={toggle} />
          </Column>
        </GridContainer>
      </div>
    </div>
  );
};

RoundsCatalog.propTypes = {
  roundsData: PropTypes.object,
  catalogData: PropTypes.array,
};

export default RoundsCatalog;
