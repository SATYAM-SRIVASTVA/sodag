import React from "react";

import "./EnoBottle.css";
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
      <div className="bottle-first">
        <div className="bottle-image-cont"></div>
      </div>
      <div className="bottle-second">
        <div className="bottle-second-cont">
          <div className="bottle-card-wrapper">
            <div className="bottle-card-cont row m-0">
              <div class="card">
                <Slider {...settings}>
                  <div>
                    <img
                      src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/nutrition-eno/en_IN/eno-products/eno-bottle-regular.png?auto=format"
                      class="card-img-top card-image"
                      alt="..."
                    />
                  </div>
                  <div>
                    <img
                      src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/nutrition-eno/en_IN/eno-products/eno-bottle-regular.png?auto=format"
                      class="card-img-top card-image"
                      alt="..."
                    />
                  </div>
                  <div>
                    <img
                      src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/nutrition-eno/en_IN/eno-products/eno-bottle-regular.png?auto=format"
                      class="card-img-top card-image"
                      alt="..."
                    />
                  </div>
                </Slider>
                <div class="card-body"></div>
              </div>
              <div class="card">
                <Slider {...settings}>
                  <div>
                    <img
                      src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/nutrition-eno/en_IN/eno-products/eno-bottle-regular.png?auto=format"
                      class="card-img-top card-image"
                      alt="..."
                    />
                  </div>
                  <div>
                    <img
                      src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/nutrition-eno/en_IN/eno-products/eno-bottle-regular.png?auto=format"
                      class="card-img-top card-image"
                      alt="..."
                    />
                  </div>
                  <div>
                    <img
                      src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/nutrition-eno/en_IN/eno-products/eno-bottle-regular.png?auto=format"
                      class="card-img-top card-image"
                      alt="..."
                    />
                  </div>
                </Slider>
                <div class="card-body"></div>
              </div>
            </div>
          </div>
          <div className="bottle-second-text-cont">
            <div className="bottle-second-text-wrap">
              <div className="bottle-second-heading-cont">
                {" "}
                <h1 style={{ color: "#034EA2" }}>How ENO Works?</h1>
              </div>
              <div className="bottle-second-para">
                <h5 style={{ color: "#555555" }}>
                  Eno is an Ayurvedic Proprietary Medicine containing
                  Svarjiksara (Shudh) and Nimbukamlam (Shushkam).
                </h5>
              </div>
              <div className="bottle-columns-cont">
                <div className="bottle-second-first-row row">
                  <div className="bottle-second-first-col col col-lg-6 col-md-12 col-sm-12">
                    <h2 style={{ color: "#034EA2", fontStyle: "italic" }}>
                      Ingredients
                    </h2>
                    <p>
                      Svarjiksara (Shudh), Nimbukamlam (Shushkam). Eno Flavors
                      may also contain appropriate color, flavor and/or sodium
                      saccharine and the same have been indicated on label, as
                      appropriate.
                    </p>
                  </div>
                  <div className="bottle-second-second-col col col-lg-6 col-md-12 col-sm-12">
                    <h2 style={{ color: "#034EA2", fontStyle: "italic" }}>
                      Directions & Dosage
                    </h2>
                    <p>
                      Dissolve one sachet of ENO, or one teaspoon of powder (5
                      gm) in a glass of water (150 ml) and drink up. It is
                      recommended to consume ENO as soon as it has completely
                      dissolved in the water.
                    </p>
                    <p>
                      Eno powder is indicated for adults and children aged 12
                      years and above
                    </p>
                    <p>Minimum dosing interval: 2 hours.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottle-details-cont">
            <details style={{ color: "#034EA2" }}>
                <div className="fruits-li-cont" style={{color:'#555555'}}>
              <li>Do not take this medicine for more than 14 days</li>
              <li>In case of overdose, consult a doctor</li>
              <li>Consult your doctor if symptoms persist or worsen</li>
              <li>
                ENO reduces acidity in your stomach, and may interfere with the
                absorption of other medicines.
              </li>
              <li>Please consult your doctor for possible drug interactions</li>
              <li>Keep out of reach of children</li>
              <li>
                Do not exceed the maximum dose of 2 sachets/teaspoons a day
              </li>
              <li>
                If you’re pregnant or breastfeeding, consult your doctor before
                taking ENO
              </li>
              <li>
                ENO may cause belching, gas, abdominal distension, and mild
                gastrointestinal irritation
              </li>
              <li>
                Do not take ENO if you have any of the following conditions:
                High blood pressure, Liver, heart and kidney problems, On a
                low-sodium diet, Allergic to any ingredients in ENO
              </li>
              <li>Read label for additional information before using ENO</li>
              </div>
            </details>
          </div>
        </div>
      </div>
      <div className="bottle-third">
        <div className="bottle-third-image">
          <div className="bottle-third-image-cont">
            <img
              src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/nutrition-eno/en_IN/eno-products/product-details/desktop/related-product-img1.png?auto=format"
              alt=""
            />
            <img
              src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/nutrition-eno/en_IN/eno-products/product-details/desktop/related-product-img2.png?auto=format"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skew;