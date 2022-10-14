import React from "react";
import "./home.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
const Insideservice = () => {
  const { t } = useTranslation();

  return (
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
  );
};

export default Insideservice;
