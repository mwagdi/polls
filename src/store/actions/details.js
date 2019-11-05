import axios from "axios";

import { SHOW_DETAILS, VOTE } from "../types";
import { API_URL } from "utils";

const showDetails = question => ({
  type: SHOW_DETAILS,
  question
});

export const fetchDetails = url => {
  return dispatch => {
    axios
      .get(`${API_URL}${url}`)
      .then(({ data }) => dispatch(showDetails(data)))
      .catch(err => console.log("ERROR: ", err));
  };
};

const vote = (index, choice) => ({
  type: VOTE,
  index,
  choice
});

export const sendVote = (index, url) => {
  return dispatch => {
    axios
      .post(`${API_URL}${url}`)
      .then(({ data }) => dispatch(vote(index, data)))
      .catch(err => console.log("ERROR: ", err));
  };
};
