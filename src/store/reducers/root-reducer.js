import {combineReducers} from "redux";
import {reviewsReducer} from "./reviews-reducer/reviews-reducer";
import {appProcess} from "./app-process/app-process";

export const NameSpace = {
  APP_PROCESS: `APP_PROCESS`,
  REVIEWS: `REVIEWS`
};

export default combineReducers({
  [NameSpace.APP_PROCESS]: appProcess,
  [NameSpace.REVIEWS]: reviewsReducer
});
