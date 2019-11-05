import React from "react";

import "./questionform.scss";

export default ({
  handleSubmit,
  handleQuestionChange,
  handleChoiceChange,
  error,
  question,
  choices,
  removeChoice,
  addChoice
}) => (
  <form onSubmit={handleSubmit} className="form">
    {error && <p className="error">{error}</p>}
    <div className="form__input">
      <label htmlFor="question">Question</label>
      <input
        value={question}
        onChange={handleQuestionChange}
        type="text"
        name="question"
      />
    </div>
    <div className="form__input">
      <label>Choices</label>
      {choices.map((choice, i) => (
        <div key={i} className="flex-container">
          <input
            value={choice}
            onChange={e => handleChoiceChange(e.target.value, i)}
            type="text"
            name={`choice_${i}`}
          />
          {i > 1 && (
            <button onClick={e => removeChoice(e, i)} className="button">
              &minus;
            </button>
          )}
        </div>
      ))}
      <button onClick={addChoice} className="button">
        Add choice
      </button>
    </div>
    <div className="form__input">
      <input className="button" type="submit" value="Create" />
    </div>
  </form>
);
