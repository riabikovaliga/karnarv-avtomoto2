import React from "react";
import PropTypes from "prop-types";
import {changeInfoTab} from "../../store/actions";
import {connect} from "react-redux";
import {infoTabsMocks} from "../../mocks/mocks";

import Characteristics from "../characteristics/characteristics";
import Contacts from "../contacts/contacts";
import Reviews from "../reviews/reviews";

const InfoTabSection = (props) => {

  const {
    activeInfoTab,
    onInfoTabChange
  } = props;

  return (
    <section className="info-tab">
      <ul className="info-tab__buttons-list">
        <li>
          <a
            className={
              `info-tab__buttons-item${
                activeInfoTab === infoTabsMocks.CHARACTERISTICS ? ` info-tab__buttons-item--active` : ``
              }`
            }
            onClick={() => {
              onInfoTabChange(infoTabsMocks.CHARACTERISTICS);
            }}
            href="#nowhere"
          >
            Характеристики
          </a>
        </li>

        <li>
          <a
            className={
              `info-tab__buttons-item${
                activeInfoTab === infoTabsMocks.REVIEWS ? ` info-tab__buttons-item--active` : ``
              }`
            }
            onClick={() => {
              onInfoTabChange(infoTabsMocks.REVIEWS);
            }}
            href="#nowhere"
          >
            Отзывы
          </a>
        </li>

        <li>
          <a
            className={
              `info-tab__buttons-item${
                activeInfoTab === infoTabsMocks.CONTACTS ? ` info-tab__buttons-item--active` : ``
              }`
            }
            onClick={() => {
              onInfoTabChange(infoTabsMocks.CONTACTS);
            }}
            href="#nowhere"
          >
            Контакты
          </a>
        </li>
      </ul>

      <div className="info-tab__slides">
        {activeInfoTab === infoTabsMocks.CHARACTERISTICS && (
          <Characteristics/>
        )}

        {activeInfoTab === infoTabsMocks.REVIEWS && (
          <Reviews/>
        )}

        {activeInfoTab === infoTabsMocks.CONTACTS && (
          <Contacts/>
        )}
      </div>
    </section>
  );
};

InfoTabSection.displayName = `InfoTabSection`;

InfoTabSection.propTypes = {
  activeInfoTab: PropTypes.string.isRequired,

  onInfoTabChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  activeInfoTab: state.APP_PROCESS.activeInfoTab,
});

const mapDispatchToProps = (dispatch) => ({
  onInfoTabChange(tab) {
    dispatch(changeInfoTab(tab));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoTabSection);
