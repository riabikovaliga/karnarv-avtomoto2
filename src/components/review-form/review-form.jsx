import React from "react";
import PropTypes from "prop-types";
import {Repeat} from "../../utils/common";

const ReviewForm = (props) => {

  const {
    onReviewFormClose,
    onValueChange,
    onBlurValidationCheck,
    onSubmit
  } = props;

  return (
    <div className="reviews__review-form review-form" onClick={onReviewFormClose}>
      <form
        action="#"
        className="review-form__form"
        onSubmit={onSubmit}
        onClick={(evt) => evt.stopPropagation()}
      >
        <h3 className="review-form__title">Оставить отзыв</h3>
        <button type="button" className="review-form__close-button" onClick={onReviewFormClose}>
          <span className="visually-hidden">Закрыть окно</span>
        </button>

        <div className="review-form__wrapper">
          <div className="review-form__required-wrapper" onBlur={onBlurValidationCheck}>
            <label htmlFor="author">
              <span className="review-form__required-message review-form__required-message--author">Пожалуйста, заполните поле</span>
              <span className="review-form__required-star"></span>
            </label>
            <input
              className="review-form__input review-form__input--required review-form__input--author"
              type="text"
              name="author"
              id="author"
              placeholder="Имя"
              value={localStorage.getItem(`author`) !== null ? localStorage.getItem(`author`) : ``}
              onChange={onValueChange}
              autoFocus/>
          </div>

          <input
            className="review-form__input review-form__input--advantages"
            type="text"
            name="advantages"
            id="advantages"
            placeholder="Достоинства"
            value={localStorage.getItem(`advantages`) !== null ? localStorage.getItem(`advantages`) : ``}
            onChange={onValueChange}
          />
          <input
            className="review-form__input"
            type="text"
            name="disadvantages"
            id="disadvantages"
            placeholder="Недостатки"
            value={localStorage.getItem(`disadvantages`) !== null ? localStorage.getItem(`disadvantages`) : ``}
            onChange={onValueChange}
          />

          <div className="review-form__rating">
            <span className="review-form__rating-title">Оцените товар:</span>
            <div>
              <Repeat numTimes={5}>
                {(i) => (
                  <input
                    key={i}
                    className="review-form__radio"
                    type="radio"
                    id={`star-${i + 1}`}
                    name="rating"
                    value={i + 1}
                    defaultChecked={localStorage.getItem(`rating`) === `${i + 1}` ? `defaultChecked` : ``}
                    onChange={onValueChange}
                  />
                )}
              </Repeat>
              <Repeat numTimes={5}>
                {(i) => (
                  <label key={i} className="review-form__star" htmlFor={`star-${i + 1}`}></label>
                )}
              </Repeat>
            </div>
          </div>

          <div className="review-form__required-wrapper" onBlur={onBlurValidationCheck}>
            <label htmlFor="comment">
              <span className="review-form__required-message review-form__required-message--comment">Пожалуйста, заполните поле</span>
              <span className="review-form__required-star"></span>
            </label>
            <textarea
              className="review-form__input review-form__input--required review-form__input--comment"
              type="text"
              name="comment"
              id="comment"
              placeholder="Комментарий"
              value={localStorage.getItem(`comment`) !== null ? localStorage.getItem(`comment`) : ``}
              onChange={onValueChange}
            />
          </div>
        </div>
        <button className="review-form__submit-button" type="submit">Оставить отзыв</button>
      </form>
    </div>
  );
};

ReviewForm.displayName = `ReviewForm`;

ReviewForm.propTypes = {
  onReviewFormClose: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
  onBlurValidationCheck: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default ReviewForm;
