import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";

import { fetchDetails } from "store/actions";
import { ChoiceListContainer } from "containers";

const Question = ({ question, choices, fetchDetails }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    fetchDetails(pathname);
  }, [pathname, fetchDetails]);
  return (
    <div className="main">
      <h1 className="main__title">{question}</h1>
      <ChoiceListContainer choices={choices} />
    </div>
  );
};

const mapStateToProps = state => {
  const { question, choices } = state.details;
  return {
    question,
    choices
  };
};

export default connect(
  mapStateToProps,
  { fetchDetails }
)(Question);
