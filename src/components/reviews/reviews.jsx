import React from "react";
import PropTypes from "prop-types";
import {withReviews} from "../../hocs/with-reviews";
import ReviewForm from "../review-form/review-form";

const Reviews = (props) => {

  const {
    reviews,
    isFormOpened,
    onReviewFormOpen,
    onReviewFormClose,
    onValueChange,
    onBlurValidationCheck,
    onSubmit
  } = props;

  return (
    <div className="info-tab__slide reviews">
      <h2 className="visually-hidden">Отзывы</h2>
      <button className="reviews__add-review-button" onClick={onReviewFormOpen}>Оставить отзыв</button>

      {reviews.map((review, i) => (
        <div className="reviews__review" key={i}>
          <h3 className="reviews__author">{review.author}</h3>

          <ul className="reviews__elements-list">
            <li className="reviews__element reviews__element--advantage">
              <h4 className="reviews__title">Достоинства</h4>
              <p className="reviews__value">{review.advantages}</p>
            </li>
            <li className="reviews__element reviews__element--disadvantage">
              <h4 className="reviews__title">Недостатки</h4>
              <p className="reviews__value">{review.disadvantages}</p>
            </li>
            <li className="reviews__element">
              <h4 className="reviews__title">Комментарий</h4>
              <p className="reviews__value">{review.comment}</p>
            </li>
          </ul>

          <div className="reviews__rating-container">
            <div className="reviews__rating-wrapper">
              <span className={`reviews__star ${review.rating >= 1 ? `reviews__star--active` : ``}`}></span>
              <span className={`reviews__star ${review.rating >= 2 ? `reviews__star--active` : ``}`}></span>
              <span className={`reviews__star ${review.rating >= 3 ? `reviews__star--active` : ``}`}></span>
              <span className={`reviews__star ${review.rating >= 4 ? `reviews__star--active` : ``}`}></span>
              <span className={`reviews__star ${review.rating >= 5 ? `reviews__star--active` : ``}`}></span>
            </div>
            <span className="reviews__is-recommended">{review.rating >= 3 ? `Советует` : `Не советует`}</span>
          </div>

          <div className="reviews__footer">
            <span className="reviews__time">{review.date}</span>
            <a className="reviews__answer-button" href="#">Ответить</a>
          </div>
        </div>
      ))}

      {isFormOpened && (
        <ReviewForm
          onReviewFormClose={onReviewFormClose}
          onValueChange={onValueChange}
          onBlurValidationCheck={onBlurValidationCheck}
          onSubmit={onSubmit}
        />
      )}
    </div>
  );
};

Reviews.displayName = `Reviews`;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    advantages: PropTypes.string.isRequired,
    disadvantages: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,

  isFormOpened: PropTypes.bool.isRequired,
  onReviewFormOpen: PropTypes.func.isRequired,
  onReviewFormClose: PropTypes.func.isRequired,

  onValueChange: PropTypes.func.isRequired,
  onBlurValidationCheck: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default withReviews(Reviews);
