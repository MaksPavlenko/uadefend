import React from "react";
import PropTypes from "prop-types";
import { useLanguage } from "../../../../../../hooks/useLanguage";

const DonnatHeader = ({ mainData }) => {
  const {
    slug,
    title_ua,
    title_fr,
    title_en,
    current_price,
    total_price,
    status,
  } = mainData;

  const [sum, setSum] = React.useState(current_price);

  const percent = Math.round((sum * 100) / total_price);

  const langToggle = useLanguage;

  const updatePrice = (() => {
    fetch("https://api.uadefend.com/donate/getAmount", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        slug: slug,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        setSum(result);
      });
  })


  React.useEffect(() => {
     updatePrice()
    setInterval(() => {
      updatePrice()
    }, 9000);
  },[])


  return (
    <>
      <p className="roundCard-donat__marker">
        {status === "open"
          ? langToggle("Відкритий раунд", "Tour ouvert", "Open round")
          : langToggle("Закритий раунд", "Ronde fermée", "Closed round")}{" "}
      </p>

      <h1 className="roundCard-donat__title">
        {useLanguage(title_ua, title_fr, title_en)}
      </h1>
      <div className="item-default__price--container">
        <div className="item-default__price">
          <span className="item-default__price--current">
            {sum}
            <span className="currency"> €</span>
          </span>
          <span className="item-default__price--separator">
            &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span className="item-default__price--total">
            {total_price}
            <span className="currency"> €</span>
          </span>
        </div>
        <span className="item-default__price--percent">{percent + "%"}</span>
      </div>
      <div className="item-default__line">
        <div className="item-default__line--total"></div>
        <div
          className="item-default__line--current"
          style={{ width: `${percent <= 100 ? percent : 100}%` }}
        ></div>
      </div>
    </>
  );
};

DonnatHeader.propTypes = {
  mainData: PropTypes.object,
};

export default DonnatHeader;
