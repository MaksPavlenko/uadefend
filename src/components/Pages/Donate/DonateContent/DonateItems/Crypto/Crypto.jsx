import React from 'react';
// import PropTypes from 'prop-types';
import { useLanguage } from '../../../../../../hooks/useLanguage';
import SimpleTitle from '../../../../../Ui/SimpleTitle/SimpleTitle';
import SectionUi from '../../../../../Ui/SectionUi/SectionUi';
import { BankUiCopy, BankUiScan } from '../../../../../Ui/BankUi/BankUi';

import { getImage } from 'gatsby-plugin-image';

const Crypto = ({ item, copy, setCopy }) => {
  const langToggle = useLanguage;

  const image = getImage(item.qr_code.localFile);

  return (
    <SectionUi>
      <SimpleTitle
        title={
          langToggle(
            'Зробити внесок в криптовалюті',
            'Contribuer à la crypto-monnaie',
            'Contribute to cryptocurrency'
          ) + ` ${item.currency}`
        }
      />
      <div className="bank-items__wrapper">
        <BankUiCopy
          title={langToggle('Адреса:', 'Adresse:', 'Address:')}
          value={item.address}
          id={`crypto${item.id + item.address}`}
          copy={copy}
          setCopy={setCopy}
        />
        <BankUiCopy
          title={langToggle('Мережа:', 'Chaîne:', 'Chain:')}
          value={item.chain}
          id={`crypto${item.id + item.chain}`}
          copy={copy}
          setCopy={setCopy}
        />
      </div>
      <BankUiScan
        title={langToggle(
          'Відскануйте код на сторінці зняття у додатку \nторгової платформи або у додатку гаманця',
          "Scannez le code sur la page de retrait dans l'application \nde la plateforme de trading ou dans l'application du portefeuille",
          'Scan the code on the withdrawal page in the \ntrading platform app or in the wallet app'
        )}
        chain={item.chain}
        currency={item.currency}
        qrCode={image}
      />
    </SectionUi>
  );
};

Crypto.propTypes = {};

export default Crypto;
