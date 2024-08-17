import { Carousel } from "antd";
import React from "react";

const Banner = () => {
  const arr = ["Img1.jpg", "Img2.jpg"];
  return (
    <>
      <Carousel autoplay autoplaySpeed={2000}>
        {arr.map((elem) => {
          return <img className="h-96 object-cover" src={elem} />;
        })}
      </Carousel>
    </>
  );
};

export default Banner;
