import React, { Component } from "react";
import axios from "axios";

import { API_URL } from "utils";

class Question extends Component {
  state = {};
  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get(`${API_URL}/${id}`)
      .then(response => this.setState({ ...response.data }));
  }
  render() {
    const { question, choices } = this.state;
    return (
      <div className="main">
        <h1 className="main__title">{question || "Loading..."}</h1>
      </div>
    );
  }
}

export default Question;
