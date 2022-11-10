import React from "react";
import { Card, Typography } from "@mui/material/";
import { PropTypes } from "prop-types";
import PlaceIcon from "@mui/icons-material/Place";
import drinks from "./Divers/ApiSim2";
import meals from "./Divers/ApiSim";
import MealList from "./MealListCreator";
import CocktailList from "./CocktailListCreator";
import MobileButtonNav from "./MobileButtonNav";
import logo from "./partyplace.png";
import SpotifyApp from "./SpotifyApp";

function Details({ Country, gentillet, alcool1 }) {
  return (
    <div className="Details Page" sx={{ bgcolor: "#primary.light" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#D9C468",
        }}
      >
        <a href="#Home">
          <img src={logo} alt="Party Place Logo" height="100%" />
        </a>
      </div>
      <Card
        style={{
          margin: "1rem 1rem 1rem 0",
          display: "flex",
          justifyContent: "flex-start",
        }}
        sx={{
          display: "flex",
          bgcolor: "primary.main",
          borderRadius: "0 20px 20px 0",
        }}
      >
        <Typography
          variant="h2"
          style={{ display: "flex", alignItems: "center" }}
          sx={{ color: "primary.lighter", marginLeft: "1rem" }}
        >
          <PlaceIcon fontSize="Large" />
          {Country}
        </Typography>
      </Card>
      <MealList
        sx={{ margin: "1rem" }}
        id="meal"
        mealApiItems={meals}
        country={gentillet}
      />
      <CocktailList
        sx={{ margin: "1rem" }}
        id="cocktail"
        cocktailApiItems={drinks}
        listAlcool={alcool1}
      />
      <SpotifyApp sx={{ margin: "1rem" }} />
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
