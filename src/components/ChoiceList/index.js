import React, { memo } from "react";

import "./choicelist.scss";

const ChoiceListItem = ({ index, choice, sendVote }) => (
  <div className="choicelist__item flex-container flex-column-small space-between align-center">
    <p className="choicelist__item_text">{choice.choice}</p>
    <p className="choicelist__item_text">{choice.votes} votes</p>
    <button onClick={() => sendVote(index, choice.url)} className="button">
      Vote
    </button>
  </div>
);

const MemoizedChoiceListItem = memo(ChoiceListItem);

export default ({ choices, sendVote }) => (
  <div className="choicelist">
    {choices.map((choice, i) => (
      <MemoizedChoiceListItem
        key={i}
        index={i}
        sendVote={sendVote}
        choice={choice}
      />
    ))}
  </div>
);
