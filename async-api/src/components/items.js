import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchItems } from "../actions/index";

import Item from "./item";

const ItemInfo = props => {
  useEffect(() => {
    props.fetchItems();
  }, []);

  if (props.isFetching) {
    return <h3>Loaiding Items</h3>;
  }

  return (
    <div>
      {props.error && <p>{props.error}</p>}
      {props.items.map(item => (
        <Item key={item.id} name={item.name} price={item.sell_average} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    items: state.items,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchItems }
)(ItemInfo);
