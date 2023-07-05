import React from "react";
import logo from "../assets/logoWhite.svg";
import socialIcons from "../assets/icons/allIcons.svg";
import arrow from "../assets/arrow.svg";

function Footer() {
  return (
    <div className=" bg-black pt-16 flex flex-col p-4">
      <img src={logo} alt="" />
      <div>
        <img src={socialIcons} alt="" />
      </div>
      <nav>
        <p>HOME</p>
        <p>STORIES</p>
        <p>FEATURES</p>
        <p>PRICING</p>
      </nav>
      <div>
        <button className="text-white pr-3">GET AN INVITE</button>
        <button>
          <img src={arrow} alt="" />
        </button>
      </div>
      <p className=" text-gray-400 text-xs">
        Copyright 2019. All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
