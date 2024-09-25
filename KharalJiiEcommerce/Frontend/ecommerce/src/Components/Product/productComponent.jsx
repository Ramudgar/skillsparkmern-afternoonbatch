import React, { useEffect, useState } from "react";
import CardComponent from "../Card/cardComponent";
import axios from "axios";
const domain = `http://localhost:8000`;

const ProductComponent = (id) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${domain}/api/products`);
      console.log(response.data.products);
      setProducts(response.data.products);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {products.length === 0 ? (
        <h1 className="text-center">Loading...</h1>
      ) : (
        <CardComponent datas={products} />
      )}
    </>
  );
};

export default ProductComponent;
