import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
export const Nav = () => {
  const { t } = useTranslation();
  const changeLanguageHandler = (lang) => {
    localStorage.setItem("lang", lang);
    window.location.reload();
  };
  return (
    <>
    	<header class="header">
		<h1 class="logo"><NavLink to="/">Stage Solution</NavLink></h1>
      <ul class="main-nav">
          <li><NavLink to="/">{t("Home")}</NavLink></li>
          <li><NavLink to="/about">{t("About")}</NavLink></li>
          <li><NavLink to="/portfolio">{t("Portfolio")}</NavLink></li>
          <li><NavLink to="/contact">{t("Contact")}</NavLink></li>
          <li onClick={() => changeLanguageHandler("en")}><NavLink>{t("EN")}</NavLink></li>
          <li onClick={() => changeLanguageHandler("ge")}><NavLink>{t("GE")}</NavLink></li>
      </ul>
	</header> 
    </>
  );
};
