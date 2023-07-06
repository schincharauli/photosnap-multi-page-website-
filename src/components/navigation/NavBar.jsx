import React from "react";
import { useState } from "react";
import logo from "../../assets/logo.svg";
import menuIcon from "../../assets/shared/mobile/menu.svg";
import closeIcon from "../../assets/shared/mobile/close.svg";
import { Link } from "react-router-dom";
import Button from "./Button";

function NavBar() {
  let [open, setOpen] = useState(false);
  return (
    <div>
      <div className="shadow-md w-full fixed top-0 left-0 ">
        <div className="md:flex items-center justify-between bg-white py-8 md:px-10 px-7">
          <div>
            <img className=" cursor-pointer" src={logo} />
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <div>
              <img
                name={open ? "closeIcon" : "menuIcon"}
                src={open ? closeIcon : menuIcon}
                alt=""
              />
            </div>
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0   pb-4 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            <li className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                className="text-gray-800 hover:text-gray-400 duration-500"
                to="/stories"
                onClick={() => setOpen(false)}
              >
                Stories
              </Link>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                className="text-gray-800 hover:text-gray-400 duration-500"
                to="/features"
                onClick={() => setOpen(false)}
              >
                Features
              </Link>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                className="text-gray-800 hover:text-gray-400 duration-500"
                to="/pricing"
                onClick={() => setOpen(false)}
              >
                Pricing
              </Link>
            </li>

            <Button>GET AN INVITE</Button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

{
  /* <img src={menuIcon} /> */
}
