import React from "react";

const ChoiceListItem = ({ index, choice, sendVote }) => (
  <div className="choicelist__item flex-container">
    <p className="choicelist__item_text">{choice.choice}</p>
    <p className="choicelist__item_text">{choice.votes} votes</p>
    <button onClick={() => sendVote(index, choice.url)} className="button">
      Vote
    </button>
  </div>
);

export default ({ choices, sendVote }) => (
  <div className="choicelist">
    {choices.map((choice, i) => (
      <ChoiceListItem key={i} index={i} sendVote={sendVote} choice={choice} />
    ))}
  </div>
);
