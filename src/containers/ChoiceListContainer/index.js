import React from "react";
import { connect } from "react-redux";

import { sendVote } from "store/actions";
import { ChoiceList } from "components";

const ChoiceListContainer = ({ choices, sendVote }) => (
  <ChoiceList choices={choices} sendVote={sendVote} />
);

export default connect(
  null,
  { sendVote }
)(ChoiceListContainer);
