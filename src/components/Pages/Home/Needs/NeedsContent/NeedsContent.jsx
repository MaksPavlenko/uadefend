import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../../hooks/useLanguage';
import { getImage } from 'gatsby-plugin-image';
import {
  NeedsSectionContainer,
  NeedsSectionFull,
} from '../../../../Ui/NeedsSectionFull/NeedsSectionFull';

const NeedsContent = ({ needsData }) => {
  const langToggle = useLanguage;

  return (
    <NeedsSectionContainer>
      {needsData.map((item, index) => {
         const image = getImage(item.icon.localFile);
        return (
          <NeedsSectionFull
            key={index}
            icon={image}
            title={langToggle(item.title_ua, item.title_fr, item.title_en)}
            description={langToggle(
              item.description_ua,
              item.description_fr,
              item.description_en
            )}
          />
        );
      })}
    </NeedsSectionContainer>
  );
};

NeedsContent.propTypes = {
  needsData: PropTypes.array,
};

export default NeedsContent;
