import React from "react";

const TxtBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to Our E-Commerce Store!
      </h1>
      <p className="text-lg">
        Discover amazing products at unbeatable prices. Shop now and enjoy
        exclusive offers!
      </p>
      <button className="mt-6 bg-white text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
        Shop Now
      </button>
    </div>
  );
};

export default TxtBanner;
