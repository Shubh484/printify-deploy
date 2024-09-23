import React from "react";
import tshirt from "../../resources/img_5.png";
import check_mark from "../../resources/check-mark-EHPN4OB5.svg";
import "../style.css";

const Hero = () => {
  return (
    <div className="mt-[120px] flex flex-row justify-between items-center ml-[70px] mr-[260px]">
      <div>
        <p className="hero-font w-[460px] font-bold ">
          Create and sell custom products{" "}
        </p>
        <ul className="pt-4 pb-2">
          <span className="flex flex-row pb-2">
            <img className="pt-2 pb-2" src={check_mark} alt="" />
            <li className="pl-2 font-[500]"> 100% Free to use </li>
          </span>
          <span className="flex flex-row pb-2">
            <img className="pt-2 pb-2" src={check_mark} alt="" />
            <li className="pl-2 font-[500]">900+ High-Quality Products</li>
          </span>
          <span className="flex flex-row ">
            <img className="pt-2 pb-2" src={check_mark} alt="" />
            <li className="pl-2 font-[500]">Largest global print network</li>
          </span>
        </ul>
        <div className="pb-4 pt-4">
          <button className="green-color pt-3 pb-3 pl-5 pr-5 font-bold text-white border rounded-md">
            Start for free
          </button>
          <button className="border-solid border-[1px] border-[#a7a5a5] pt-3 pb-3 pr-4 pl-4 ml-4">
            How it works ?
          </button>
        </div>

        <p className="text-[#39b65E] font-sans font-semibold text-[16px] ">
          Trusted by over 8M sellers around the world
        </p>
      </div>
      <img src={tshirt} alt="tshirt" width="320" />
    </div>
  );
};

export default Hero;
