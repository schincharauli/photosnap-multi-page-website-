import React from "react";
import logo from "../assets/logo.svg";
import menuIcon from "../assets/shared/mobile/menu.svg";

function Header() {
  return (
    <div>
      <nav className="flex items-center justify-between p-6">
        <img src={logo} />
        <img src={menuIcon} />
      </nav>
    </div>
  );
}

export default Header;
