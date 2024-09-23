import React from "react";
import stores_background from "../../resources/stores-background-QSGENTOX.svg";
import printify_image from "../../resources/printify-E3TBSF5R.svg";
import big_commerce from "../../resources/big-commerce-EGSGKPYX.svg";
import etsy from "../../resources/etsy-MXXFYORZ.svg";
import shopify from "../../resources/shopify-3NAPXPBF.svg";
import wix from "../../resources/wix-MWZCZDTE.svg";
import more from "../../resources/more-integration-4S3FHLQZ.svg";
import SquareSpace from "../../resources/squarespace-FIBF2RIF.svg";
import woo from "../../resources/woo-PGFAG65X.svg";
import presta from "../../resources/presta-54F6AYUU.svg";

const Hero5 = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-40 ">
      <span className="font-sans text-[40px] font-[660] text-[#17262B]">
        Connect your store
      </span>
      <span className="font-sans text-[16px]">
        Printify easily integrates with major e-commerce platforms and
        marketplaces
      </span>
      <div className="pt-12">
        <img
          className="absolute right-36"
          src={stores_background}
          alt="stores background"
        />
        <img
          className="bg-[#18C75A] p-8 pl-12 pr-12 border rounded-2xl relative top-28 left-4"
          src={printify_image}
          alt="printify"
          width={140}
        />
        <img
          className=" relative top-[-116px] left-[-140px] border p-5 bg-[#FFFFFF] shadow-lg rounded-3xl"
          src={big_commerce}
          alt="big commerce"
          width={80}
        />
        <img
          className="relative left-[450px] top-[60px] bg-[#FFFFFF] p-10 pt-20 pb-20 shadow-2xl rounded-3xl"
          src={etsy}
          alt="etsy"
        />
        <img
          className="relative left-[90px] top-[-80px] bg-[#FFFFFF] p-16 shadow-2xl rounded-3xl"
          src={shopify}
          alt="shopify"
        />
        <img
          className="relative top-[-600px] left-[550px] bg-[#FFFFFF] p-10 pb-16 shadow-2xl  rounded-3xl"
          src={wix}
          alt="wix"
        />
        <img
          className="relative left-[-85px] top-[-440px] bg-[#FFFFFF] p-1 shadow-2xl rounded-3xl"
          src={more}
          alt="more"
          width={100}
        />
        <img
          className="relative top-[-770px] left-[200px] bg-[#FFFFFF] p-1 shadow-2xl rounded-3xl"
          src={SquareSpace}
          alt="square space"
          width="120"
        />
        <img
          className="relative top-[-740px] left-[400px]  bg-[#FFFFFF] p-6 shadow-2xl rounded-3xl"
          src={woo}
          alt="woo"
        />
        <img
          className="relative top-[-800px] left-[-160px]  bg-[#FFFFFF] p-6 shadow-2xl rounded-3xl"
          src={presta}
          alt="presta"
        />
      </div>
      <p className="font-sans text-[33px] text-[#485256] font-semibold relative top-[-750px] left-[-420px]  bg-[#FFFFFF] p-12 shadow-2xl rounded-3xl">
        API
      </p>
    </div>
  );
};

export default Hero5;
