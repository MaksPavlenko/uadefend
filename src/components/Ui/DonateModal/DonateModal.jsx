import React from "react";
import { gsap, Expo, Power2 } from "gsap";
import PropTypes from "prop-types";
import { useLanguage } from "../../../hooks/useLanguage";
import Noise from "../../../images/noise.png";
import NavigationBg from "../../Layout/Header/Navigation/NavigationBg/NavigationBg";
import ModalHeader from "./ModalHeader/ModalHeader";
import ModalBody from "./ModalBody/ModalBody";

const DonateModal = ({ setOpen, open, price, mainData }) => {
  const {
    slug,
    title_ua,
    title_fr,
    title_en,
    // category_ua,
    // category_fr,
    // category_en,
  } = mainData;

  const [tl] = React.useState(gsap.timeline({ paused: false }));

  let navElement = React.useRef(null);
  let waveElement = React.useRef(null);
  let bgElement = React.useRef(null);

  const start = "M 0 100 V 50 Q 50 0 100 50 V 100 z";
  const end = "M 0 100 V 0 Q 50 0 100 0 V 100 z";

  React.useEffect(() => {
    tl.to(navElement, 0.01, {
      pointerEvents: "auto",
      opacity: 1,
      ease: Expo.easeInOut,
    })
      .to(waveElement, 0.6, { attr: { d: start }, ease: Power2.easeIn })
      .to(waveElement, 0.2, { attr: { d: end }, ease: Power2.easeOut })
      .to(bgElement, 0.1, { opacity: 1, ease: Power2.easeOut })
      .to(waveElement, 0.6, { opacity: 0, ease: Power2.easeOut })
      .to(".modal-close__wrapper", 0.6, {
        opacity: 1,
        ease: Power2.easeOut,
        delay: -0.4,
      })
      .to(".modal-title", 0.6, {
        opacity: 1,
        x: 0,
        ease: Power2.easeOut,
        delay: -0.4,
      })
      .staggerTo(
        ".modal-input__wrapper",
        0.6,
        {
          x: 0,
          opacity: 1,
          ease: Power2.easeOut,
          delay: -0.4,
        },
        0.15
      )

      .reverse();
  }, [tl]);

  React.useEffect(() => {
    tl.reversed(!open);
  }, [open, tl]);

  const [mode, setMode] = React.useState(false);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [mail, setMail] = React.useState("");

  const [dat, setDat] = React.useState("");
  const [signature, setSignature] = React.useState("");

  const language = useLanguage("uk", "fr", "en");
  const serviceName = useLanguage(title_ua, title_fr, title_en);
  // const category = useLanguage(category_ua, category_fr, category_en);
  const [isLoaded, setLoaded] = React.useState(false)
  const Form = React.useRef(null)

  const hidden = {
    display: 'none'
  }

  const payHandler = (e) => {
    e.preventDefault()
    fetch("https://api.uadefend.com/donate/liqpay", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender_name:
        mode === false ? firstName + " " + lastName : "Анонімний внесок",
        slug: slug,
        phone: mode === false ? phone : "Анонімний внесок",
        email: mode === false ? mail : "Анонімний внесок",
        amount: price,
        currency: "eur",
        language: language,
        description: serviceName,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        setDat(result.data);
        setSignature(result.signature);
        setLoaded(true)
      });
  };

  React.useEffect(() => {
    if(isLoaded) Form.current.click()
  }, [isLoaded])

  return (
    <div className="modal-wrapper" ref={(e) => (navElement = e)}>
      <div className="main-navigation__bg" ref={(e) => (bgElement = e)}>
        <div
          className="noise"
          style={{ backgroundImage: `url(${Noise})` }}
        ></div>
      </div>
      <NavigationBg ref={(e) => (waveElement = e)} />
      <div className="page-wrapper">
        <div className="modal">
          <ModalHeader
            title={useLanguage(title_ua, title_fr, title_en)}
            setOpen={setOpen}
          />
          <form
            className="modal-form"
            action="https://www.liqpay.ua/api/3/checkout"
          >
            <input type="hidden" name="amount" value={price} />
            <input type="hidden" name="currency" value="eur" />
            <input type="hidden" name="language" value={language} />
            <input type="hidden" name="description" value={serviceName} />
            <input type="hidden" name="data" value={dat} />
            <input type="hidden" name="signature" value={signature} />
            <button style={hidden} ref={Form}></button>
            <ModalBody
              mainData={mainData}
              payHandler={payHandler}
              price={price}
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              phone={phone}
              setPhone={setPhone}
              mail={mail}
              setMail={setMail}
              mode={mode}
              setMode={setMode}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

DonateModal.propTypes = {
  setOpen: PropTypes.func,
  open: PropTypes.bool,
  mainData: PropTypes.object,
  // price: PropTypes.string,
};

export default DonateModal;
