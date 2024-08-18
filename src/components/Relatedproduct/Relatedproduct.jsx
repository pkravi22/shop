import React from "react";
import data_product from "../Assests/data";
import Item from "../Item/Item";
import './Related.css'
const Relatedproduct =() => {
    return (
      <div className="related">
        <h1>Related Product</h1>
        <div className="related_item">
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

export default Relatedproduct;
