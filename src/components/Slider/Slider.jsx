// Slider.js
import React, { useState } from "react";
import SliderComponent from "../SliderComponent/SliderComponent";
import photo1 from "../../resources/robert-voltaire-RIZV7QXV.webp";
import photo2 from "../../resources/quinten-barney-CHC7B3FG.png";
import photo3 from "../../resources/nikki-TJP4NANB.png";

import photo4 from "../../resources/spencer-brett-kyle-NLHTAZDT.png";

const Slider = () => {
  const slides = [
    {
      photo: photo1,
      name: "Robert A. Voltaire ",
      des: "Store link",
      description:
        "Printify has been an incredible service for us musicians unable to keep large amounts of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!",
    },
    {
      photo: photo2,
      name: "Quinten Barney",
      des: "Etsy merchant",
      description:
        "Printify has been an incredible service for us musicians unable to keep large amounts of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!",
    },
    {
      photo: photo3,
      name: "Nikki",
      des: "Store link",
      description:
        "Printify has been an incredible service for us musicians unable to keep large amounts of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!",
    },
    {
      photo: photo4,
      name: "Spencer,Brett,and Kyle",
      des: "Store link",
      description:
        "Printify has been an incredible service for us musicians unable to keep large amounts of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!",
    },
    {
      photo: photo4,
      name: "Spencer,Brett,and Kyle",
      des: "Store link",
      description:
        "Printify has been an incredible service for us musicians unable to keep large amounts of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!",
    },
    {
      photo: photo4,
      name: "Spencer,Brett,and Kyle",
      des: "Store link",
      description:
        "Printify has been an incredible service for us musicians unable to keep large amounts of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!",
    },
  ];

  const slidesToShow = 3;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < slides.length - slidesToShow) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="relative w-full flex flex-col justify-center items-center mt-10 mb-10">
      <div className="overflow-hidden w-[80%]">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              className={`flex-shrink-0 w-[${100 / slidesToShow}%] px-2`}
              key={index}
            >
              <SliderComponent
                photo={slide.photo}
                name={slide.name}
                des={slide.des}
                description={slide.description}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-[1100px] ">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full focus:outline-none"
          disabled={currentIndex === 0}
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full  focus:outline-none"
          disabled={currentIndex >= slides.length - slidesToShow}
        >
          &#10095;
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {Array(Math.ceil(slides.length / slidesToShow))
          .fill()
          .map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full ${
                currentIndex === index * slidesToShow
                  ? "bg-green-500"
                  : "bg-gray-300"
              }`}
            ></span>
          ))}
      </div>
    </div>
  );
};

export default Slider;
