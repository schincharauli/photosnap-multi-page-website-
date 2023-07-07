import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoWhite.svg";
import socialIcons from "../assets/icons/allIcons.svg";
import arrow from "../assets/arrow.svg";

function Footer() {
  return (
    <div className=" bg-black pt-16 flex flex-col items-center md:grid grid-cols-1 md:grid-cols-2 gap-4 md:items-center md:justify-centre md:pb-24 md:pl-12">
      <div className="md:w-1/2">
        <img className="w-40" src={logo} alt="" />

        <div className="md: flex flex-col-reverse">
          <div>
            <img className="pt-6" src={socialIcons} alt="" />
          </div>

          <div className="md:flex">
            <nav className="text-white text-xs pt-6 flex flex-col md:flex-row  ">
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
          </div>
        </div>
      </div>

      <div className="md:w-1/2">
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
    </div>
  );
}

export default Footer;
