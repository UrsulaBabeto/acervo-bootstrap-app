import React from "react";
import "../Banner/Banner.css";

import { useContext } from "react";
import { BannerContext } from "../../contexts/BannerContext";

function Banner() {
  const { banner,setBanner } = useContext(BannerContext);

  return (
   
      <div className=" background text-right p-3">
        <div className="d-flex background-banner flex-column p-3 text-end div-text">
          <h1 className="title-banner p-30">{banner.title}</h1>
          <h3 className="subtitle-banner p-50">{banner.subtitle}</h3>
          <h6 className="p-70 opening-hours">{banner.openingHours}</h6>
        </div>
      </div>
  );
}

export default Banner;
