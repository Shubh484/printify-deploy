import React from "react";
import img1 from "../../resources/custom-products.webp";
import img2 from "../../resources/your-products.webp";
import img3 from "../../resources/fullfillment.webp";

const Hero4 = () => {
  return (
    <div className="flex justify-center items-center space-x-16 mt-36 ml-12">
      <div className="w-[320px] ">
        <img className="pb-12" src={img1} alt="products" width={200} />
        <span className="font-sans text-[18px] font-bold text-[#29AB51] ">
          CREATE
        </span>
        <br />
        <span className="font-sans text-[24px] font-semibold">
          custom products
        </span>
        <p className="font-sans text-[14px] pt-4">
          Easily add your designs to a wide range of products using our free
          tools
        </p>
      </div>
      <div className="w-[320px]">
        <img className="pb-12" src={img2} alt="products" width={200} />
        <span className="font-sans text-[18px] font-bold text-[#29AB51]">
          SELL
        </span>
        <br />
        <span className="font-sans text-[24px] font-semibold">
          on your terms
        </span>
        <p className="font-sans text-[14px] pt-4">
          You choose the products, sale price, and where to sell
        </p>
      </div>
      <div className="w-[320px]">
        <img className="pb-12" src={img3} alt="products" width={200} />
        <span className="font-sans text-[18px] font-bold text-[#29AB51]">
          WE HANDLE
        </span>
        <br />
        <span className="font-sans text-[24px] font-semibold ">
          fulfillment
        </span>
        <p className="font-sans text-[14px] pt-4">
          {" "}
          Once an order is placed, we automatically handle all the printing and
          delivery logistics{" "}
        </p>
      </div>
    </div>
  );
};

export default Hero4;
