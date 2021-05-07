import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const ProductCard = (props) => {

  const {
    model,
    details,
    price
  } = props;

  return (
    <div className="product-section__product-card product-card">
      <h1 className="product-card__header">{model}</h1>

      <ul className="product-card__parameters-list">
        {Object.entries(details).map(([key, value]) =>
          <li key={key + value}>
            <p className={`product-card__parameters-item product-card__parameters-item--${key}`}>{value}</p>
          </li>
        )}
      </ul>

      <div className="product-card__price-wrapper">
        <p className="product-card__price">{price.current} &#x20bd;</p>
        <p className="product-card__price product-card__price--old">{price.old.toString()} &#x20bd;</p>
      </div>

      <a className="product-card__order-button" href="#nowhere">Оставить заявку</a>
      <a className="product-card__loan-button" href="#nowhere">В кредит от 11 000 &#x20bd;</a>
    </div>
  );
};

ProductCard.displayName = `ProductCard`;

ProductCard.propTypes = {
  model: PropTypes.string.isRequired,

  details: PropTypes.shape({
    fuel: PropTypes.string.isRequired,
    transmission: PropTypes.string.isRequired,
    power: PropTypes.string.isRequired,
    volume: PropTypes.string.isRequired,
  }).isRequired,

  price: PropTypes.shape({
    current: PropTypes.string.isRequired,
    old: PropTypes.string.isRequired
  }).isRequired,
};

const mapStateToProps = (state) => ({
  model: state.APP_PROCESS.productInfo.model,
  details: state.APP_PROCESS.productInfo.details,
  price: state.APP_PROCESS.productInfo.price,
});

export default connect(mapStateToProps, null)(ProductCard);
