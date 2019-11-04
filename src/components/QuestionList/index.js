import React from "react";
import { Link } from "react-router-dom";

const QuestionListItem = ({ question }) => (
  <div className="questionlist__item">
    <Link to={question.url.replace("/questions/", "")}>
      {question.question}
    </Link>
  </div>
);

export default ({ questions }) => (
  <div className="questionlist">
    {questions.map((question, i) => (
      <QuestionListItem key={i} question={question} />
    ))}
  </div>
);
