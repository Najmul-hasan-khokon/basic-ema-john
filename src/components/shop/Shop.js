import React from "react";
import "./Shop.css";

function Shop({ product, handleAddProduct }) {
  return (
    <div className="containerDiv">
      <div className="left_area">
        <img src={product.img} alt="" />
      </div>
      <div className="right_area">
        <h4>{product.name}</h4>
        <h5>by {product.category}</h5>
        <h3>${product.price}</h3>
        <button type="button" onClick={() => handleAddProduct(product)}>
          add to cart
        </button>
      </div>
    </div>
  );
}

export default Shop;
