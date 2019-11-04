import axios from "axios";

import { LIST_QUESTIONS } from "../types";
import { API_URL } from "utils";

const listQuestions = questions => ({
  type: LIST_QUESTIONS,
  questions
});

export const fetchQuestions = () => {
  return dispatch => {
    axios
      .get(`${API_URL}/questions`)
      .then(({ data }) => dispatch(listQuestions(data)))
      .catch(err => console.log("ERROR: ", err));
  };
};
