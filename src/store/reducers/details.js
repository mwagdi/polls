import { SHOW_DETAILS, VOTE } from "../types";

const initialState = {
  question: "Loading...",
  choices: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_DETAILS:
      return action.question;
    case VOTE:
      return {
        ...state,
        choices: state.choices.map((choice, i) =>
          i === action.index ? action.choice : choice
        )
      };
    default:
      return state;
  }
};
