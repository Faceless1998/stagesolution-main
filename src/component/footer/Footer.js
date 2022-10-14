import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <footer class="footer">
      <div class="container lazyloaded">
        <div class="footer-top lazyloaded">
          <a
            href="
                  /
                "
            class="footer-logo"
          >
            <img
              src="http://thecavision.com/wp-content/themes/thecavision/assets/img/logo.png"
              alt="Logo"
              data-src="http://thecavision.com/wp-content/themes/thecavision/assets/img/logo.png"
              class="footer-logo__img ls-is-cached lazyloaded"
            />
            <noscript>
              <img
                src="http://thecavision.com/wp-content/themes/thecavision/assets/img/logo.png"
                alt="Logo"
                data-eio="l"
                class="footer-logo__img"
              />
            </noscript>
          </a>{" "}
          <div class="footer-links lazyloaded">
            <nav class="footer-nav">
              <ul class="footer-nav__list">
                <li class="footer-nav__item">
                  <a href="/about" class="footer-nav__link">
                    О компании
                  </a>
                </li>
                <li class="footer-nav__item">
                  <a href="/services" class="footer-nav__link">
                    Услуги
                  </a>
                </li>
                <li class="footer-nav__item">
                  <a href="/catalog" class="footer-nav__link">
                    Каталог
                  </a>
                </li>
                <li class="footer-nav__item">
                  <a href="/#brands" class="footer-nav__link">
                    Бренды
                  </a>
                </li>
                <li class="footer-nav__item">
                  <a href="/contacts" class="footer-nav__link">
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>{" "}
            <ul class="footer-socials">
              <li class="footer-socials__item">
                <a
                  href="https://instagram.com"
                  rel="noreferrer"
                  target="_blank"
                  class="footer-socials__link"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </li>{" "}
              <li class="footer-socials__item">
                <a
                  href="https://twitter.com"
                  rel="noreferrer"
                  target="_blank"
                  class="footer-socials__link"
                >
                  <i class="fab fa-twitter"></i>
                </a>
              </li>{" "}
              <li class="footer-socials__item">
                <a
                  href="https://vk.com"
                  rel="noreferrer"
                  target="_blank"
                  class="footer-socials__link"
                >
                  <i class="fab fa-vk"></i>
                </a>
              </li>{" "}
              <li class="footer-socials__item">
                <a
                  href="https://fb.com"
                  rel="noreferrer"
                  target="_blank"
                  class="footer-socials__link"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>{" "}
        <div class="footer-middle lazyloaded">
          <div class="footer-catalog lazyloaded">
            <p class="footer-catalog__title">Каталог</p>{" "}
            <ul class="footer-catalog__list">
              <li class="footer-catalog__item">
                <a
                  href="/categories?cat=Сценический свет&amp;sub=Cветодиодные приборы полного вращения"
                  class="footer-catalog__link"
                >
                  Сценический свет
                </a>
              </li>{" "}
              <li class="footer-catalog__item">
                <a
                  href="/categories?cat=Cветодиодное освещение&amp;sub=Прожекторы"
                  class="footer-catalog__link"
                >
                  Cветодиодное освещение
                </a>
              </li>{" "}
              <li class="footer-catalog__item">
                <a
                  href="/categories?cat=Архитектурный свет&amp;sub=Садовое и уличное освещение"
                  class="footer-catalog__link"
                >
                  Архитектурный свет
                </a>
              </li>{" "}
              <li class="footer-catalog__item">
                <a
                  href="/categories?cat=LED экраны&amp;sub=Светодиодный пол"
                  class="footer-catalog__link"
                >
                  LED экраны
                </a>
              </li>{" "}
              <li class="footer-catalog__item">
                <a
                  href="/categories?cat=Медиа фасады&amp;sub=Аксессуары"
                  class="footer-catalog__link"
                >
                  Медиа фасады
                </a>
              </li>{" "}
              <li class="footer-catalog__item">
                <a
                  href="/categories?cat=Проекционное оборудование&amp;sub=Проекторы"
                  class="footer-catalog__link"
                >
                  Проекционное оборудование
                </a>
              </li>
            </ul>
          </div>{" "}
          <div class="footer-contacts lazyloaded">
            <p class="footer-contacts__title">Контакты</p>{" "}
            <NavLink class="footer-contacts__email">
              thecavision@gmail.com
            </NavLink>{" "}
            <a href="tel:+48576409155" class="footer-contacts__phone">
              +48 (576) 40-91-55
            </a>{" "}
            <p class="footer-contacts__address">Warszawa, UI Humanska, 8</p>
          </div>
        </div>{" "}
        <div class="footer-bottom lazyloaded">
          <p class="copyright">2021 Theca vision. Все права защищены.</p>{" "}
          <p class="developer">
            Создано в{" "}
            <a href="https://digital-svita.ru" class="developer__link">
              Digital-агентстве S-Vita
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
