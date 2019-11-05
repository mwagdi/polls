import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

import { checkForEmptyFields, API_URL } from "utils";
import { QuestionForm } from "components";

export default () => {
  const [question, setQuestion] = useState("");
  const [choices, setChoices] = useState(["", ""]);
  const [error, setError] = useState(null);
  const [done, setDone] = useState(false);
  const handleQuestionChange = e => {
    setQuestion(e.target.value);
    setError(null);
  };
  const handleChoiceChange = (text, index) => {
    const newChoices = choices.map((choice, i) =>
      i === index ? text : choice
    );
    setChoices(newChoices);
    setError(null);
  };
  const addChoice = e => {
    e.preventDefault();
    setChoices([...choices, ""]);
  };
  const removeChoice = (e, index) => {
    e.preventDefault();
    const newChoices = choices.filter((choice, i) => i !== index);
    setChoices(newChoices);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const emptyFields = checkForEmptyFields([...choices, question]);
    if (emptyFields) {
      setError("Please fill in all the fields");
    } else {
      axios
        .post(`${API_URL}/questions`, { question, choices })
        .then(response => setDone(true))
        .catch(err => console.log(error));
    }
  };
  if (done) {
    return <Redirect to="/" />;
  }
  return (
    <div className="main">
      <h1 className="main__title">Create a New Question</h1>
      <QuestionForm
        handleSubmit={handleSubmit}
        handleQuestionChange={handleQuestionChange}
        handleChoiceChange={handleChoiceChange}
        error={error}
        question={question}
        choices={choices}
        removeChoice={removeChoice}
        addChoice={addChoice}
      />
    </div>
  );
};
