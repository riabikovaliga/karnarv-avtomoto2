export const promoSlidesMocks = [
  `img/desktop-slide-1.jpg`,
  `img/desktop-slide-2.jpg`,
  `img/desktop-slide-3.jpg`,
];

export const promoPreviewsMocks = [
  `img/preview-1.jpg`,
  `img/preview-2.jpg`,
  `img/preview-3.jpg`,
];

export const infoTabsMocks = {
  CHARACTERISTICS: `Characteristics`,
  REVIEWS: `Reviews`,
  CONTACTS: `Contacts`,
};

export const mapDataMocks = {
  CENTER: [59.96817146, 30.31640003],
  ZOOM: 16,
  WIDTH: 431,
  HEIGHT: 271,
  MARK: [59.968136, 30.316262],
};

export const productInfoMocks = {
  model: `Марпех 11`,

  details: {
    fuel: `бензин`,
    transmission: `механика`,
    power: `100 л.с.`,
    volume: `1.4 л`
  },

  price: {
    current: `2 300 000`,
    old: `2 \u00A0400 000`
  },

  characteristics: [
    {
      key: `Трансмиссия`,
      value: `Роботизированная`
    },

    {
      key: `Мощность двигателя, л.с.`,
      value: `249`
    },

    {
      key: `Тип двигателя`,
      value: `Бензиновый`
    },

    {
      key: `Привод`,
      value: `Полный`
    },

    {
      key: `Объем двигателя, л`,
      value: `2.4`
    },

    {
      key: `Макс. крутящий момент`,
      value: `370/4500`
    },

    {
      key: `Количество цилиндров`,
      value: `4`
    }
  ]
};


export const reviewsMocks = [
  {
    author: `Борис Иванов`,
    advantages: `мощность, внешний вид`,
    disadvantages: `Слабые тормозные колодки (пришлось заменить)`,
    comment: `Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен..`,

    rating: 3,
    date: `1 минуту назад`
  },

  {
    author: `Марсель Исмагилов`,
    advantages: `Cтиль, комфорт, управляемость`,
    disadvantages: `Дорогой ремонт и обслуживание`,
    comment: `Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.`,

    rating: 3,
    date: `1 минуту назад`
  }
];
