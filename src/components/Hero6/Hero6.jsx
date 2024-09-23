import React from "react";
import talk_to_sales from "../../resources/talk-to-sales-N2GDBAGC.svg";

const Hero6 = () => {
  return (
    <div className="mt-[-400px] bg-[#E2F7E3] w-[900px] h-[142px] ml-[80px] rounded-3xl">
      <img
        className="absolute left-[700px] rounded-2xl bg-[]"
        src={talk_to_sales}
        alt="talk-to-sales"
        width="450"
      />
      <p className="font-sans text-[25px] text-[#1F6B45] font-bold w-[360px] relative top-[35px] left-[85px]">
        Are you a large business looking for custom solutions?
      </p>
      <button className="font-sans text-[16px] font-medium bg-[#FFFFFF] text-[#353A47] pl-[16px] pr-[16px] pt-1 pb-1 relative bottom-[20px] left-[850px]">
        Talk to sales
      </button>
    </div>
  );
};

export default Hero6;
