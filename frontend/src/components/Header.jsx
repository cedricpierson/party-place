import React from "react";
import logo from "./Logoheader.png";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#D9C46B",
      }}
    >
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Header;
