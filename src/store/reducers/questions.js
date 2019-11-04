import { LIST_QUESTIONS } from "../types";

export default (state = [], action) => {
  switch (action.type) {
    case LIST_QUESTIONS:
      return action.questions;

    default:
      return state;
  }
};
