import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
// import { setProducts } from "./redux/actions/productActions";
import axios from "axios";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = dispatch();
  const fetchProducts = async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    // dispatch(setProducts(res.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
  return (
    <div className="ui grid container">
      <ProductComponent />
      {/* <h1>ProductListing</h1> */}
    </div>
  );
};

export default ProductListing;
