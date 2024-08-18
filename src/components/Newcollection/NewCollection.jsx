import React from "react";
import "./NewCollection.css";
import new_collection from "../Assests/new_collections";
import Item from "../Item/Item";
const NewCollection = () => {
  return (
    <div className="newcollection">
      <h1>New collection</h1>

      <div className="new_collection_items">
        {new_collection.map((item) => {
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

export default NewCollection;
