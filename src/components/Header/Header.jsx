import React from "react";
import logo from "../../resources/logo-full.svg";
import "../style.css";

const Header = () => {
  return (
    <div className="flex flex-row justify-center items-center space-x-44 pt-4 border-solid border-[#e3e0e0] border-b-[0.1px] pb-6 ">
      <img src={logo} alt="logo" height={40} width={160} />
      <ul className="flex flex-row space-x-4  ">
        <li>Catalog</li>
        <li>How it Works </li>
        <li>Pricing</li>
        <li>Blog</li>
        <li>Services</li>
        <li>Use-Cases</li>
        <li>Need Help?</li>
      </ul>
      <div className="flex flex-row space-x-4">
        <button className="border-solid border-[1px] border-[#a7a5a5] pt-2 pb-2 pr-4 pl-4">
          Log in
        </button>
        <button className="green-color pt-2 pb-2 pl-4 pr-4 font-semibold text-white border rounded-md">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Header;
