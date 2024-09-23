import React from "react";
import img1 from "../../resources/best-selection.svg";
import img2 from "../../resources/higher-profits.svg";
import img3 from "../../resources/robust-scaling.svg";

const Hero2 = () => {
  return (
    <div className="flex flex-row justify-center items-center space-x-12 mt-48 ml-24 mr-36">
      <div className="w-[700px]">
        <img src={img2} alt="selection" width="120" />
        <p className="font-sans font-[700] text-[24px] pt-8 pb-4">
          Higher Profits
        </p>
        <p className="font-sans text-[16px] ">
          We offer some of the lowest prices in the industry because print
          providers continuously compete to win your business.
        </p>
      </div>
      <div className="w-[700px]">
        <img src={img3} alt="selection" width="120" />
        <p className="font-sans font-[700] text-[24px] pt-8 pb-4">
          Robust Scaling
        </p>
        <p className="font-sans text-[16px]">
          Easily handle peak holiday seasons, with our wide network of partners
          and automatic routing functionality.
        </p>
      </div>
      <div className="w-[700px]">
        <img src={img1} alt="selection" />
        <p className="font-sans font-[700] text-[24px] pt-8 pb-4">
          Best Selection
        </p>
        <p className="font-sans text-[16px]">
          With 900+ products and top quality brands, you can choose the best
          products for your business.
        </p>
      </div>
    </div>
  );
};

export default Hero2;
