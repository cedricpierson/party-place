import React from "react";
import Typography from "@mui/material/Typography";
import { PropTypes } from "prop-types";
import drinks from "./ApiSim2";
import meals from "./ApiSim";
import MealList from "./MealListCreator";
import CocktailList from "./CocktailListCreator";
import MobileButtonNav from "./MobileButtonNav";
import logo from "./partyplace.png";
import SpotifyApp from "./SpotifyApp";

function Details({ Country, gentillet, alcool1 }) {
  return (
    <div className="Details Page" style={{ backgroundColor: "#FDF0CA" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#D9C468",
        }}
      >
        <img src={logo} alt="Party Place Logo" height="100%" />
      </div>
      <Typography
        variant="h2"
        align="center"
        color="primary.main"
        sx={{ letterSpacing: 5 }}
        style={{ textShadow: "3px 3px #c2a000" }}
      >
        {Country}
      </Typography>
      <MealList id="meal" mealApiItems={meals} country={gentillet} />
      <CocktailList
        id="cocktail"
        cocktailApiItems={drinks}
        listAlcool={alcool1}
      />
      <SpotifyApp />
      <MobileButtonNav element1={MealList} />
    </div>
  );
}

export default Details;
Details.propTypes = {
  Country: PropTypes.isRequired,
  gentillet: PropTypes.isRequired,
  alcool1: PropTypes.isRequired,
};
