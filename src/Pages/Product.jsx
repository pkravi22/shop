import React, { useContext } from "react";
import "./CSS/Product.css";
import { ShopContext } from "../Context/Context";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/Breadcrum/Breadcrum";
import Footer from "../components/Footer/Footer.jsx";
import starIcon from "../components/Assests/star_icon.png";
import dullstar from "../components/Assests/star_dull_icon.png";
import Discriptionbox from "../components/Discriptionbox/Discriptionbox.jsx";
import Relatedproduct from "../components/Relatedproduct/Relatedproduct.jsx";

const Product = (props) => {
  const { products } = props;
  const { all_product, addToCart } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="pro">
      <div className="breadcrum">
        <Breadcrum product={product} />
      </div>
      <div className="product">
        <div className="product-pics">
          <div className="smaller_product_pics">
            <img src={product.image} alt="product" />
            <img src={product.image} alt="product" />
            <img src={product.image} alt="product" />
            <img src={product.image} alt="product" />
          </div>
          <div className="main_product_pic">
            <img src={product.image} alt="product" />
          </div>
        </div>

        <div className="product-details">
          <div className="discription">
            <p>
              A lightweight, usually knitted, pullover shirt, close fitting and
              with a round neckline{" "}
            </p>
          </div>
          <div className="rating">
            <img src={starIcon} alt="" />
            <img src={starIcon} alt="" />
            <img src={starIcon} alt="" />
            <img src={starIcon} alt="" />
            <img src={dullstar} alt="" />
          </div>
          <div className="price">
            <p id="old_price">${product.old_price}</p>
            <p>${product.new_price}</p>
          </div>
          <div className="size">
            <ul>
              <li>S</li>
              <li>M</li>
              <li>L</li>
              <li>XL</li>
              <li>XXL</li>
            </ul>
          </div>
          <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
          <p className="productdisplay-right-category">
            <span>Category:</span> Women, Crop Top
          </p>
        </div>
      </div>
      <Discriptionbox />
      <Relatedproduct />
      <Footer />
    </div>
  );
};

export default Product;
