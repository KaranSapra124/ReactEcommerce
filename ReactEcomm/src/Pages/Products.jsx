import { Card } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleOpenIndividualPage = (item) => {
    navigate("/product-page", {
      state: item,
    });
  };
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetch(
        "https://dummyjson.com/products?limit=100&skip=100"
      );
      const res = await data.json();
      setProducts(res?.products);
    };
    fetchProducts();
  }, []);
  return (
    <div className="flex flex-wrap justify-between gap-4 mt-2">
      {products?.map((elem) => (
        <Card
          onClick={() => {
            handleOpenIndividualPage(elem);
          }}
          key={elem.id}
          className="w-full md:w-1/5 bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <img
            src={elem.thumbnail}
            alt={elem.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{elem.title}</h2>
            <h3 className="text-lg text-gray-600">${elem.price}</h3>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Products;
