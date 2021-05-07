import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const Characteristics = ({characteristics}) => {
  return (
    <div className="info-tab__slide info-tab__slide--characteristics characteristics">
      <h2 className="visually-hidden">Характеристики</h2>
      <table className="characteristics__parameters">
        {characteristics.map((entity, i) => (
          <tr className="characteristics__line" key={i}>
            <td className="characteristics__parameter">
              {entity.key}
            </td>

            <td className="characteristics__value">
              {entity.value}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

Characteristics.displayName = `Characteristics`;

Characteristics.propTypes = {
  characteristics: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired
};


const mapStateToProps = (state) => ({
  characteristics: state.APP_PROCESS.productInfo.characteristics
});

export default connect(mapStateToProps, null)(Characteristics);
