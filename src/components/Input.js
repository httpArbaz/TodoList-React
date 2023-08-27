import React, { useState } from "react";

const Input = (props) => {
  const [Text, setText] = useState("");
  return (
    <>
      <div className="container">
        <input
          className="todo-input"
          type="text"
          value={Text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
        <button
          className="add-button"
          onClick={() => {
            props.AddItems(Text);
            setText("");
          }}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default Input;
