import {extend} from "../../../utils/common";
import {ActionType} from "../../actions";
import {infoTabsMocks, productInfoMocks, promoSlidesMocks, promoPreviewsMocks} from "../../../mocks/mocks";

const initialState = {
  productInfo: productInfoMocks,

  promoPreviews: promoPreviewsMocks,
  promoSlides: promoSlidesMocks,
  currentPromoSlide: promoSlidesMocks[0],

  isLeftPromoSliderButtonDisabled: true,
  isRightPromoSliderButtonDisabled: false,
  activeInfoTab: infoTabsMocks.CHARACTERISTICS
};

const appProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.PROMO_SLIDE_LEFT:
      return extend(state, {
        currentPromoSlide: action.payload.newSlide,
        isLeftPromoSliderButtonDisabled: action.payload.isLeftPromoSliderButtonDisabled,
        isRightPromoSliderButtonDisabled: false
      });

    case ActionType.PROMO_SLIDE_RIGHT:
      return extend(state, {
        currentPromoSlide: action.payload.newSlide,
        isLeftPromoSliderButtonDisabled: false,
        isRightPromoSliderButtonDisabled: action.payload.isRightPromoSliderButtonDisabled
      });

    case ActionType.CHANGE_INFO_TAB:
      return extend(state, {
        activeInfoTab: action.payload
      });
  }

  return state;
};

export {appProcess};
