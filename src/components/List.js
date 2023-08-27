import React from "react";

const List = (props) => {
  return (
    <>
      <div className="list">
        <li style={{ paddingRight: "10px" }}>{props.Items}</li>
        <button
          className="delete"
          onClick={() => {
            props.DeleteButton(props.Index);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default List;
