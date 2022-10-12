import React, { Component } from "react";

const Buttons = (props) => {
  const handleDeleteClick = (e) => {
    props.data.removeEntry();
  };

  const { data } = props;
  const { id } = data;
  return (
    <div>
      <div onClick={handleDeleteClick} a-id={id} className="btn danger">
        {" "}
        Delete{" "}
      </div>
    </div>
  );
};

export default Buttons;
