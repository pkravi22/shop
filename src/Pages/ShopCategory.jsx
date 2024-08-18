import React, { useContext } from "react";
import { ShopContext } from "../Context/Context";
import Item from "../components/Item/Item";
import dropdownIcon from "../components/Assests/dropdown_icon.png";
import "./CSS/shopCategory.css";
import Footer from "../components/Footer/Footer.jsx";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  if (!all_product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="shop-category">
      <img src={props.banner} alt="banner" width='1200'/>
      <div className="shopcategorywise">
        <div className="heading">
          <p>showing 1-12 products out of 36</p>
          <div>
            sort by <img src={dropdownIcon} alt="dropdown icon" />
          </div>
        </div>
        <div className="category_collection">
          {all_product.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  old_price={item.old_price}
                  new_price={item.new_price}
                />
              );
            }
          })}
        </div>
        <hr />
        <Footer />
      </div>
    </div>
  );
};

export default ShopCategory;
