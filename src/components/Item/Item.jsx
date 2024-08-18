import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0,0)} src={props.image} alt={props.name} />
      </Link>
      <p>{props.name}</p>
      <div className="item_price">
        <div className="old_price">${props.old_price}</div>
        <div className="new_price">${props.new_price}</div>
      </div>
    </div>
  );
};

export default Item;
