import React from "react";
import YandexMap from "../yandex-map/yandex-map";

const Contacts = () => {
  return (
    <div className="info-tab__slide contacts">
      <h2 className="visually-hidden">Контакты</h2>
      <div className="contacts__wrapper">
        <div className="contacts__address-block">
          <h3 className="contacts__title contacts__title--address">
            Адрес
          </h3>
          <div className="contacts__line">
            <p className="contacts__line contacts__line--address-line">Санкт-Петербург,</p>
            <p className="contacts__line contacts__line--address-line">набережная реки Карповки, дом 5</p>
          </div>

          <h3 className="contacts__title">
            Режим работы
          </h3>
          <p className="contacts__line">
            Ежедневно, с 10:00 до 21:00
          </p>

          <h3 className="contacts__title">
            Телефон
          </h3>
          <a className="contacts__line contacts__line--link" href="tel:88003335599">
            8 (800) 333-55-99
          </a>

          <h3 className="contacts__title">
            E-mail
          </h3>
          <a className="contacts__line contacts__line--link" href="mailto:info@avto-moto.ru">
            info@avto-moto.ru
          </a>
        </div>
        <div className="contacts__map-container">
          <img className="contacts__map-img" src="img/map.jpg" width="431" height="271"
            alt="Санкт-Петербург, набережная реки Карповки, дом 5"/>
          <YandexMap/>
        </div>
      </div>
    </div>
  );
};

Contacts.displayName = `Contacts`;

export default Contacts;
