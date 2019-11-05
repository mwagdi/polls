import React, { useState } from "react";

export default () => {
  const [question, setQuestion] = useState("");
  const [choices, setChoices] = useState(["", ""]);
  return (
    <div className="main">
      <h1 className="main__title">Create a New Question</h1>
      <form>
        <input type="text" name="" id="" />
      </form>
    </div>
  );
};
