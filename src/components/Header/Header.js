import React from "react";
import Logo from "../../assets/img/logo1.png";

import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="RENT PROPERTYS" />
      <h1>PROPERTYS RENT</h1>
    </div>
  );
}
