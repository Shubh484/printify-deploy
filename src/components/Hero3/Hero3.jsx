import React from "react";
import clothes_image from "../../resources/clothes-CMPWJ6JG.webp";
import right_arrow from "../../resources/link-arrow-A6VZADMD.svg";

const Hero3 = () => {
  return (
    <div className="flex flex-row justify-center items-center mt-48 ml-12 mr-32 space-x-32">
      <img
        className="bg-[#39B75D]"
        src={clothes_image}
        alt="clothes"
        width="500"
      />
      <div>
        <p className="font-sans text-[36px] font-bold">
          Easily add your design to a wide range of products
        </p>
        <p className="font-sans text-[16px] pt-8 pb-6">
          With our free design tools, you can easily add your custom designs to
          t-shirts, mugs, phone cases, and hundreds of other products.
        </p>
        <div className="flex space-x-2">
          <span className="font-sans text-[16px] font-medium text-[#39B75D]">
            All products
          </span>
          <img className="mt-1" src={right_arrow} alt="arrow" width="12" />
        </div>
      </div>
    </div>
  );
};

export default Hero3;
