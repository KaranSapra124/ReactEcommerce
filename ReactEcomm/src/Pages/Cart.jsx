import { Card } from "antd";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    setCart(savedCart || []);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cart.map((elem) => (
          <Card
            key={elem.id} // Make sure each item has a unique id
            className="bg-white shadow-md rounded-lg overflow-hidden"
            cover={
              <img
                alt={elem.title}
                src={elem.thumbnail}
                className="w-full h-48 object-cover"
              />
            }
          >
            <div className="p-4">
              <h1 className="text-xl font-semibold text-gray-800 mb-2">
                {elem.title}
              </h1>
              <h2 className="text-lg font-medium text-gray-600">
                ${elem.price}
              </h2>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cart;
