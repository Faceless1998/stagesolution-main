import React from 'react'
import './about.css'

import IMG1 from "./../../assets/photo1.png";

// import { useTranslation } from "react-i18next";

const About = () => {
  // const { t } = useTranslation();
  return (
    <div>
      <div className="single-div" style={{ marginTop: 10 }}>
        <h1
          className="abouttitlewidth2 marginizer  font-bold leading-tight text-center colorizer"
          style={{ textTransform: "capitalize" }}
        >
          CEO
        </h1>
      </div>

      <div className="cardsdep">
        <div className="carddep">
          <div className="container3">
            <div className="carddep">
              <div className="imgBx">
                <img src={IMG1} alt="dennis-ritchie" border={0} />
              </div>
              <div className="contentBx">
                <h2>John <br/> Doe</h2>
                <div className="quote">
                  <h3>CEO</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carddep">
          <div className="container3">
            <div className="carddep">
              <div className="imgBx">
                <img src={IMG1} alt="dennis-ritchie" border={0} />
              </div>
              <div className="contentBx">
              <h2>John <br/> Doe</h2>
                <div className="quote">
                  <h3>CEO</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-div" style={{ marginTop: 10 }}>
        <h1
          className="abouttitlewidth2 marginizer  font-bold leading-tight text-center colorizer"
          style={{ textTransform: "capitalize" }}
        >
          CEO
        </h1>
      </div>

      <div className="cardsdep">
        <div className="carddep">
          <div className="container3">
            <div className="carddep">
              <div className="imgBx">
                <img src={IMG1} alt="dennis-ritchie" border={0} />
              </div>
              <div className="contentBx">
              <h2>John <br/> Doe</h2>
                <div className="quote">
                  <h3>CEO</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carddep">
          <div className="container3">
            <div className="carddep">
              <div className="imgBx">
                <img src={IMG1} alt="dennis-ritchie" border={0} />
              </div>
              <div className="contentBx">
              <h2>John <br/> Doe</h2>
                <div className="quote">
                  <h3>CEO</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carddep">
          <div className="container3">
            <div className="carddep">
              <div className="imgBx">
                <img src={IMG1} alt="dennis-ritchie" border={0} />
              </div>
              <div className="contentBx">
              <h2>John <br/> Doe</h2>
                <div className="quote">
                  <h3>CEO</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About