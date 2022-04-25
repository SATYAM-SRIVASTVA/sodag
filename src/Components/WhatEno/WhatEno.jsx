import React from "react";

import "./WhatEno.css";
import Slider from "react-slick/lib/slider";
const Skew = () => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="Skew">
      <div className="eno-first">
        <div className="eno-image-cont"></div>
      </div>
      <div className="eno-second">
        <div className="eno-icon-cont-wrap">
          <img
            src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/nutrition-eno/en_IN/discover-eno/discover-what/desktop/Discover_Icon_Whats.png?auto=format"
            alt=""
          />
          <img
            src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/nutrition-eno/en_IN/discover-eno/discover-what/desktop/Discover_Icon_The.png?auto=format"
            alt=""
          />
        </div>
        <div className="eno-second-para">
          <p>
            When you are living life to the fullest, the last thing you want to
            worry about is acidity. Don’t hold yourself back. Say no to
            heartburn with ENO.
          </p>
          <p>
            ENO Fruit Salt contains Svarjiksara (Shudh) and Nimbukamlam
            (Shushkam), which neutralizes stomach acid on contact. ENO Fruit
            Salt gets to work faster than leading liquid and tablet antacids.¹
            In fact ENO gets to work in just 6 seconds.²
          </p>
        </div>
      </div>
      <div className="eno-third">
        <div className="eno-third-image">
          <div className="eno-third-image-cont"></div>
        </div>
      </div>
    </div>
  );
};

export default Skew;
