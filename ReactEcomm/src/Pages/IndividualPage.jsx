import React from "react";
import { useLocation } from "react-router-dom";

const IndividualPage = () => {
  const location = useLocation();
  const { state } = location;

  const handleAddCart = (item) => {
    if (localStorage.getItem("cart")) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));
    }else{
        localStorage.setItem("cart", JSON.stringify([item]));

    }
  };
  return (
    <div className="p-6 w-fit flex flex-col justify-center mt-2 items-center mx-auto bg-white shadow-lg rounded-lg">
      {/* Image Section */}
      <div className="mb-6">
        <img
          src={state.thumbnail}
          alt={state.title}
          className="w-80 h-auto rounded-lg shadow-md object-cover"
        />
      </div>

      {/* Title Section */}
      <h1 className="text-3xl font-bold mb-2 text-gray-800">{state.title}</h1>

      {/* Price Section */}
      <h2 className="text-2xl font-semibold text-gray-600 mb-4">
        ${state.price}
      </h2>

      {/* Description Section */}
      <div className="mb-6 w-80">
        <p className="text-gray-700 leading-relaxed">{state.description}</p>
      </div>

      {/* Category Section */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-sm text-gray-700 w-fit">
        <span className="font-semibold">Category:</span> {state.category}
      </div>
      <button
        onClick={() => handleAddCart(state)}
        className="mt-2 bg-gray-200 text-md p-2 rounded font-bold"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default IndividualPage;
