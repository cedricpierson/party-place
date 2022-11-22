import React from "react";
import logo from "./Logoheaderlight.png";

function homedetailsheader() {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#FFF5EC",
          width: "80%",
        }}
      >
        <img src={logo} alt="logo" />
      </div>

      <div
        style={{
          backgroundColor: "#D9C46B",
          width: "20%",
          alignItems: "flex-end",
        }}
      />
    </div>
  );
}

export default homedetailsheader;
