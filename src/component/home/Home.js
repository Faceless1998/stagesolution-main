import React from 'react'
import { NavLink } from "react-router-dom";

import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faArrowsSpin } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

import Photo from './../../assets/business-img.png'

import { useTranslation } from "react-i18next";

const Home = () => {
	const { t } = useTranslation();

  return (
	<>
	<section id="hero" class="d-flex align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <h1> {t("text1")}</h1>
          <h2> {t("text2")}</h2>
          <div class="d-flex justify-content-center justify-content-lg-start">
            <a href="#about" class="btn-get-started scrollto">Get Started</a>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
        </div>
      </div>
    </div>

  </section>

	<section id="services" class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-xs-12">
            <div class="services-item text-center">
              <div class="icon">
                <i class="fa-regular">
                  <FontAwesomeIcon icon={faMedal} />
                </i>
              </div>
              <h4>{t("quality")}</h4>
              <p>
                {t("Guaranteed quality products")}
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-xs-12">
            <div class="services-item text-center">
              <div class="icon">
                <i class="fa-regular">
                  <FontAwesomeIcon icon={faUsers} />
                </i>
              </div>
              <h4> {t("customers")}</h4>
              <p>
               {t("Loyalty system for regular customers")}
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-xs-12">
            <div class="services-item text-center">
              <div class="icon">
                <i class="fa-regular">
                  <FontAwesomeIcon icon={faTruck} />
                </i>
              </div>
              <h4> {t("delivery")}</h4>
              <p>
               {t("Fast and convenient delivery on time")}
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
	<section id="features" class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="features-text section-header text-center">  
              <div>   
                <h2 class="section-title">Services We Provide</h2>
                <div class="desc-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
              </div> 
            </div>
          </div>

        </div>
        <div class="row featured-bg">
          <div class="col-lg-6 col-md-6 col-xs-12 p-0">
            <div class="feature-item featured-border1">
               <div class="feature-icon float-left">
                 <i class="fa-regular"><FontAwesomeIcon icon={faMugHot} /></i>
               </div>
               <div class="feature-info float-left">
                 <h4>Easy to Customize</h4>
                 <p>Producing long lasting organic SEO results for <br /> brand of different kinds for more than a decade,<br /> we understand that’s your.</p>
               </div>
            </div>
          </div>
          
          <div class="col-lg-6 col-md-6 col-xs-12 p-0">
            <div class="feature-item featured-border2">
               <div class="feature-icon float-left">
                 <i class="fa-regular"><FontAwesomeIcon icon={faSuitcase} /></i>
               </div>
               <div class="feature-info float-left">
                 <h4>Business Template</h4>
                 <p>Producing long lasting organic SEO results for <br /> brand of different kinds for more than a decade,<br /> we understand that’s your.</p>
               </div>
            </div>
          </div>
          
          <div class="col-lg-6 col-md-6 col-xs-12 p-0">
            <div class="feature-item featured-border1">
               <div class="feature-icon float-left">
                 <i class="fa-regular"><FontAwesomeIcon icon={faLightbulb}/></i>
               </div>
               <div class="feature-info float-left">
                 <h4>Clean & Trendy Design</h4>
                 <p>Producing long lasting organic SEO results for <br /> brand of different kinds for more than a decade,<br /> we understand that’s your.</p>
               </div>
            </div>
          </div>
          
          <div class="col-lg-6 col-md-6 col-xs-12 p-0">
            <div class="feature-item featured-border2">
               <div class="feature-icon float-left">
                <i class="fa-regular"><FontAwesomeIcon icon={faLayerGroup} /></i>
               </div>
               <div class="feature-info float-left">
                 <h4>Tons of Sections</h4>
                 <p>Producing long lasting organic SEO results for <br /> brand of different kinds for more than a decade,<br /> we understand that’s your.</p>
               </div>
            </div>
          </div>
          
          <div class="col-lg-6 col-md-6 col-xs-12 p-0">
            <div class="feature-item featured-border3">
               <div class="feature-icon float-left">
                 <i class="fa-regular"><FontAwesomeIcon icon={faArrowsSpin} /></i>
               </div>
               <div class="feature-info float-left">
                 <h4>Free Future Updates</h4>
                 <p>Producing long lasting organic SEO results for <br /> brand of different kinds for more than a decade,<br /> we understand that’s your.</p>
               </div>
            </div>
          </div>
          
          <div class="col-lg-6 col-md-6 col-xs-12 p-0">
            <div class="feature-item">
               <div class="feature-icon float-left">
                 <i class="fa-regular"><FontAwesomeIcon icon={faCircleInfo} /></i>
               </div>
               <div class="feature-info float-left">
                 <h4>Premier Support</h4>
                 <p>Producing long lasting organic SEO results for <br /> brand of different kinds for more than a decade,<br /> we understand that’s your.</p>
               </div>
            </div>
          </div>
          

        </div>
      </div>
    </section>

	<section id="business-plan">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 pl-0 pt-70 pr-5">
            <div class="business-item-img">
              <img
                src={Photo}
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div class="col-lg-6 col-md-12 pl-4">
            <div class="business-item-info">
              <h3>Crafted For Business, Startup and Agency Websites</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do{" "}
                <br /> tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim <br /> veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea <br /> commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate <br /> velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>

              <NavLink class="btn btn-common" >
                download
                </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>

	</>
	
  )
}

export default Home