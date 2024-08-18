import React from "react";
import Item from "../Item/Item.jsx";
import data_product from "../Assests/data";
import "./Populer.css";
const Populer = () => {
  return (
    <div className="populer">
      <h1>Populer In Women!</h1>
      <div className="populer_item">
        {data_product.map((item) => {
          return (
            <Item
              id={item.id}
              name={item.name}
              image={item.image}
              old_price={item.old_price}
              new_price={item.new_price}
            />
          );
        })}
      </div>

      <hr />
    </div>
  );
};

export default Populer;
