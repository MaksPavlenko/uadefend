import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../../../hooks/useLanguage';
import ButtonDonnatHeart from '../../../../../../svg/heart.svg';
import ButtonUp from '../../../../../../svg/arrow_up.svg';

const DonnatFooter = ({ mainData, setPrice, price, setOpen }) => {
  const langToggle = useLanguage;
  const [active, setActive] = React.useState(null);

  return (
    <div className="donat-footer">
      {mainData.status === 'open' ? (
        <>
          <div className="donat-footer__items-wrapper">
            <ul className="donat-footer__items">
              {mainData.donat_price.map((item, index) => {
                if (index === 0) {
                  return (
                    <li className="donat-footer__item" key={index}>
                      <button
                        className={
                          active === null
                            ? 'donat-button is-active'
                            : 'donat-button'
                        }
                        onClick={() => {
                          setPrice(item.current_price);
                          setActive(null);
                        }}
                      >
                        {item.current_price + ' €'}
                      </button>
                    </li>
                  );
                } else {
                  return (
                    <li className="donat-footer__item" key={index}>
                      <button
                        className={
                          active === index
                            ? 'donat-button is-active'
                            : 'donat-button'
                        }
                        onClick={() => {
                          setPrice(item.current_price);
                          setActive(index);
                        }}
                      >
                        {item.current_price + ' €'}
                      </button>
                    </li>
                  );
                }
              })}
              <li className="donat-footer__item">
                <input
                  type="number"
                  placeholder={langToggle(
                    'Інша сума',
                    'Un autre montant',
                    'Another amount'
                  )}
                  // value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  onClick={() => setActive('change')}
                  required
                  className={
                    active === 'change'
                      ? 'donat-input is-active'
                      : 'donat-input'
                  }
                />
              </li>
            </ul>
          </div>
          <button
            className="donat-footer__button"
            onClick={() => setOpen(true)}
          >
            <p className="donat-footer__button-title">
              {langToggle('Зробити внесок', 'Contribuer', 'To contribute')}
            </p>
            <ButtonDonnatHeart className="button-ui__icon" />
          </button>
        </>
      ) : (
        <>
          <div className="donat-footer__disable">
            <p>
              {langToggle(
                'На разі, потрібні кошти для даної потреби зібрані. \nДякуємо всім небайдужим хто долучився до цього раунду! \n\nСлава Україні!',
                "Pour le moment, les fonds nécessaires à ce besoin ont été levés. \nMerci à tous ceux qui ont rejoint ce tour ! \n\nGloire à l'Ukraine!",
                'At the moment, the necessary funds for this need have been raised. \n Thank you to everyone who joined this round! \n\nGlory to Ukraine!'
              )}
            </p>
          </div>
          <Link to="/rounds-catalog/" className="donat-footer__button">
            <p className="donat-footer__button-title">
              {langToggle(
                'Повернутись в каталог',
                'Retour au catalogue',
                'Return to catalog'
              )}
            </p>
            <ButtonUp className="button-ui__icon" />
          </Link>
        </>
      )}
    </div>
  );
};

DonnatFooter.propTypes = {
  mainData: PropTypes.object,
  price: PropTypes.string,
  setPrice: PropTypes.func,
  setOpen: PropTypes.func,
};

export default DonnatFooter;
