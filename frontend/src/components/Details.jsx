import React from "react";
import Typography from "@mui/material/Typography";
import drinks from "./Details/ApiSim2";
import meals from "./Details/ApiSim";
import MealList from "./Details/MealListCreator";
import CocktailList from "./Details/CocktailListCreator";
import MobileButtonNav from "./Details/MobileButtonNav";
import logo from "./partyplace.png";
import SpotifyApp from "./Details/SpotifyApp";

function Details() {
  return (
    <div className="Britain Page" style={{ backgroundColor: "#FDF0CA" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#D9C468",
        }}
      >
        <img src={logo} alt="Party Place Logo" height="70vh" />
      </div>
      <Typography variant="h2" align="center" color="primary.main">
        Great Britain!
      </Typography>
      <MealList mealApiItems={meals} country="British" />
      <CocktailList cocktailApiItems={drinks} listAlcool="Gin" />
      <SpotifyApp />
      <MobileButtonNav />
    </div>
  );
}

export default Details;
