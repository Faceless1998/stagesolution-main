import React from "react";
import Photo from './../../assets/business-img.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";


const Insideinfo = () => {
  return (
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
  );
};

export default Insideinfo;
