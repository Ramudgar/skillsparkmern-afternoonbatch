import React from "react";
import CardComponent from "../Card/cardComponent";

const ShopComponent = () => {
  const shops = [
    {
      name: "Shop1",
      description: "This is shop1",
      imgUrl:
        "data:image/jpeg;base64,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",
    },
    {
      name: "shop2",
      description: "This is shop2",
      imgUrl:
        "https://orchidlifesciences.com/wp-content/uploads/2024/06/01-14-01-1024x704.jpg",
    },
  ];

  return <CardComponent datas={shops} />;
};

export default ShopComponent;
