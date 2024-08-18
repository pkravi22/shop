import React, { useContext } from "react";
import './Cartitem.css'
import { ShopContext } from "../../Context/Context";
import cross_icon from "../Assests/cart_cross_icon.png";

const Cartitem = () => {
  const {all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartItems">
      <div className="cartitem_details">
        <p id="p1">Image</p>
        <p  className="title">Title</p>
        <p>Quantity</p>
        <p>Price</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      
      <div className="products">
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div className="cartItemFormat">
              <img id="product_image" src={e.image} alt="" />
              <p className="title">{e.name}</p>
             
              <p>
                <button className="quantity">{cartItems[e.id]}</button>
              </p>
              <p>${e.new_price}</p>
              <p>{e.new_price * cartItems[e.id]}</p>
              <img id="cross"
                src={cross_icon}
                alt="remove"
                onClick={() => removeFromCart()}
              />
             
            </div>
            
          );
        }
      })}
      </div>
      <hr />
    </div>
  );
};

export default Cartitem;
