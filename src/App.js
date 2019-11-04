import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchQuestions } from "store/actions";

const App = ({ fetchQuestions }) => {
  useEffect(() => {
    fetchQuestions();
  }, []);
  return <h1>Hello</h1>;
};

const mapStateToProps = state => {
  return {
    questions: state.questions
  };
};

export default connect(
  mapStateToProps,
  { fetchQuestions }
)(App);
