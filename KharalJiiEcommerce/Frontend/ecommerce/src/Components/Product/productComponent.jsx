import React from "react";
import CardComponent from "../Card/cardComponent";

const ProductComponent = () => {
  const products = [
    {
      imgUrl:
        "https://fashionmingle.com/wp-content/uploads/2021/07/beauty-4993472_1920-e1635781134472.jpg",
      name: "Laptop",
      description: "This laptop is very good",

    },
    {
      name: "Mobile",
      description: "This mobile is very good",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu4_dQhCOznjcVJVBOncME6jWtEWTTzv7_bA&s",
    },
    {
      name: "Tablet",
      description: "This tablet is very good",
      imgUrl:
        "https://orchidlifesciences.com/wp-content/uploads/2024/06/01-14-01-1024x704.jpg",
        alt:"fashion beauty"
    },
    {
        name: "iphone",
        description: "This ipone is best",
        imgUrl:
          "https://orchidlifesciences.com/wp-content/uploads/2024/06/01-14-01-1024x704.jpg",
      },
      {
        name: "iphone",
        description: "This ipone is best",
        imgUrl:
          "https://orchidlifesciences.com/wp-content/uploads/2024/06/01-14-01-1024x704.jpg",
      },
      {
        name: "iphone",
        description: "This ipone is best",
        imgUrl:
          "https://orchidlifesciences.com/wp-content/uploads/2024/06/01-14-01-1024x704.jpg",
      },
  ];
  return (
    <>
      <CardComponent datas={products} />
    </>
  );
};

export default ProductComponent;
