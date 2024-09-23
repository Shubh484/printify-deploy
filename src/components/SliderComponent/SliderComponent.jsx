import React from "react";

const SliderComponent = (props) => {
  return (
    <div className="mt-[200px] flex flex-col justify-center items-start w-[400px] ml-[40px] bg-[#fff] p-6 pb-12 shadow-2xl rounded-xl ">
      <div className="flex justify-center items-center space-x-6">
        <img
          className="rounded-lg"
          src={props.photo}
          alt="pictures"
          width="80"
        />
        <div className="flex flex-col">
          <p className="font-sans font-semibold text-[24px] text-[#17262B]">
            {props.name}
          </p>
          <p className="font-sans text-[16px] text-[#29AB51]">{props.des}</p>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
      </div>
      <p className="font-sans text-16px text-[#485256] pt-4">
        {props.description}
      </p>
    </div>
  );
};

export default SliderComponent;
