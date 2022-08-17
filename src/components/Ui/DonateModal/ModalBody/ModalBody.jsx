import React from 'react';
import { useLanguage } from '../../../../hooks/useLanguage';
// import PropTypes from 'prop-types';
import {
  ModalInput,
  ModalPaymantInput,
  ModalSubmitInput,
  ModalPhoneInput,
} from './ModalInput/ModalInput';

const ModalBody = ({
  payHandler,
  price,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  phone,
  setPhone,
  mail,
  setMail,
  mainData,
  mode,
  setMode,
}) => {
  
  const changeFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const changeLastName = (e) => {
    setLastName(e.target.value)
  }

  const changeMail = (e) => {
    setMail(e.target.value)
  }

  // const changeTel = () => {
  //   setPhone   
  //   payHandler()
  // }

  return (
    <>
      <ModalInput
        label={useLanguage("ім'я:", 'nom:', 'name:')}
        type={'text'}
        name={'sender_first_name'}
        placeholder={useLanguage(
          "Введіть ваше ім'я",
          'Entrez votre nom',
          'Enter your name'
        )}
        value={firstName}
        change={changeFirstName}

        mode={mode}
      />
      <ModalInput
        label={useLanguage('призвіще:', 'nom de famille:', 'last name:')}
        type={'text'}
        name={'sender_last_name'}
        placeholder={useLanguage(
          'Введіть ваше призвіще',
          'Entrez votre nom de famille',
          'Enter your last name'
        )}
        value={lastName}
        change={changeLastName}
        mode={mode}
      />
      
      <ModalPhoneInput
        country={useLanguage('ua', 'fr', 'fr')}
        label={useLanguage('Телефон:', 'Téléphoner:', 'Phone:')}
        value={phone}
        change={setPhone}
        mode={mode}
      />

      <ModalInput
        label={'e-mail'}
        type={'email'}
        name={'Email'}
        placeholder={useLanguage(
          'Введіть ваш e-mail',
          'Entrer votre Email',
          'Enter your e-mail'
        )}
        value={mail}
        change={changeMail}
        mode={mode}
      />
      <ModalPaymantInput
        label={useLanguage(
          'Спосіб оплати:',
          'Mode de paiement:',
          'Payment method:'
        )}
        title={useLanguage(
          'всі способи оплати',
          'tous les modes de paiement',
          'all payment methods'
        )}
        mainData={mainData}
      />
      <ModalSubmitInput
        label={useLanguage('Сума:', 'Somme:', 'Total:')}
        price={price}
        payHandler={payHandler}
        title={useLanguage('Зробити внесок', 'Contribuer', 'To contribute')}
        mode={mode}
        setMode={setMode}
      />
    </>
  );
};

// ModalBody.propTypes = {};

export default ModalBody;
