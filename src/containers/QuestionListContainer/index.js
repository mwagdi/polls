import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchQuestions } from "store/actions";
import { QuestionList } from "components";

const QuestionListContainer = ({ fetchQuestions, questions }) => {
  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  return <QuestionList questions={questions} />;
};

const mapStateToProps = ({ questions }) => ({
  questions
});

export default connect(
  mapStateToProps,
  { fetchQuestions }
)(QuestionListContainer);
