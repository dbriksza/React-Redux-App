import React from "react";

const Item = props => {
  return (
    <>
      <h3>Item: {props.name}</h3>
      <h3>Cost: {props.price}</h3>
    </>
  );
};

export default Item;
