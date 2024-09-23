import React from "react";
import printify from "../../resources/logo-full.svg";
import facebook from "../../resources/facebook-icon.svg";
import instagram from "../../resources/instagram-icon.svg";
import linkedin from "../../resources/linkedin-icon.svg";
import twitter from "../../resources/X-Logo-Green.svg";
import youtube from "../../resources/youtube-icon.svg";
import tiktok from "../../resources/Tiktok-1.svg";
import reddit from "../../resources/reddit-icon.svg";

const SocialHandle = () => {
  return (
    <div className="flex justify-between items-center ml-[20px] mr-[30px] mt-[200px]">
      <img src={printify} alt="printify" width="150" />
      <ul className="flex justify-center items-center space-x-4">
        <li>
          <img src={facebook} alt="facebook" />
        </li>
        <li>
          <img src={instagram} alt="instagram" />
        </li>
        <li>
          <img src={linkedin} alt="linkedin" />
        </li>
        <li>
          <img src={twitter} alt="twitter" />
        </li>
        <li>
          <img src={youtube} alt="youtube" />
        </li>
        <li>
          <img src={tiktok} alt="tiktok" />
        </li>
        <li>
          <img src={reddit} alt="reddit" />
        </li>
      </ul>
    </div>
  );
};

export default SocialHandle;
