import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const { id, title } = products[0];
  return (
    <div className="four column wide">
      {/* <h1>ProductComponent</h1> */}
      <div className="ui link cards"></div>
      <div className="card"></div>
      <div className="image"></div>
      <div className="content"></div>
      <div className="content"></div>
      <div className="header">{title}</div>
    </div>
  );
};

export default ProductComponent;
