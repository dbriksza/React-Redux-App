import React from "react";

const Item = props => {
  return (
    <>
      <h3>{props.name}</h3>
      <h3>{props.price}</h3>
    </>
  );
};
