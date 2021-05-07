import React from "react";
import {connect} from "react-redux";
import {promoSlideLeft, promoSlideRight} from "../../store/actions";
import PropTypes from "prop-types";
import {getPreviousElement, getNextElement} from "../../utils/common";

const PromoSlider = (props) => {

  const {
    promoPreviews,
    promoSlides,
    currentPromoSlide,

    onLeftSlideClick,
    onRightSlideClick,

    isLeftButtonDisabled,
    isRightButtonDisabled
  } = props;

  return (
    <div className="product-section__promo-slider promo-slider">
      <div className="promo-slider__slide">
        <img src={currentPromoSlide} width="600" height="375" alt="превью автомобиля"/>
      </div>
      <div className="promo-slider__panel">
        <button
          className={
            `promo-slider__button promo-slider__left-button${
              isLeftButtonDisabled ? ` promo-slider__left-button--disabled` : ``
            }`
          }
          type="button"
          aria-label="Слайд назад"
          disabled={isLeftButtonDisabled}
          onClick={() => {
            onLeftSlideClick(promoSlides, currentPromoSlide);
          }}
        >
          <span className="visually-hidden" aria-hidden="true">Слайд назад</span>
        </button>

        <ul className="promo-slider__preview-list">
          {promoPreviews.map((preview, i) => (
            <li key={i}>
              <img className="promo-slider__preview-image" src={preview} width="128" height="80" alt="превью автомобиля"/>
            </li>
          ))}
        </ul>

        <button
          className={
            `promo-slider__button promo-slider__right-button${
              isRightButtonDisabled ? ` promo-slider__right-button--disabled` : ``
            }`
          }
          type="button"
          aria-label="Слайд вперед"
          disabled={isRightButtonDisabled}
          onClick={() => {
            onRightSlideClick(promoSlides, currentPromoSlide);
          }}
        >
          <span className="visually-hidden" aria-hidden="true">Слайд вперед</span>
        </button>
      </div>
    </div>
  );
};

PromoSlider.displayName = `PromoSlider`;

PromoSlider.propTypes = {
  promoPreviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  promoSlides: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  currentPromoSlide: PropTypes.string.isRequired,

  onLeftSlideClick: PropTypes.func.isRequired,
  onRightSlideClick: PropTypes.func.isRequired,

  isLeftButtonDisabled: PropTypes.bool.isRequired,
  isRightButtonDisabled: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  promoPreviews: state.APP_PROCESS.promoPreviews,
  promoSlides: state.APP_PROCESS.promoSlides,
  currentPromoSlide: state.APP_PROCESS.currentPromoSlide,

  isLeftButtonDisabled: state.APP_PROCESS.isLeftPromoSliderButtonDisabled,
  isRightButtonDisabled: state.APP_PROCESS.isRightPromoSliderButtonDisabled
});

const mapDispatchToProps = (dispatch) => ({
  onLeftSlideClick(promoSlides, currentPromoSlide) {
    let newSlide = getPreviousElement(promoSlides, currentPromoSlide);
    let isLeftPromoSliderButtonDisabled = getPreviousElement(promoSlides, currentPromoSlide) === promoSlides[0];
    dispatch(promoSlideLeft(newSlide, isLeftPromoSliderButtonDisabled));
  },

  onRightSlideClick(promoSlides, currentPromoSlide) {
    let newSlide = getNextElement(promoSlides, currentPromoSlide);
    let isRightPromoSliderButtonDisabled = getNextElement(promoSlides, currentPromoSlide) === promoSlides[promoSlides.length - 1];
    dispatch(promoSlideRight(newSlide, isRightPromoSliderButtonDisabled));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PromoSlider);
