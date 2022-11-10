import React, { useState } from "react";
import Button from "@mui/material/Button";
import bgImg from "../assets/champagne3.jpg";

function Welcomepage() {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserInput(`${userInput}`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "20px",
        backgroundImage: `url(${bgImg})`,
        minHeight: "600px",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "150px",
        }}
      >
        <h5>Un apéro dinatoire aux couleurs de l'Italie?</h5>
        <h5>Votre anniversaire au rythme de la salsa?</h5>
        <h5>Laissez-vous guider</h5>
      </div>

      <form>
        <input
          style={{
            height: "34px",
            borderRadius: "17px 0px 0px 17px",
            paddingLeft: "15px",
            marginBottom: "40px",
          }}
          type="text"
          placeholder="Votre Nom"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />

        <Button
          sx={{ color: "primary.lighter", bgcolor: "primary.main" }}
          style={{
            height: "34px",
            width: "50px",
            borderRadius: "0px 17px 17px 0px",
            fontSize: "15px",
          }}
          onClick={handleSubmit}
        >
          {" "}
          GO{" "}
        </Button>
      </form>
    </div>
  );
}

export default Welcomepage;
