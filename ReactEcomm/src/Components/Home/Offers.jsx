import { Card } from "antd";
import React, { useEffect, useState } from "react";

const Offers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetch("https://dummyjson.com/products");
      const res = await data.json();
      setProducts(res?.products);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1 className="text-center text-2xl font-bold m-5">Explore Our Offers!</h1>
      <div className="flex flex-wrap justify-between gap-4">
        {products?.slice(0, 5).map((elem) => (
          <Card
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
    </>
  );
};

export default Offers;
