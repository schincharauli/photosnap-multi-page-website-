import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoWhite.svg";
import socialIcons from "../assets/icons/allIcons.svg";
import arrow from "../assets/arrow.svg";

function Footer() {
  return (
    <div className=" bg-black pt-16 flex flex-col items-center">
      <img className="w-40" src={logo} alt="" />
      <div>
        <img className="pt-6" src={socialIcons} alt="" />
      </div>
      <nav className="text-white text-xs pt-6 flex flex-col">
        <Link to="/" className="p-2">
          Home
        </Link>
        <Link to="/stories" className="p-2">
          Stories
        </Link>
        <Link to="/features" className="p-2">
          Features
        </Link>
        <Link to="/pricing" className="p-2">
          Pricing
        </Link>
      </nav>
      <div>
        <button className="text-white pr-3 pt-4">GET AN INVITE</button>
        <button>
          <img src={arrow} alt="" />
        </button>
      </div>
      <p className=" text-gray-400 text-xs pt-6 mb-12">
        Copyright 2019. All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
