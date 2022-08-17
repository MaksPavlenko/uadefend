import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../../hooks/useLanguage';

// import ArrUp from '../../../../../svg/arrow_right_top-footer.svg';

const FooterAdress = ({ adressData }) => {
  const langToggle = useLanguage;

  return (
    <div className="footer-left__adress-wrapper">
      <div className="footer-left__adress-content">
        <ul className="button-map">
          {adressData.adress_item.map((item, index) => {
            return (
              <li className="item-adress" key={index}>
                <a
                  href="https://goo.gl/maps/fzz3jn2F6KrfTRtb9"
                  target="blank"
                  className="map-link"
                >
                  <div className="button-map__adress-top">
                    {langToggle(item.adress_ua, item.adress_fr, item.adress_en)}
                  </div>
                </a>
              </li>
            );
          })}

          {/* <div className="button-map__adress">
            {langToggle(
              adressData.map_ua,
              adressData.map_fr,
              adressData.map_en
            )}
            <div className="arr">
              <ArrUp className="arr-up" />
            </div>
          </div> */}
        </ul>
      </div>
    </div>
  );
};

FooterAdress.propTypes = {
  adressData: PropTypes.object,
};

export default FooterAdress;
